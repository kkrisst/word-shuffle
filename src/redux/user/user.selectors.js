import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => {
    return user.currentUser;
  }
);

export const selectUserLicence = createSelector(
  [selectUser],
  (user) => {
    return user.currentUser.licence
  }
);