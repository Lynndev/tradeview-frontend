import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link'
import PostItem from './PostItem'
import StockList from './StockList'
import { ArrowRightShort } from 'react-bootstrap-icons'
import styles from '@/styles/PostList.module.scss'

const PostsList = ({ posts }) => {

    const categories = {
        crypto: 3,
        forex: 4,
        index: 1,
    }

    const cryptoPosts = posts.filter(item => item.category.id == categories.crypto).slice(0, 2)
    const forexPosts = posts.filter(item => item.category.id == categories.forex).slice(0, 2)
    const indexPosts = posts.filter(item => item.category.id == categories.index).slice(0, 2)

    return (
        <>
            <Container className={styles.post_list} fluid={true}>
                <Row >
                    <Col md="8">
                        <Row >
                            <Link passHref href={{ pathname: '/posts', query: { keyword: categories.crypto } }}>
                                <h3 className="ms-3 mt-2 ">Crypto Ideas <ArrowRightShort /></h3>
                            </Link>

                            {cryptoPosts.map((post) => (
                                <Col key={post.id} md="6">
                                    <PostItem post={post} />
                                </Col>))}

                        </Row>
                        <Row >
                            <Link passHref href={{ pathname: '/posts', query: { keyword: categories.forex } }}>
                                <h3 className="ms-3 mt-2 ">Forex Ideas  <ArrowRightShort /></h3>
                            </Link>

                            {forexPosts.map((post) => (
                                <Col key={post.id} md="6">
                                    <PostItem post={post} />
                                </Col>))}

                        </Row>
                        <Row >
                            <Link passHref href={{ pathname: '/posts', query: { keyword: categories.index } }}>
                                <h3 className="ms-3 mt-2 ">Index Ideas  <ArrowRightShort /></h3>
                            </Link>
                            {indexPosts.map((post) => (
                                <Col key={post.id} md="6">
                                    <PostItem post={post} />
                                </Col>))}

                        </Row>
                    </Col>

                    <Col md="4">
                        <h3 className="ms-4 mt-2 ">Stocks</h3>
                        <StockList />
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default PostsList
