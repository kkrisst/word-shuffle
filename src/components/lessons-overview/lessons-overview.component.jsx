import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import LessonBlock from '../lesson-block/lesson-block.component.jsx';

import { selectAllLessons } from '../../redux/lessons/lessons.selectors';
import { selectUserLicence } from '../../redux/user/user.selectors';

import './lessons-overview.styles.scss';

const LessonsOverview = ({ lessons, userLicence }) => {
  console.log(lessons);
  console.log(lessons.lessons);
  console.log(userLicence);

  return (
    <div className='lessons-overview'>
    <div className='licence-info'>
      <span className='licence-label'>Your Licence:</span>
      <span className='licence-type'>{userLicence.toUpperCase()}</span>
      {
        userLicence.toUpperCase() == 'TRIAL' &&
          <Link className='licence-upgrade-button' to='/licence'>Upgrade to PRO!</Link>
      }
    </div>
    <div className='lesson-list'>
      {
        lessons.lessons.map(({id, ...otherProps}) => (
          <LessonBlock key={id} lessonId={id} {...otherProps} />
        ))
      }
    </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  lessons: selectAllLessons,
  userLicence: selectUserLicence
});

export default connect(mapStateToProps)(LessonsOverview);