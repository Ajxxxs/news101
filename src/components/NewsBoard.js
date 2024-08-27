import { useState, useEffect} from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {
  const [articles, setarticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.articles) {
        setarticles(data.articles);
      }
    };
    fetchNews();
  }, [category]);

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news,index)=>{
        return <NewsItem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      })}
    </div>
  )
}
export default NewsBoard;