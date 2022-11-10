import {
  useState,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  HTMLInputTypeAttribute,
  useEffect,
} from 'react'
import {
  Box,
  Flex,
  Container,
  Heading,
  Input,
  Text,
  Button,
} from '@chakra-ui/react'
import { DefaultLayout, LanguageSelect, IterationCount } from 'components'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { generate } from 'shortid'
import { useLanguage, Language, useWord, useResults, useCount } from 'store'

/**
 * init types
 *  */
const defaultLanguage: Language = 'non-sense'

const Home: NextPage = () => {
  const [language, setLanguage] = useLanguage(defaultLanguage)
  const [word, setWord] = useWord('')
  const [results, setResults] = useResults([])
  const [count, setCount] = useCount(1)

  const shuffleWord = () => {
    const lettersArr = word.split('')

    let c = count
    while (c > 0) {
      lettersArr.sort(() => Math.random() - 0.5)
      const newShuffle = lettersArr.join('')
      console.log(newShuffle)
      setResults((prev) => [...prev, newShuffle])
      c = c - 1
    }
  }

  useEffect(() => {
    console.log('results')
    console.log(results)
  }, [results])

  useEffect(() => {
    console.log('word')
    console.log(word)
  }, [word])

  return (
    <DefaultLayout>
      <Container maxW="container.xl">
        <Heading>Letter Scramble</Heading>
        <Flex flexWrap="wrap" py={10}>
          <Box>
            <Heading as="div" size="sm">
              Word
            </Heading>
            <Input
              flexBasis={{ base: '60%' }}
              placeholder="word"
              onChange={({ target: { value } }) => setWord(value)}
            />
          </Box>
          <Box>
            <Heading as="div" size="sm">
              Language
            </Heading>
            <LanguageSelect
              flexBasis={{ base: '10%' }}
              language={language}
              setLanguage={setLanguage}
            />
          </Box>
          <IterationCount setCount={setCount} />
          <Button onClick={() => shuffleWord()}>Shuffle</Button>
        </Flex>
        {results.length > 0 && (
          <>
            <Flex flexDir="column" py="10">
              {results &&
                results.map((r) => {
                  return <Text key={generate()}>{r}</Text>
                })}
            </Flex>
            <Button size="sm" onClick={() => setResults((prev) => [])}>
              Clear Results
            </Button>
          </>
        )}
      </Container>
    </DefaultLayout>
  )
}

export default Home
