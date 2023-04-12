import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import Article, { ArticleInterface } from '../Article/Article';
import './Articles.sass';

interface ArticlesProps {}

const Articles: FC<ArticlesProps> = () => {
  let [totalCount, setTotalCount] = useState(0)
  let [articles, setArticles] = useState<ArticleInterface[]>([])
  let [categories, setCategories] = useState([])
  let [activeCategories, setActiveCategories] = useState<string[]>([])
  let [loading, setLoading] = useState(false)

  let fetchData = async (skip: number = 0) => {
    setLoading(true)
    let res = await axios.post(`${process.env.REACT_APP_API_URL}/data`, {skip}, {headers: {'Access-Control-Allow-Origin': '*'}})
    if (res.data && res.data.success && res.data.data && res.data.data.length >= 1) setArticles([...articles, ...res.data.data])
    if (res.data && res.data.success && res.data.totalCount) setTotalCount(res.data.totalCount)
    setLoading(false)
  }

  // let fetchCategories = async () => {
  //   let res = await axios.get(`${process.env.REACT_APP_API_URL}/categories`, {headers: {'Access-Control-Allow-Origin': '*'}})
  //   if (res.data && res.data.success && res.data.data && res.data.data.length >= 1) setCategories(res.data.data.map((cat: string) => cat.replace('sta_', '')).sort((a:string,b:string) => a.toLowerCase().localeCompare(b.toLowerCase())))
  // }

  useEffect(() => {
    fetchData()
    // fetchCategories()
  }, [])

  let updateFilters = (c: string) => {
    let arr = [...activeCategories] || []
    let index = arr.indexOf(c)

    if (index > -1) arr.splice(index, 1)
    else arr.push(c)

    setActiveCategories(arr)
  }

  return (
    <div className="Articles">
      {/* <div className="filters">
        {categories.map(cat => (
          <div key={cat} onClick={() => updateFilters(cat)} className={`filter ${activeCategories.includes(cat) ? 'active' : ''}`}>{cat}</div>
        ))}
      </div> */}
      {articles.map((a, i) => <Article key={`article-${i}`} data={a} />)}
      {totalCount > articles.length && (
        <div>
          <span className="load-more" onClick={() => fetchData(articles.length)}>Weitere Artikel laden</span>
        </div>
      )}
      {loading && (
        <div className="loader">Daten werden geladen...</div>
      )}
    </div>
  )
}

export default Articles;
