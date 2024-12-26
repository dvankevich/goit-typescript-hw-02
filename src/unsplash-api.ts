import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';
import { AxiosResponse } from 'axios';
import { ResultsImg } from './components/types';

interface ApiResponse {
  results: ResultsImg[];
  total_pages: number;
}

const apiUrl: string = 'https://api.unsplash.com/search/photos';
const perPage: number = 15;

// захист так собі, але хоч в репозиторії світитись не буде
// цей ключ видно в request headers
const apiKey: string = import.meta.env.VITE_API_KEY;
//console.log(apiKey);

export async function fetchData(
  query: string,
  page: number
): Promise<AxiosResponse<ApiResponse>> {
  const headersList = {
    Accept: '*/*',
    'Accept-Version': 'v1',
    Authorization: `Client-ID ${apiKey}`,
  };
  const reqOptions: AxiosRequestConfig = {
    url: `${apiUrl}?query=${query}&per_page=${perPage}&page=${page}`,
    method: 'GET',
    headers: headersList as RawAxiosRequestHeaders,
  };

  const response = await axios.request<ApiResponse>(reqOptions);

  return response;
}
