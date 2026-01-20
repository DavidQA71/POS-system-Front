import { API_BASE_URL, API_ENDPOINTS } from './api';

interface IUserVerify {
  email: string;
  password: string;
}


export async function getValidUser(loginData: IUserVerify) {
  try {
    const options =  {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(loginData)
    };
    let response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.LOGIN}`, options);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}