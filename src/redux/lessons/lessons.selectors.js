import { createSelector } from 'reselect';

const selectLessons = state => state.lessons;

export const selectAllLessons = createSelector(
    [selectLessons],
    lessons => lessons
);