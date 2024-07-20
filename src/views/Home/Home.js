import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import Articles from '../../components/Articles/Articles'
import toast from 'react-hot-toast'
import Navbar from '../../components/navbar/Navbar'
import News from './news.png'
function Home() {
    const [searchQuery, setSearchQuery] = useState("india")
    const [news, setNews] = useState([])


    useEffect(() => {
        const loadNews = async () => {
            toast.loading("Loading Latest News")
            toast.dismiss()
            try {
                const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2024-06-20&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`)
                setNews(response.data.articles)
                setTimeout(() => {
                    toast.success("News Loaded Successfully")
                }, 1000)
            }
            catch (error) {
                toast.error("Failed to Load News. Please Try Again")
            }
        }

        setTimeout(() => {
            loadNews()
        }, 1000)
    }, [searchQuery])

    return (
        <>
            <Navbar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
            <div className='container'>
                <div className='news-header border-dark border-bottom d-flex justify-content-between'>
                    <span className='name'>NEWS 24/7</span>
                    <img src={News} alt='' />
                    <span > <span className='me-1'>Date : </span>
                        {new Date().toLocaleDateString()}
                    </span>
                </div>
                <div className='row justify-content-center'>
                    {news.map((newsArticles, i) => {
                        const { author, description, url, content, title, urlToImage, publishedAt } = newsArticles
                        return (
                            <>
                                <div className='news-feeds col-xl-6 col-lg-6 col-sm-12'>

                                    <Articles key={i} author={author}
                                        description={description} url={url} content={content} title={title} urlToImage={urlToImage} publishedAt={publishedAt}
                                    />
                                    <hr className='mt-3' />
                                </div>

                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Home