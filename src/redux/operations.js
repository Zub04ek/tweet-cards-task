import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const limit = 3;

axios.defaults.baseURL = 'https://63d513e420b08498cbc74eb4.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (page = 1, thunkAPI) => {
    try {
      const response = await axios.get(`/users?limit=${limit}&page=${page}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editUser = createAsyncThunk(
  'users/editUser',
  async (tweetUser, thunkAPI) => {
    const { id } = tweetUser;
    try {
      const response = await axios.put(`/users/${id}`, tweetUser);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
