// signup.js

import config from '../config';

const registerUser = async (userData) => {
  const response = await fetch(`${config.API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  return data;
}

export default registerUser;
