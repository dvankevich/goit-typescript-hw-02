import axios from 'axios';

const apiUrl = 'https://api.unsplash.com/search/photos';
const perPage = 15;

const apiKey = import.meta.env.VITE_API_KEY;
console.log(apiKey);


 
export async function fetchData(query, page) {
    const headersList = {
    Accept: '*/*',
    'Accept-Version': 'v1',
    Authorization: 'Client-ID o4C13rGbT_u5Vq3h83n03CpOGqwS0N_oj1Gd8F1ik0g',
    };
    const reqOptions = {
    url: `${apiUrl}?query=${query}&per_page=${perPage}&page=${page}`,
    method: 'GET',
    headers: headersList,
    };
  
  const response = await axios.request(reqOptions);
  return response;
  
}