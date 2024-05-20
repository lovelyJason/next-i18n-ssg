// app/page.tsx
'use client'
import { useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next-intl/client';

console.log(process.env.ab)

// zh-CN -> zh, todo: zh-tw要额外处理
function normalizeCountryCode(code: string) {
  // 先将字符串转换为小写
  code = code.toLowerCase();

  // 移除可能出现的短横线（-）
  code = code.replace(/-/g, '');

  // 移除可能出现的下划线（_）
  code = code.replace(/_/g, '');

  // 取前两个字符，以符合ISO 3166-1 alpha-2格式
  code = code.slice(0, 2);

  // 返回规范化后的代码
  return code;
}

export default function HomePage() {
  const t = useTranslations('HomePage')
  const router = useRouter();
  const pathname = usePathname();


  useEffect(() => {
    const locale = navigator.language
    // router.replace(pathname, { locale: normalizeCountryCode(locale) });

  }, [])

  return (
    <div>
      {t('helloWorld')}
    </div>
  )
}
