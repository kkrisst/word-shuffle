import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route, Link } from 'react-router-dom';

import LessonsOverview from '../../components/lessons-overview/lessons-overview.component';
import QuestionPage from '../question-page/question-page.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import './lessons-page.styles.scss';

const LessonsPage = ({ currentUser, match }) => {

    return (
        <div className='lessons-page'>
            {
                currentUser ?
                (
                    <div className='logged-in-wrapper'>
                        <Route exact path={`${match.path}`} component={LessonsOverview} />
                        <Route path={`${match.path}/:lessonId/:questionId`} component={QuestionPage} />
                    </div>
                )
                : (<div className='main-button-container'>
                        <Link className='main-button' to='/signin'>Sign up</Link>
                    </div>)
                
            }            
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(LessonsPage);