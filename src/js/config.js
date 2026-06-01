const isLocal = window.location.hostname === 'localhost';
export const API_URL = isLocal ? '/api/news' : 'https://news-loader-pwa.onrender.com/api/news';