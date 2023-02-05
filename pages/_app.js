import Layout from '@/components/layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  // 페이지에 다른 레이아웃이 적용되어 있다면 그 레이아웃을 사용
  // 그렇지 않다면 기본 레이아웃을 사용
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

  // const getLayout = Component.getLayout || ((page) => page)

  // return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
  return getLayout(<Component {...pageProps} />)
}
