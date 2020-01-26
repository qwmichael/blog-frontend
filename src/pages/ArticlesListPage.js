import React from 'react';
import ArticleContet from './ArticleContent';
import ArticlesList from './ArticlesList'
const ArticlesListPage = () => (

    <>
    <header>
        <h1>Article List</h1>
    </header>
    <br/>
    <ArticlesList articles={ArticleContet}/>
    </>
);

export default ArticlesListPage; 