import Layout from '@/components/modules/Layout'
import PostItem from '@/components/posts/PostItem'
import { get } from '../api/posts'
import { Container, Row, Col, Jumbotron } from 'reactstrap';

export default function AllPosts({ posts }) {

    return (
        <>
            <Layout title='TradeView Posts'>
                <Jumbotron fluid className="py-4 px-3">
                    <Container fluid>
                        <h2 >{posts[0].category.name} Ideas</h2>
                    </Container>
                </Jumbotron>
                <hr></hr>
                <Container fluid={true}>
                    <h3 className="fs-4 my-2 mx-3">Featured Ideas</h3>
                    <Row>
                        {posts.map((post) => (
                            <Col key={post.id} md="4">
                                <PostItem post={post} />
                            </Col>))}
                    </Row>
                </Container>

            </Layout>

        </>
    )
}

export async function getServerSideProps(context) {
    const { keyword } = context.query
    const response = await get({ category: keyword });
    const posts = response
    return {
        props: { posts, keyword }
    }
}