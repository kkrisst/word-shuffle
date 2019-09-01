import React from 'react';
import { connect } from 'react-redux';

import { selectQuestion } from '../../redux/lessons/lessons.selectors';

import './question-page.styles.scss';

const QuestionPage = ({ questionData }) => {
  console.log(questionData);
  const { question, words, correc_orders } = questionData;

  return (
    <div className='question-page'>
      <div className='question'>{question}</div>
      <div className='word-list'>
        {
          words.map(word => <div key={word.id}>{word}</div>)
        }
      </div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  questionData: selectQuestion(ownProps.match.params.lessonId, ownProps.match.params.questionId)(state)
});

export default connect(mapStateToProps)(QuestionPage);