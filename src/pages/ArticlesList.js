import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const ArticlesList = ({articles}) => (
    <>
    <section>
    {articles.reverse().map((article, key) => (
        <>
        <Card className="Card">
            <Card.Body>
            <h6>{article.date}</h6>
            <Link className="article-list-item" key={key} to={`article/${article.name}`}>
                <h4>{article.title}</h4>
            </Link>
            </Card.Body>
        </Card>
        
        <br/>
        </>
    ))}
    </section>
    </>
)

export default ArticlesList;
   
