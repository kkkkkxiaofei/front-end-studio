import {ARTICLE_FETCH}  from '../actions/article'

export default function(state = {}, action) {
    if(action.type === ARTICLE_FETCH) {
        return Object.assign({}, state, JSON.parse(action.data))
    }
    return state
}
