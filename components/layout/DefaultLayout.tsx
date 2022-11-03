import { Footer, Header } from 'components'
import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default DefaultLayout
