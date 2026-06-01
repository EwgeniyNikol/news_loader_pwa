export function showLoading(container) {
  container.innerHTML = '<div class="loading">Загрузка...</div>';
}

export function showError(container) {
  container.innerHTML = `
    <div class="error">
      <h2>Не удалось загрузить данные</h2>
      <p>Проверьте подключение и обновите страницу</p>
    </div>
  `;
}

export function showNews(container, news) {
  if (!news || news.length === 0) {
    container.innerHTML = '<div class="loading">Новостей пока нет</div>';
    return;
  }
  
  container.innerHTML = news.map(item => `
    <div class="news-item">
      <h2>${item.title}</h2>
      <p>${item.text}</p>
    </div>
  `).join('');
}