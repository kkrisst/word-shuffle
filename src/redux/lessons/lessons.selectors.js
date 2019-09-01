import { createSelector } from 'reselect';

const selectLessons = state => state.lessons;

export const selectAllLessons = createSelector(
    [selectLessons],
    lessons => lessons
);

export const selectQuestion = (lessonId, questionId) =>
    createSelector(
    [selectLessons],
    lessons => {
        const lesson = lessons.lessons[lessonId - 1];
        const words = lesson.words;
        const questionData = lesson.items[questionId - 1];

        return {
            question: questionData.question,
            words,
            correc_orders: questionData.correc_orders
        };
    }
);