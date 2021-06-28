import Moment from 'moment'

export function dateFormat(date) {
    return Moment(date).format('DD-MM-YYYY')
}