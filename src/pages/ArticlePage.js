import React from 'react';
import articleContent from './ArticleContent'
import NotFoundPage from './NotFoundPage';
import ReactHtmlParser from 'react-html-parser'; 
const ArticlePage = ({match}) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);
    if (!article) return <NotFoundPage/>

    return (
        <>
        <header>
            <h1>{article.title}</h1>
        </header>
        <br/>
        {article.content.map((paragraph, key) => (         
            <p className="p" key={key}>{ ReactHtmlParser (paragraph)}</p>
        ))}
        <br/>
        <br/>
        </>
)};

export default ArticlePage;