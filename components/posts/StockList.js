import { Container, ListGroup, ListGroupItem } from 'reactstrap'
import styles from '@/styles/SideContent.module.scss'
import { stockList } from '../../mock-data/stocklList'
const SideContent = () => {
    return (
        <>
            <Container>
                <ListGroup className={styles.stock}>
                    {stockList.map((item) => (
                        <ListGroupItem key={item.name} className={styles.stock_item}>
                            <div>
                                <p>{item.name}</p>
                                <p className={styles.company_desc}>{item.desc}</p>
                            </div>
                            <div>
                                <p>{item.price}</p>
                            </div>
                            <div>
                                <p>+{item.growth}%</p>
                                <p>+{item.drop}</p>
                            </div>
                        </ListGroupItem>
                    ))}

                </ListGroup>
            </Container>
        </>
    )
}

export default SideContent
