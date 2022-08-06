import axios from 'axios';
import { API_BASE_URL } from './app.config';
/**
 * HTTP 客户端
 */
export const apiHttpClient = axios.create({
  baseURL: API_BASE_URL,
});

// import axios from 'axios';
// import { API_BASE_URL } from './app.config';

// export const apiHttpClient = axios.create({
//   baseURL: 'http://localhost:3000',
// });
