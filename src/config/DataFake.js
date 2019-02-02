const date = new Date();
import { constant } from '../config/Constant';

const arrayHome = [
    { 
        id: 1,
        action: constant.SEE,
        name: "Xem ghi chép" 
    }, 
    { 
        id: 12,
        action: constant.SHARE,
        name: "Chia sẻ ghi chép"
    }, 
    { 
        id: 13,
        action: constant.DELETE,
        name: "Xóa ghi chép"
    }
]

const arrayTime = [ 
    {
        id: 0,
        name: constant.DAYS,
        selected: true,
    
    },
    {
        id: 1,
        name: constant.DATE,
        selected: false,
    
    },
    {
        id: 2,
        name: constant.MOUTH,
        selected: false,
    
    },
    {
        id: 3,
        name: constant.YEAR,
        selected: false,
    
    }  
]

export { arrayHome, arrayTime }