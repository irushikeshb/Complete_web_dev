import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
export default function BusinessNews() {
  const data = useSelector((state) => state.news.business_News)
  console.log(data)
  return (
    <React.Fragment>
      <section class="news-section container">
        {data!= null && data.length ? (
          data.map((item,index) => (
            <div key={index}>
              <h1> {item.title} </h1>
              <img alt="" src={item.urlToImage} width="250" height="250" />
              <p>{item.description} </p>
            </div>
          ))
        ) : (
          <span> Loading... </span>
        )}
      </section>
    </React.Fragment>
  );
}
