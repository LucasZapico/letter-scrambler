import { Box, Heading } from '@chakra-ui/react'
import { DefaultLayout } from 'components'
import {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styleGuideData from 'components/data/componentsData'

type ComponentProps = {
  name: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = styleGuideData.map((page) => {
    const component = page.component.replace(' ', '-')
    return { params: { component } }
  })
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  console.log('context')
  console.log(context)

  return {
    props: { component: 'text' },
  }
}

const Component: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  console.log('props')
  console.log(props)
  const router = useRouter()
  return (
    <DefaultLayout>
      <Box>{router.asPath}</Box>
      {/* {props.notfound ? <Box>{props.pages.name}</Box> : <div>Not found</div>} */}
    </DefaultLayout>
  )
}

export default Component
