import {Box, Flex, Link} from "@chakra-ui/react"
import { DarkModeSwitch } from "components/atoms/DarkModeToggle"
import {generate} from 'shortid'
import { mainLinks, LinkArr } from "meta/navLinks"
import siteMetaData from "meta/siteMetaData"
import  NextLink  from "next/link"



const Nav = ({...rest}) => {
  return (
    <Flex {...rest}>Nav
      <Flex>
        {mainLinks.map((link)=> {
          return (
          <NextLink key={generate()} href={link.path} passHref>
            <Link>
            {link.name}
            </Link>
          </NextLink>
          )
        })}
      </Flex>
      <DarkModeSwitch/>
    </Flex>
  )
}

const MobileNav = ({...rest}) => {
  return (
    <Flex {...rest}>Mobile Nav</Flex>
  )
}

export  {Nav, MobileNav}