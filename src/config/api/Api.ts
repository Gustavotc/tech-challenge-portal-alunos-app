import axios from 'axios';

/**
 * 10.0.2.2:3000 é o endereço do emulador do Android
 */
const BASE_URL = 'http://192.168.15.12:3000'; // 'http://10.0.2.2:3000';

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
