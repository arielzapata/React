import React, { component, useState } from 'react';
import Form from './Form';
import Axios from 'axios';

function ArticleAdd (props){

  const [Article, setArticle]= useState ({title: '', content: ''})

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios('api/articles', {
      method: 'POST',
      data:Article
    })     
    .then(response => {
      props.history.push(`/articles/${response.data.id}`);
    })
    .catch(error => console.log('error', error));
  }

  const handleChange = (event) => { 
    const title = event.target.name == 'title' ?  event.target.value : Article.title
    const content = event.target.name == 'content' ?  event.target.value : Article.content    
    setArticle({title: title, content: content});
  }

  const handleCancel = () => {
    props.history.push("/articles");
  }

  const article = {
    title: Article.title,
    content: Article.content
  };
  const settings = {
    handleSubmit: handleSubmit,
    handleChange: handleChange,
    handleCancel: handleCancel,
    actionLabel: 'Create'
  };

  return (
    <div>
      <h1>{Article.title}</h1>
      <Form article={article} settings={settings}/>
    </div>
  );
}

export default ArticleAdd;