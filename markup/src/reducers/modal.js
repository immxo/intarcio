const initialState = {
    modalIsOpen: false,
    display: ''
}

export default function modal(state = initialState, action) {

    switch (action.type){
        case 'OPEN_MODAL':
            return { ...state, modalIsOpen: action.payload.open, display: action.payload.display,
                title: action.payload.title }

        case 'CLOSE_MODAL':
            return { ...state, modalIsOpen: action.payload }

        case  'SEND_MODAL_POST':
            return { ...state }

    default:
        return state
    }
}