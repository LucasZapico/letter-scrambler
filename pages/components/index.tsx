import { Flex, Box, Container, Heading } from '@chakra-ui/react'
import { DefaultLayout } from 'components'
import type { NextPage } from 'next'
import Image from 'next/image'
import styleGuideData from 'components/data/componentsData'
import { generate } from 'shortid'

const createTree = () => {
  const results = styleGuideData.map((s) => {
    if()
  })
}

const SideNav = () => {
  return (
    <Box>

    </Box>
  )
}

const Components: NextPage = () => {
  return (
    <DefaultLayout>
      <Flex>
        <Box>

        </Box>

        <Container maxW="container.xl">
          {styleGuideData.map((s) => {
            return (
              <Box key={generate()}>
                <Heading as="div" size="md">
                  {s.componentName}
                </Heading>
                <s.component />
              </Box>
            )
          })}
        </Container>
      </Flex>
    </DefaultLayout>
  )
}

export default Components
