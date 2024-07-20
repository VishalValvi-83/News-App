import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import Articles from '../../components/Articles/Articles'
import toast from 'react-hot-toast'
function Home() {
    const [searchQuery, setSearchQuery] = useState("india")
    const [news, setNews] = useState([])

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

    useEffect(() => {
        setTimeout(() => {
            loadNews()
        }, 1000)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            loadNews()
        }, 1000)
    }, [searchQuery])


    return (
        <>
            <div className='container mt-5'>
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
                                <hr />
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Home