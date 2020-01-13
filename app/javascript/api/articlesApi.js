import axios from 'axios';

class ArticlesApi {
  static getArticles(page, perPage) {
    return axios.get(`api/articles?page=${page}&per_page=${perPage}`)
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