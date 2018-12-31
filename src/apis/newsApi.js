import { keys } from '../utils/config';

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(`${keys[1].newsApiKey}`);

// let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${keys[1].newsApiKey}`;
// let req = new Request(url);

export const getNews = () => 
    newsapi.v2.topHeadlines({
        language: 'en',
        country: 'us'
    }).then(response => response.articles);