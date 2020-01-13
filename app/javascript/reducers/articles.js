import {
  ADD_ARTICLE,
  EDIT_ARTICLE,
  INFO_ARTICLE,
  REMOVE_ARTICLE,
  ALL_ARTICLES,
  SET_BUTTON
} from '../constants/actionTypes';

const articlesState = {
  articles: [],
  article: {},
  button: 0,
  all_articles: 20
};

function articlesReducer(state = articlesState, action) {
  switch (action.type){
    
    case ADD_ARTICLE:
    return [
        state,
      {
        id: 'fff',
        title: action.title,
        content: action.content
      }
    ];
    case EDIT_ARTICLE:
      return {

      };
    case INFO_ARTICLE:
      console.log('asdasdasda');
      return {
        ...state,
        article: action.article
      };
    case REMOVE_ARTICLE:
      return {

      };
    case ALL_ARTICLES:
      return {
        ...state,
        articles: action.articles,
        all_articles: action.articles.all_articles
      };      
  }

  if (action.type === SET_BUTTON) {
    console.log(action.type);
    console.log(action.number)
    return {
        // ...state,
        // button: state.button.concat(action.number)
    }
  }

return state;
}
export default articlesReducer;
