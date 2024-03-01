import React, { useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard'
import newsData from '../data/articles.json'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function News() {
  const newsArticles = newsData.map(news => {
    return <NewsCard title={news.title} description={news.description} content={news.content} date={news.publishedAt} link={news.link} />
  })

  return (
    <div className='mr-0'>
      {/* <Navbar /> */}
      <div className='p-8 grid grid-cols-3 max-sm:grid-cols-1 max-sm:mx-auto max-md:grid-cols-2 max-md:ml-3'>
        {newsArticles}
      </div>
    </div>
  )
}