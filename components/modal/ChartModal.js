import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useContext } from 'react'
import ChartModalContext from '../../contexts/ChartModalContext'
import styles from '@/styles/Chart.module.scss'
import { chartData } from '../../mock-data/chart'
import { Bar } from 'react-chartjs-2'

const ChartModal = () => {
    const chartContext = useContext(ChartModalContext)

    const toggle = () => chartContext.setStatus(!chartContext.status);

    return (
        <div>
            <Modal isOpen={chartContext.status} toggle={toggle} className={styles.chart}>
                <ModalHeader toggle={toggle}>Chart List</ModalHeader>
                <ModalBody>
                    <Bar
                        data={chartData}
                        width={600}
                        height={600}
                        options={{
                            maintainAspectRatio: false
                        }}
                    />
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ChartModal;