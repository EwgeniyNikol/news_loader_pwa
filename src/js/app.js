import '../css/style.css';
import { fetchNews } from './api';
import { showLoading, showError, showNews } from './ui';

const content = document.getElementById('content');
const refreshBtn = document.getElementById('refresh-btn');

async function loadNews() {
  showLoading(content);
  
  try {
    const data = await fetchNews();
    showNews(content, data);
  } catch (err) {
    showError(content);
  }
}

refreshBtn.addEventListener('click', loadNews);

loadNews();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}