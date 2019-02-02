const configTextNotification = (time) => {
    switch(time.toString()) {
        case '0': 
        return('Không có lời nhắc nào(đã tắt)')
        break;
        case '1': 
        return('Hằng ngày')
        break;
        default: return(`${time} ngày`)
    }
}
export default configTextNotification;