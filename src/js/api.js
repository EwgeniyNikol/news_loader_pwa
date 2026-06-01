export async function fetchNews() {
  const response = await fetch('/api/news');
  if (!response.ok) throw new Error('Network error');
  return await response.json();
}