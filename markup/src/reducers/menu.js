const initialState = {
    toggle: false,
}

export default function menu(state = initialState, action) {

    switch (action.type){
        case 'TOGGLE_MENU':
            return { ...state, toggle: action.payload }
        default:
            return state
    }
}