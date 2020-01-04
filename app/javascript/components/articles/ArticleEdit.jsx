import React, { useState, useEffect } from 'react';
import Form from './Form';
import Axios from 'axios';

function ArticleEdit (props) { 

  const [article, setArticle]= useState ({title: '', content: ''})

  useEffect(() => {
    Axios.get(`api/articles/${props.match.params.id}`)
    .then(res => {
      setArticle (res.data);
    })
    .catch(error => {
      return error;
    });
  },[]);

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios(`api/articles/${props.match.params.id}`, {
      method: 'PATCH',
      data:article
    })
    .then(data => {
      props.history.push(`/articles/${props.match.params.id}`);
    })
    .catch(error => console.log('error', error));
  }

  const handleChange = (event) => {  
    const title = event.target.name == 'title' ?  event.target.value : article.title
    const content = event.target.name == 'content' ?  event.target.value : article.content
    setArticle({title: title, content: content});
  }

  const handleCancel = () => {
    props.history.push(`/articles/${props.match.params.id}`);
  }  
  const articles = {
    title: article.title,
    content: article.content
  };
  const settings = {
    handleSubmit: handleSubmit,
    handleChange: handleChange,
    handleCancel: handleCancel,
    actionLabel: 'Update'
  };
  return (
    <div>
      <h1>Edit {article.title}</h1>
      <Form article={articles} settings={settings} />
    </div>
  );
}

export default ArticleEdit;