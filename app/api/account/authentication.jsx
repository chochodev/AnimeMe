import axios from 'axios';
import { BASE_URL } from '../config';


export const handleSignUp = async (formData, csrfToken) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/signup/`, formData, {
      headers: {
        'X-CSRFToken': csrfToken,
      }
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export const handleSignIn = async (formData, csrfToken) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/signin/`, formData, {
      headers: {
        'X-CSRFToken': csrfToken,
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export const handleSignOut = async (csrfToken) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/signout/`, 
    {
      signout: 'signout',
    }, {
      headers: {
        'X-CSRFToken': csrfToken,
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}