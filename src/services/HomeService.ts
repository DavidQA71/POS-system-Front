import { API_BASE_URL, API_ENDPOINTS } from './api.config';

export async function getRoles() {
  try {
    const token = localStorage.getItem('token');

    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.AUTH}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    });
    if (!response.ok) {
      const errorText = await response.text();

      if (response.status === 401 || response.status === 403) {
        throw new Error("Sesión expirada");
      }

      throw new Error(errorText);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    throw error;
  }}