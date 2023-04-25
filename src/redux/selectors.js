import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

export const selectTweetUsers = state => state.users.tweetUsers;
export const selectIsLoading = state => state.users.isLoading;
export const selectError = state => state.users.error;
export const selectStatusFilter = state => state.filters.status;

export const selectVisibleTweets = createSelector(
  [selectTweetUsers, selectStatusFilter],
  (users, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.all:
        return users;
      case statusFilters.follow:
        return users.filter(user => user.status === 'follow');
      case statusFilters.following:
        return users.filter(user => user.status === 'following');
      default:
        return users;
    }
  }
);
