import React, { FC } from 'react';
import './Article.sass';

export interface ArticleInterface {
  source: string,
  title: string,
  text: string,
  link: string,
  publishedAt: number,
  categories: string[],
}

interface ArticleProps {
  data: ArticleInterface
}

const Article: FC<ArticleProps> = (props) => {
  let {data} = props

  return (
    <div className="Article">
      <div className="article-header">
        Der Standard - {new Date(data.publishedAt * 1000).toLocaleDateString('de-AT')} um {new Date(data.publishedAt * 1000).toLocaleTimeString('de-AT', {hour: '2-digit', minute:'2-digit'})}
      </div>
      <div className="article-content">
        <h2>{data.title}</h2>
        <p>{data.text}</p>
      </div>
      <div className="article-footer">
        <a href={data.link} target="_blank" rel="noopener noreferrer">Vollständiger Artikel auf derstandard.at</a>
      </div>
    </div>
  )
}

export default Article;
