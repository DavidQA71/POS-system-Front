import { API_BASE_URL, API_ENDPOINTS } from './api';
import { STORAGE_KEYS } from './storage';

export async function getRoles() {
  try {
    const token = localStorage.getItem(STORAGE_KEYS.TOKEN);

    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.AUTH}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.statusMessage);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    throw error;
  }}