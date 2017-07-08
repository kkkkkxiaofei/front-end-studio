import {BLOG_FETCH}  from '../actions/blog'

export default function(state = {}, action) {
    if(action.type === BLOG_FETCH) {
        return Object.assign({}, state, action.data)
    }
    return state
}
