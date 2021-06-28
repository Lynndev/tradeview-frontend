import Layout from '@/components/modules/Layout'
import HeaderSection from '@/components/modules/HeaderSection'
import PostsList from '@/components/posts/PostsList'
import { get } from './api/posts'
import { ChartContextProvider } from '../contexts/ChartModalContext'

export default function Home({ posts }) {

  return (
    <>
      <Layout >
        <ChartContextProvider>
          <HeaderSection />
        </ChartContextProvider>
        <PostsList posts={posts} />
      </Layout>

    </>
  )
}

export async function getServerSideProps() {
  const response = await get();
  const posts = response
  return {
    props: { posts }
  }
}