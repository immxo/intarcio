import { combineReducers } from 'redux'
import modal from './modal'
import menu from './menu'

const reducer = combineReducers({
    modal,
    menu
})

export default reducer