
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
    let response = await fetch('http://localhost:4000/users/login', options);
    
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