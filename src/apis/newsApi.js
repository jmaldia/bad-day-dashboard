import { keys } from '../utils/config';

let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${keys[1].newsApiKey}`;
let req = new Request(url);

// export const newsApi = () => {
//     let news = fetch(req)
//         .then(function(response) {
//             return response.json();
//         });

//         console.log(news)
//     return news;
// }

export const getNews = () => fetch(req)
        .then(function(response) {
            return response;
        });