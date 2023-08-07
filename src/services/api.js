import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

// const api = axios.create({
//   baseURL: 'https://sua-api.com/', // Substitua pela URL da sua API
//   headers: {
//     common: {
//       Authorization: `Bearer ${localStorage.getItem('seu_token')}`,
//     },
//   },
//   withCredentials: true,
// })
