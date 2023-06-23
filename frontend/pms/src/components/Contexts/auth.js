
import { toast } from "react-hot-toast"

export default async function login(e) {
  console.log( {'email': e.target.username.value,
  'password': e.target.password.value})
  try {
    const response = await fetch('http://127.0.0.1:8000/account/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'email': e.target.username.value,
        'password': e.target.password.value
      })
    });
    console.log(response)

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('authToken', JSON.stringify(data));
      toast.success('Login success');
      return data;
    } else {
      toast.error('Invalid user credentials');
    }
  } catch (error) {
    toast.error('Login failed');
    console.error('Login failed:', error);
  }
}

export function getLocal() {
  const response = localStorage.getItem('authToken');
  return response;
}
