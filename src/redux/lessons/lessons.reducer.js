import LESSONS_DATA from './lessons.data';

const INITIAL_STATE = {
    lessons: LESSONS_DATA
};

const lessonsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
          return state;
    }
};

export default lessonsReducer;