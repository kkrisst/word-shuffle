import React from 'react';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './lesson-block.styles.scss';

const LessonBlock = (props) => {
  console.log(props);

  const { lessonId, bullet, title, items, words, description, history, match } = props;
  
  const urlPrefix = match.url;
  if (urlPrefix.endsWith("/")) {
    urlPrefix = urlPrefix.slice(0, -1);
  }

  return (
    <div className='lesson-block'>
      <div className='lesson-header'>
        <span className='bullet'>{bullet}</span>
        <span className='title'>{title}</span>
      </div>

      <div className='lesson-info'>
        <div className='description'>{description}</div>
        <div className='word-list'>
        Words: {
            words.map(word => {
                console.log(word);
                return (<span className='one-word' key={word.wordId}>{word.word}</span>)
              }

            )
          }
        </div>
      </div>

      <div className='questions-block'>
        <div className='questions-label'>Questions:</div>
        <div className='question-row-list'>
          {
            items.map(({id, question}) => (
              <div
                className='question-row'
                key={id}
                onClick={() => history.push(`${urlPrefix}/${lessonId}/${id}`)}
              >
              <FontAwesomeIcon style={{ marginRight: '10px' }} icon="angle-right" />{question}
              </div>
            ))
          }
        </div>
      </div>

      <hr />
    </div>
  );
};

export default withRouter(LessonBlock);