import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import lessonsReducer from './lessons/lessons.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  lessons: lessonsReducer
});

export default rootReducer;
