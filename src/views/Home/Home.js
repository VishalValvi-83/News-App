import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import Articles from '../../components/Articles/Articles'
function Home() {
    const [news, setNews] = useState([])

    const loadNews = async () => {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6e2a48d5e4be43548704866feaf1116f")

        setNews(response.data.articles)

    }
    useEffect(() => {
        loadNews()
    }, [])



    return (
        <div className='container'>
            <div className='row justify-content-center'>
                {news.map((newsArticles, i) => {
                    const { author, description, url, content, title, urlToImage, publishedAt } = newsArticles
                    return (
                        <>
                        <div className='col-xl-8 col-lg-6 col-sm-12'>
                            <Articles key={i} author={author}
                                description={description} url={url} content={content} title={title} urlToImage={urlToImage} publishedAt={publishedAt}
                            />
                        </div>
                        <hr/>
                        </>
                    )
                })}
            </div>
        </div>

    )
}

export default Home