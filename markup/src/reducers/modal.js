const initialState = {
    modalIsOpen: false,
    display: '',
    notificationIsOpen: false,
    text: '',
    source: '',
    orderIsOpen: false
}

export default function modal(state = initialState, action) {

    switch (action.type){
        case 'OPEN_MODAL':
            return { ...state, modalIsOpen: action.payload.open, display: action.payload.display,
                title: action.payload.title, source: action.payload.source }

        case 'CLOSE_MODAL':
            return { ...state, modalIsOpen: action.payload }
        case 'OPEN_NOTIFICATION':
            return { ...state, notificationIsOpen: action.payload.open, text: action.payload.text }
        case 'CLOSE_NOTIFICATION':
            return {...state, notificationIsOpen: action.payload}
        case 'OPEN_ORDER':
            return {...state, orderIsOpen: action.payload.open, source: action.payload.source}
        case 'CLOSE_ORDER':
            return {...state, orderIsOpen: action.payload}
    default:
        return state
    }
}