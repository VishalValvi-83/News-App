import React from 'react'

function Articles({ i, author, description, url, content, title, urlToImage, publishedAt }) {
    return (

        <div class="card mb-3 col-sm-6 mb-3 mb-sm-0" key={i}>
            <div class="card-body">
                <h3 class="card-title fw-bold">{title}</h3>
                <p class="card-text fw-medium">{description} <a href={url} target="_blank" rel="noopener noreferrer">Read More</a></p>
                <p class="card-text"><small class="text-body-secondary"> Author: {author} |
                    Published At: {publishedAt} </small></p>
            </div>
            <img src={urlToImage} class="card-img-bottom" alt={title} />
        </div>
    )
}

export default Articles