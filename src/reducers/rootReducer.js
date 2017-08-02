import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import articleReducer from './articleReducer';
export default combineReducers({
    routing,
    article: articleReducer
});
