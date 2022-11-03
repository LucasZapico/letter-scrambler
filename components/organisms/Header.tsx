import { Nav, MobileNav } from 'components'

const Header = () => {
  return (
    <header>
      <Nav display={{ base: 'none', md: 'block' }} />
    </header>
  )
}

export default Header
