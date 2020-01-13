import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { addArticle, setButton, articlesPaginate } from '../../actions/articles';

function ArticleList(props) {

  const [articles, setArticle] = useState([])   //Cambiar postArticle
  const [totalArticles, setTotalArticles] = useState(0) //Cambiar allArticle

  let page = 1;
  const PerPage = 3; 

  useEffect(() => {
    props.articlePages(page, PerPage)
    setTotalArticles(props.total_Articles)
    setArticle(props.articles)
  },[]);

  const setPage = (number) => {
    props.articlePages(number, PerPage)
    setTotalArticles(props.total_Articles)
    setArticle(props.articles.articles)
  }
    const pageNumbers = [];

    for (let numberPage = 1; numberPage <= Math.ceil(totalArticles / PerPage); numberPage ++) { //cambiar button por number
      pageNumbers.push(numberPage);
    }

  return (
    <div>
      {
        articles.map((article) => {
          return(
            <div key={article.id}>
              <h2><Link to={`/articles/${article.id}`}>{article.title}</Link></h2>
              {article.content}
              <hr/>
            </div>
          );
        })        
      }
      <Link to="/articles/new" className="btn btn-outline-primary">Create Article</Link>  
      <nav>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <button onClick={() => setPage(number)} className='page-link'>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>  
  );
}
function mapStateToProps(state) {
  return {
    articles: state.articlesReducer.articles,
    total_Articles: state.articlesReducer.all_articles
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addArticle: (title, content) => dispatch(addArticle(title, content)),
    listArticles: () => dispatch(allArticles()),
    setNumber: (number) => dispatch(setButton(number)),
    articlePages: (idPage, perPage) => dispatch(articlesPaginate(idPage, perPage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);