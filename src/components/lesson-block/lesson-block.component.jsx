import React from 'react';
import { withRouter } from 'react-router-dom';

import './lesson-block.styles.scss';

const LessonBlock = (props) => {
  console.log(props);

  const { lessonId, bullet, title, items, history, match } = props;
  
  const urlPrefix = match.url;
  if (urlPrefix.endsWith("/")) {
    urlPrefix = urlPrefix.slice(0, -1);
  }

  return (
    <div className='lesson-block'>
      <span className='bullet'>{bullet}</span>
      <span className='title'>{title}</span>
      {
        items.map(({id, question}) => (
          <div
            className='lesson-row'
            key={id}
            onClick={() => history.push(`${urlPrefix}/${lessonId}/${id}`)}
          >{question}</div>
        ))
      }
    </div>
  );
};

export default withRouter(LessonBlock);