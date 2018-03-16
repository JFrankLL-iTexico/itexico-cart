import axios from 'axios';

const URL = 'http://localhost:3000';

export const createUser = body => {
  const url = `${URL}/api/client`;

  return new Promise((resolve, reject) => {
    axios.post(url, body)
      .then(response => resolve(response.data))
      .catch(err => reject(err));
  });
};

export const fetchAllUsers = () => {
  const url = `${URL}/api/client`;

  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => resolve(response.data))
      .catch(err => reject(err));
  });
};
