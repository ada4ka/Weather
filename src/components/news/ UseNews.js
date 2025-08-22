import React, { useState, useEffect } from 'react';

function UseNews() {
  const [news, setNews] = useState([]); //массив новостей
  const [isLoading, setIsLoading] = useState(true); //загрузка
  const [error, setError] = useState(null); //ошибка

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=b61357eefc724271afd36dc029696d9e'); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setNews(data.articles);
      } catch (e) {
        setError(e);
        console.error("Ошибка при получении новостей:", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []); // Пустой массив зависимостей означает, что useEffect выполнится только один раз при монтировании компонента

  if (isLoading) {
    return <p>Загрузка новостей...</p>;
  }

  if (error) {
    return <p>Ошибка при загрузке новостей: {error.message}</p>;
  }

  return (
    <ul>
      {news.map((article, index) => (
        <li key={index}>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <h3>{article.title}</h3>
          </a>
          <p>{article.description}</p>
          <img src={article.urlToImage} alt={article.title} style={{ maxWidth: '200px' }} />
        </li>
      ))}
    </ul>
  );
}

export default UseNews;
