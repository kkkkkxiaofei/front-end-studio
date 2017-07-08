import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import blogReducer from './blogReducer'
export default combineReducers({
    routing,
    blogReducer
})
