import styles from '@/styles/HeaderSection.module.scss'
import { Jumbotron, Container, Button } from 'reactstrap'
import { useContext } from 'react'
import ChartModalContext from '../../contexts/ChartModalContext'
import ChartModal from '../modal/ChartModal'
const HeaderSection = () => {
    const chartContext = useContext(ChartModalContext)
    const toggle = () => chartContext.setStatus(!chartContext.status);
    return (
        <>
            <Jumbotron fluid>
                <Container className={styles.header_section} fluid>
                    <h2>The fastest way to follow markets</h2>
                    <Button onClick={toggle} className={styles.lanuch_btn} size="lg">Launch Chart</Button>
                </Container>
            </Jumbotron>
            {chartContext.status ? <ChartModal /> : null}
        </>
    )
}

export default HeaderSection
