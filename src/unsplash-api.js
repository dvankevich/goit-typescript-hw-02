import axios from 'axios';

const apiUrl = 'https://api.unsplash.com/search/photos';
const perPage = 15;

// захист так собі, але хоч в репозиторії світитись не буде
// цей ключ видно в request headers
const apiKey = import.meta.env.VITE_API_KEY;
//console.log(apiKey);


 
export async function fetchData(query, page) {
    const headersList = {
    Accept: '*/*',
    'Accept-Version': 'v1',
    Authorization: `Client-ID ${apiKey}`,
    };
    const reqOptions = {
    url: `${apiUrl}?query=${query}&per_page=${perPage}&page=${page}`,
    method: 'GET',
    headers: headersList,
    };
  
  const response = await axios.request(reqOptions);
  return response;
  
}