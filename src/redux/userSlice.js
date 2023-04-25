import { createSlice } from '@reduxjs/toolkit';
import { editUser, fetchUsers } from './operations';
// import { editUser, fetchUsers } from 'helpers/api';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  tweetUsers: [
    // {
    //   user: null,
    //   status: null,
    // },
  ],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    changingFollowers(state, action) {
      // const { id, status } = action.payload;
      // const index = state.tweetUsers.findIndex(user => user.id === id);
      // console.log('action.payload', action.payload);
      // const currentUser = state.tweetUsers[index];
      // console.log('currentUser', currentUser);
      // if (status === 'follow') {
      //   state.tweetUsers[index].followers += 1;
      //   state.tweetUsers[index].status = 'following';
      // } else {
      //   state.tweetUsers[index].followers -= 1;
      //   state.tweetUsers[index].status = 'follow';
      // }
      // state.tweetUsers.splice(index, 1, {
      //   ...action.payload,
      //   followers: state.tweetUsers[index].followers,
      //   status: state.tweetUsers[index].status,
      // });
    },
  },
  extraReducers: {
    [fetchUsers.pending]: handlePending,
    [editUser.pending]: handlePending,
    [fetchUsers.rejected]: handleRejected,
    [editUser.rejected]: handleRejected,
    [fetchUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      // state.tweetUsers.map(tweetUser =>
      //   action.payload.map(user => (tweetUser.user = user))
      // );

      // action.payload.map(user =>
      //   state.tweetUsers.map(tweetUser => (tweetUser.user = user))
      // );

      // action.payload.map(user =>
      //   state.tweetUsers.push({ user: user, status: 'follow' })
      // );

      action.payload.map(user =>
        state.tweetUsers.push({ ...user, status: user.status || 'follow' })
      );

      // state.tweetUsers = [...state.tweetUsers, ...action.payload];
    },
    [editUser.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      // if (!action.payload?.id) {
      //   console.log('Update could not complete');
      //   console.log(action.payload);
      //   return;
      // }
      const { id, followers, status } = action.payload;
      const index = state.tweetUsers.findIndex(user => user.id === id);
      console.log('action.payload', action.payload);

      // if (status === 'follow') {
      //   state.tweetUsers[index].followers += 1;
      //   state.tweetUsers[index].status = 'following';
      // } else {
      //   state.tweetUsers[index].followers -= 1;
      //   state.tweetUsers[index].status = 'follow';
      // }

      state.tweetUsers.splice(index, 1, {
        ...action.payload,
        followers,
        status,
      });
      // const users = state.tweetUsers.filter(user => user.id !== id);
      // state.tweetUsers = [...users, action.payload];

      // const index = state.tweetUsers.findIndex(user => user.id === id);

      // state.tweetUsers.splice(index, 1, {
      //   ...action.payload,
      //   followers: state.tweetUsers[index].followers,
      //   status: state.tweetUsers[index].status,
      // });
    },
  },
});

// export const { changingFollowers } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
