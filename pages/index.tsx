import { Box, Heading } from '@chakra-ui/react'
import { DefaultLayout } from 'components'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Box>Home</Box>
    </DefaultLayout>
  )
}

export default Home
