import axios from 'axios';

export const limit = 3;

const BASE_URL = new URL('https://63d513e420b08498cbc74eb4.mockapi.io/users');

export const fetchUsers = async (page = 1) => {
  const resp = await axios.get(`${BASE_URL}?limit=${limit}&page=${page}`);
  return resp.data;
};

export const editUser = async (id, newFollowers) => {
  const resp = await axios.put(
    `${BASE_URL}/${id}`,
    {
      followers: newFollowers,
    },
    {
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }
  );
  console.log('resp', resp.data);
  return resp.data;
};
