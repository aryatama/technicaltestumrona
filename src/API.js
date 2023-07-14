import axios from 'axios';

const URL_API = 'https://jsonplaceholder.typicode.com';

export const getData = async (page, limit) => {
  try {
    const res = await axios.get(
      `${URL_API}/posts?_page=${page}&_limit=${limit}`,
    );
    if (res.data) {
      console.log('data', page, res.data);
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};
