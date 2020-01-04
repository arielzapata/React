import axios from 'axios';

class ArticlesApi {
  static getArticles() {
    return axios.get('api/articles')
    .then(res => {
      const articl = res.data;
      return articl;
    })
      .catch(error => {
        return error;
      });
  }

  static getArticle(id){
    return axios.get(`api/articles/${id}`)
    .then(res => {
      const articl = res.data;
      return articl;
    })
      .catch(error => {
        return error;
      });
  }
}

export default ArticlesApi;

