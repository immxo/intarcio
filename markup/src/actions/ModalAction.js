export function openModal(type) {
    if(type === 'back'){
        return {
            type: 'OPEN_MODAL',
            payload: {open:true, display: 'none', title: 'Обратный звонок', source: 'Обратный звонок'}
        }
    }
    else{
        return {
            type: 'OPEN_MODAL',
            payload: {open:true, display: '', title: 'Вызов замерщика', source: 'Вызов замерщика'}
        }
    }
}

export function closeModal() {
    return {
        type: 'CLOSE_MODAL',
        payload: false
    }
}

export function openNotification(bool) {
    if(bool === true){
        return{
            type: 'OPEN_NOTIFICATION',
            payload: {open: true, text: 'Спасибо за оставленную заявку. В ближайшие время с вами свяжется наш консультант.'}
        }
    }
    else{
        return{
            type: 'OPEN_NOTIFICATION',
            payload: {open: true, text: 'Произошла ошибка. Пожалуйста попробуйте снова.'}
        }
    }
}

export function closeNotification() {
    return{
        type: 'CLOSE_NOTIFICATION',
        payload: false
    }
}

export function openOrder(type) {
    return{
        type: 'OPEN_ORDER',
        payload: {open:true, source: type}
    }
}

export function closeOrder() {
    return{
        type: 'CLOSE_ORDER',
        payload: false
    }
}