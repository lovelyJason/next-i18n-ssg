// import {redirect} from 'next/navigation';

// export default function RootPage() {
//   redirect('/en');
// }

'use client'
import { useEffect } from 'react';
// import { useRouter } from 'next/router';
import { redirect } from 'next/navigation';

export default function RootPage() {
  // const router = useRouter();
  useEffect(() => {
    const preferredLanguage = navigator.language.split('-')[0];
    console.log('preferredLanguage', preferredLanguage)
    // 根据语言代码重定向到相应的路径
    switch (preferredLanguage) {
      case 'zh':
        redirect('/zh');
        break;
      case 'en':
        redirect('/en');
        break;
      // 其他语言处理...
      default:
        redirect('/en'); // 如果没有匹配的语言，重定向到默认的（例如英文）
    }
  }, []);

  return <div>Loading...</div>; // 这里返回一个简单的占位符，因为重定向将在组件挂载后立即发生
}

// import { redirect } from 'next/navigation';

// export async function getServerSideProps(context: any) {
//   const { req } = context;
//   const acceptLanguage = req.headers['accept-language'];
//   console.log('acceptLanguage', acceptLanguage)

//   let lang = 'en'; // 默认语言
//   if (acceptLanguage) {
//     // 这里可以根据实际情况解析accept-language，这里仅作示例
//     const primaryLang = acceptLanguage.split(',')[0].split(';')[0];
//     if (primaryLang === 'zh') {
//       lang = 'zh';
//     }
//   }

//   // 返回重定向信息
//   return {
//     redirect: {
//       destination: `/${lang}`, // 根据语言重定向
//       permanent: false, // 是否为永久重定向，根据实际情况设置
//     },
//   };
// }

// function RootPage() {
//   // 页面内容实际上不会显示，因为我们在getServerSideProps中已经重定向了
//   return <div>Redirecting...</div>;
// }

// export default RootPage;
