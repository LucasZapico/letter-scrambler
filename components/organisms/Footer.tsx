import { Flex, Heading, Box, Link } from '@chakra-ui/react'
import { generate } from 'shortid'
import { mainLinks } from 'meta/navLinks'
import siteMetaData from 'meta/siteMetaData'
import NextLink from 'next/link'
import { SubFooter } from 'components/index'

const Footer = () => {
  return (
    <Box
      borderWidth="1px"
      borderColor="red.100"
      minH="500px"
      display={{ base: 'flex' }}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        justifyContent="space-between"
        padding="1rem"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Heading as="div">Footer</Heading>
      </Flex>
      <Flex flexDir={{ base: 'column' }}>
        {mainLinks.map((link) => {
          return (
            <NextLink key={generate()} href={link.path} passHref>
              <Link variant="navLink">{link.name}</Link>
            </NextLink>
          )
        })}
      </Flex>
      <SubFooter />
    </Box>
  )
}

export default Footer
