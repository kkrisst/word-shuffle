import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../item-types';

import './target-card.styles.scss';

const TargetCard = (props) => {

  const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.SOURCE_CARD,
		drop: (item) => {
      props.onDrop(item, props.targetId);
    },
		collect: monitor => {
      return ({
        isOver: !!monitor.isOver(),
      })
    },
  })

  return (
    <div ref={drop} className='target-card'>
      {
        props.droppedItem
        ? (<span>{props.droppedItem.word}</span>)
        : ''
      }
    </div>
  );
};

export default TargetCard;