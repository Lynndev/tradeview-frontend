import {
    Card, CardImg, CardText, CardBody, CardFooter,
    CardTitle, CardSubtitle,
} from 'reactstrap';
import PropTypes from 'prop-types'
import styles from '@/styles/PostItem.module.scss'
import { HandThumbsUp, ChatLeftText } from 'react-bootstrap-icons'
import { useRouter } from 'next/router'
import { dateFormat } from '@/services/DateFormat'
const PostItem = ({ post }) => {
    const router = useRouter()
    return (
        <>
            <Card onClick={() => router.push(`/posts/${post.slug}`)} className={styles.post_item}>
                <CardBody>
                    <CardTitle tag="h4">{post.title}</CardTitle>
                    <CardSubtitle className="mb-4">
                        <span className={styles.post_item_badge}>{post.category.name}</span>
                    </CardSubtitle>
                    <CardImg height="300" width="100%" src={post.image.formats.thumbnail.url} alt="Card image cap" />
                    <CardText className={styles.post_item_author}>
                        <p className={styles.name}>{post.author.name}</p>
                        <p className={styles.date}>{dateFormat(post.created_at)}</p>
                    </CardText>
                    <CardText >
                        <div className={styles.post_item_content}>
                            <p>
                                {truncate(post.content, 250, '...')}
                            </p>
                        </div>

                    </CardText>
                </CardBody>
                <CardFooter className={styles.post_item_footer}>
                    <div className={styles.noti_btn}>
                        <HandThumbsUp className={styles.icon} /> <span>123</span>
                    </div>
                    <div className={styles.noti_btn}>
                        <ChatLeftText className={styles.icon} /> <span>50</span>
                    </div>
                </CardFooter>

            </Card>
        </>
    )
}

const truncate = (str, max, suffix) => str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;

PostItem.defaultProps = {
    post: PropTypes.object
}

export default PostItem
