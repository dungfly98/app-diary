
import { constant } from '../config/Constant';
import moment from 'moment';
const formatTime = (value, time) => {
    switch(value) {
        case constant.DAYS: 
            return {
                textUp: moment(time).format('MMM'),
                textCenter: moment(time).format('ddd'),
                textDown: `${moment(time).format('YYYY')}`
            };
        case constant.DATE: 
            return {
                textUp: moment(time).format('ddd'),
                textCenter: moment(time).format('DD'),
                textDown: `${moment(time).format('MMM')}`
            };
        case constant.MOUTH: 
            return {
                textUp: moment(time).format('DD'),
                textCenter: moment(time).format('ddd'),
                textDown: `${moment(time).format('MM')}`
            };
        case constant.YEAR: 
           return {
                textUp: moment(time).format('ddd'),
                textCenter: moment(time).format('DD'),
                textDown: `${moment(time).format('MMM')}/${moment(time).format('YYYY')}`
            };
        default:
            return {
                textUp: moment(time).format('ddd'),
                textCenter: moment(time).format('DD'),
                textDown: `${moment(time).format('MMM')}/${moment(time).format('YYYY')}`
            };
    }
}

export { formatTime }