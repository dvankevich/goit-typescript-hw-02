import axios from 'axios';

// export const fetchArticlesWithTopic = async topic => {
//   const response = await axios.get(`/search?query=${topic}`);
//   return response.data.hits;
// };

export async function fetchResponse(url) {
  const headersList = {
    Accept: '*/*',
    'Accept-Version': 'v1',
    Authorization: 'Client-ID o4C13rGbT_u5Vq3h83n03CpOGqwS0N_oj1Gd8F1ik0g',
  };
  const reqOptions = {
    url: url,
    method: 'GET',
    headers: headersList,
  };

  const response = await axios.request(reqOptions);
  return response;
}
