import 'isomorphic-fetch';

export const ARTICLE_FETCH = 'ARTICLE';

export const fetchArticle = () => {
    return dispatch => {
        return fetch('/md.json', {method: 'GET'})
            .then((response) => {
                return response.text();
            })
            .then(article => {
                dispatch({
                    type: ARTICLE_FETCH,
                    data: article
                });
            });
    };
};