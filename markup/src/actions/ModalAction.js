export function openModal(type) {
    if(type === 'back'){
        return {
            type: 'OPEN_MODAL',
            payload: {open:true, display: 'none', title: 'Обратный звонок'}
        }
    }
    else{
        return {
            type: 'OPEN_MODAL',
            payload: {open:true, display: '', title: 'Вызов замерщика'}
        }
    }

}

export function closeModal() {

    return {
        type: 'CLOSE_MODAL',
        payload: false
    }
}