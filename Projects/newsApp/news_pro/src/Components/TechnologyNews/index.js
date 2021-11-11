import React from 'react'
import { useSelector } from 'react-redux'
import './index.css'
export default function TechnologyNews() {
    const data = useSelector((state) => state.news.technology_news)
    console.log(data);
    return (
        <React.Fragment>
            <section className="news-section container">
                {data != null && data.length ?
                    data.map((item,index)=>(
                      <div key={index}>
                        <h1>{item.title}</h1>
                        <img 
                            alt=''
                            src={item.urlToImage}
                            width='250'
                            height='250'
                        />
                        <p>{item.description}</p>
                      </div>  
                    )) : <span> Loading... </span>
                } 
            </section>
        </React.Fragment>
    )
}
