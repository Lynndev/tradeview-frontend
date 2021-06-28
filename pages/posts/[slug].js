import Layout from '@/components/modules/Layout'
import { get, getEach } from '../api/posts'
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import Image from 'next/image'
import styles from '@/styles/PostDetail.module.scss'
import { HandThumbsUp, ChatLeftText } from 'react-bootstrap-icons'
import { dateFormat } from '@/services/DateFormat'

export default function PostDetail({ post }) {
    return (
        <>
            <Layout title='TradeView Post'>
                <Jumbotron fluid >
                    <Container className={`${styles.post_detail} py-4 px-3`}>
                        <Row >
                            <Col className="offset-md-2" md="8">
                                <h2 >{post[0].title} Ideas</h2>
                                <div >
                                    <p>{post[0].description}<span className={`ms-2 ${styles.post_detail_badge}`}>{post[0].category.name}</span></p>
                                </div>
                                <div>
                                    <Image className={styles.post_detail_image} src={post[0].image.formats.thumbnail.url} alt='Not found' width={900} height={600} />
                                </div>
                                <div className="d-flex justify-content-between my-3">
                                    <div className="d-flex">
                                        <div className={styles.post_detail_noti_btn}>
                                            <HandThumbsUp className={styles.icon} /> <span>123</span>
                                        </div>
                                        <div className={styles.post_detail_noti_btn}>
                                            <ChatLeftText className={styles.icon} /> <span>50</span>
                                        </div>
                                    </div>
                                    <p>{dateFormat(post[0].created_at)}</p>
                                </div>
                                <div>
                                    <p dangerouslySetInnerHTML={{ __html: post[0].content }} >

                                    </p>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </Jumbotron>

            </Layout>

        </>
    )
}

export async function getStaticPaths() {
    const posts = await get();
    const paths = posts.map((item) => ({ params: { slug: item.slug } }))
    return {
        paths, fallback: false
    }
}

export async function getStaticProps({ params }) {
    const post = await getEach(params.slug)
    return { props: { post } }
}