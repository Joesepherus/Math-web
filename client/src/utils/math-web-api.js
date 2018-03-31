import axios from 'axios';
import { getAccessToken } from './AuthService';

const BASE_URL = 'http://localhost:3001';


export {getExamples};

function getExamples() {
  const url = `${BASE_URL}/api/problem`;
  return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` }}).then(response => response.data);
}
