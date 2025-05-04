import React, { useEffect, useState } from "react";
import axios from "axios";
import Facilities from "../components/Facilities";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines", 
          {
            params: {
              category: "health",
              country: "us", 
              apiKey: "51a553283e084b2ab0fa2db1a5b25f44",
            },
          }
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Loading news...</div>;
  }

  return (
    <>
    <Facilities/>
    <div className="bg-gray-100 min-h-screen p-5">
      <h1 className="text-2xl font-bold text-center mb-5">Health and Medical News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition"
          >
            <img
              src={article.urlToImage || "https://via.placeholder.com/150"}
              alt={article.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="text-lg font-semibold mt-3">{article.title}</h2>
            <p className="text-sm text-gray-600 mt-2 line-clamp-3">
              {article.description || "No description available."}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-sm mt-3 block hover:underline"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Blog;
