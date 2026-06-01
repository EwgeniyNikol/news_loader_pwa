import { API_URL } from './config';

export async function fetchNews() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Network error');
  return await response.json();
}