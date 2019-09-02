import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../item-types';

import './source-card.styles.scss';

const SourceCard = ({ word, wordId }) => {
  const [{isDragging}, drag] = useDrag({
    item: {
      type: ItemTypes.SOURCE_CARD,
      word: word,
      id: wordId
    },
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
  })

  return (
    <div ref={drag} className='source-card'>{word}</div>
  );
};

export default SourceCard;