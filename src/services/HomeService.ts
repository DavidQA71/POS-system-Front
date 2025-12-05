
export async function getRoles() {
  try {
    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:4000/users/auth', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    throw error;
  }}