import {
  Container,
  Box,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

import useSwr from 'swr'
import type { Article } from '../interfaces/article'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Home: NextPage = () => {
  const { data, error, isLoading } = useSwr<Article[]>('https://jsonplaceholder.typicode.com/posts', fetcher);

  return (
    <div>
      <Head>
        <title>Heavnn</title>
      </Head>
      <Container maxW="container.xl" py="27">
        <Button colorScheme="teal"> <Link href="/posts/1"> Go to Blog </Link> </Button>
        <Accordion>
          {data?.map((article, key) => (
            <AccordionItem key={key}>
              <AccordionButton>
                <Box flex={1} textAlign='left'>{article.title}</Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text> {article.body} </Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </div>
  )
}

export default Home
