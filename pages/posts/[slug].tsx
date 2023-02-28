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
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import useSwr from 'swr'
import type { Article } from '../../interfaces/article'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const ArticlePage: NextPage = () => {
  const { data, error, isLoading } = useSwr<Article[]>('https://jsonplaceholder.typicode.com/posts', fetcher);
  const router = useRouter()
  const pageNum: number = router.query?.slug && Number(router.query?.slug) > 0 ? Number(router.query.slug) : 1;
  const LinkComponent = (
    <Box style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
      <Button colorScheme="teal"> <Link href={`/posts/${pageNum - 1}`}> Previous </Link> </Button>
      <Button colorScheme="teal"> <Link href={`/posts/${pageNum + 1}`}> Next </Link> </Button>
    </Box>
  )
  return (
    <div>
      <Head>
        <title>Heavnn</title>
      </Head>
      <Container maxW="container.xl" py="27">
        {LinkComponent}
        <br />
        <Accordion>
          {data?.map((article, key) => (
            (key > (pageNum - 1) * 25) && (key <= pageNum * 25) &&
            <AccordionItem key={key}>
              <AccordionButton>
                <Box flex={1} textAlign='left'>{article.title}</Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text> {article.body} </Text>
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
        <br />
        {LinkComponent}
      </Container>
    </div>
  )
}

export default ArticlePage
