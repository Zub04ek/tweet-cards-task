import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { editUser, fetchUsers } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  tweetUsers: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        action.payload.map(user =>
          state.tweetUsers.push({ ...user, status: user.status || 'follow' })
        );
      })
      .addCase(editUser.fulfilled, (state, action) => {
        const { id, followers, status } = action.payload;
        const index = state.tweetUsers.findIndex(user => user.id === id);
        console.log('action.payload', action.payload);

        state.tweetUsers.splice(index, 1, {
          ...action.payload,
          followers,
          status,
        });
      })
      .addMatcher(isAnyOf(fetchUsers.pending, editUser.pending), handlePending)
      .addMatcher(
        isAnyOf(fetchUsers.rejected, editUser.rejected),
        handleRejected
      )
      .addMatcher(isAnyOf(fetchUsers.fulfilled, editUser.fulfilled), state => {
        state.isLoading = false;
        state.error = null;
      }),
});

export const usersReducer = usersSlice.reducer;
