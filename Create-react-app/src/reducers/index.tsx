// 用于将所有的reducer进行combine传递给store
import { combineReducers } from 'redux';
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    todos,
    visibilityFilter
})