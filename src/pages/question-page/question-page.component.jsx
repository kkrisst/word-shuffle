import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { DndProvider } from "react-dnd";
import HTML5Backend from 'react-dnd-html5-backend';

import SourceCard from '../../components/source-card/source-card.component';
import TargetCard from '../../components/target-card/target-card.component';

import { selectQuestion } from '../../redux/lessons/lessons.selectors';

import './question-page.styles.scss';

class QuestionPage extends React.Component {

  constructor(props){
    super(props);
    let init_array = [];
    for (let i = 0; i < props.questionData.words.length; i++) {
      init_array.push(null);
    }

    this.state = {
      userOrder: init_array,
      displayCheckString: false,
      correct: false
    }
  };

  onDrop = (item, targetId) => {

    let newUserOrder = [...this.state.userOrder];

    for (let [i, value] of newUserOrder.entries()) {
      if (value !== null) {
        if (i !== targetId && value.word === item.word) {
          newUserOrder[i] = null;
        }
      }
    }
    
    newUserOrder[targetId] = { word: item.word, id: item.id };

    this.setState({
      userOrder: newUserOrder,
      displayCheckString: false
    }/*, () => console.log(this.state)*/)
  };

  checkResult = () => {
    const { questionData: { correct_orders } } = this.props;

    let userOrderStr = '';
    for (let value of this.state.userOrder) {
      if (value === null) {
        userOrderStr += 'x';
      } else {
        userOrderStr += value.id;
      }
    }

    var correct = false;
    for (let value of correct_orders) {
      if (userOrderStr === value) {
        correct = true;
        break;
      }
    }
    
    this.setState({
      displayCheckString: true,
      correct
    });
  };

  render () {
    const { questionData: { question, words } } = this.props;
  
    const targets = [];
    for (let i = 0; i < words.length; i++) {
      let droppedItem = null;
      if (this.state.userOrder[i]) {
        droppedItem = this.state.userOrder[i];
      } 
      targets.push(<TargetCard key={i} targetId={i} onDrop={this.onDrop} droppedItem={droppedItem} />);
    }

    const checkString = this.state.correct ? 'Correct order!' : 'Wrong order!';

    return (
      <DndProvider backend={HTML5Backend}>
        <div className='question-page'>
          <div className='question'>{question}</div>
          <div className='instructions'>Drag the blue cards to form a sentence.</div>

          <div className='blank-list'>
            {targets}
          </div>

          <div className='word-list'>
            {
              words.map(word => {
                return (<SourceCard className='one-word' key={word.wordId} word={word.word} wordId={word.wordId}></SourceCard>)
              })
            }
          </div>
          <div className='check-button' onClick={this.checkResult}>Check</div>
          {
            this.state.displayCheckString
            ? (<div className={`check-string ${this.state.correct ? 'correct' : 'wrong'}`}>{checkString}</div>)
            : ''
          }
          <div className='back-button-container'>
            {
              this.state.correct
              ? (<Link className='back-button' to='/lessons'>Back to lessons</Link>)
              : ''
            }
          </div>
        </div>
      </DndProvider>
    )
  }
};

const mapStateToProps = (state, ownProps) => ({
  questionData: selectQuestion(ownProps.match.params.lessonId, ownProps.match.params.questionId)(state)
});

export default connect(mapStateToProps)(QuestionPage);