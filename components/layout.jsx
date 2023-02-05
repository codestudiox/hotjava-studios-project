import DefaultFooter from './footer';
import DefaultHeader from './header';

export default function Layout({children}) {
  return (
    <>
      <DefaultHeader />
      {children}
      <DefaultFooter />
    </>
  )
}
