import React from "react";
import { Link} from "react-router-dom";
import articleContent from './ArticleContent'

const ArticlesList = () => (
    <React.Fragment>
        <h1>Articles!</h1>
        {articleContent.map((article, key) => (
            <Link className="article-list-item" to={`/article/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0, 80)}...</p>
            </Link>
            ))}
    </React.Fragment>
);

export default ArticlesList;
