import { redirect } from 'next/navigation'

export default function RootPage() {
  // const router = useRouter();
  // XXX:// 这样首页就访问不了了，得带上语言前缀， 最好是让nginx根据国家返回html吧。这里先用客户端组件吧
  redirect('/' + 'en')
}
