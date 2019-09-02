import React from 'react';
import { connect } from 'react-redux';
import { DndProvider } from "react-dnd";
import HTML5Backend from 'react-dnd-html5-backend';

import SourceCard from '../../components/source-card/source-card.component';
import TargetCard from '../../components/target-card/target-card.component';

import { selectQuestion } from '../../redux/lessons/lessons.selectors';

import './question-page.styles.scss';

class QuestionPage extends React.Component {

  constructor(){
    super();
    this.state = {
      userOrder: []
    }
  };

  onDrop = (item, targetId) => {
    console.log(item);
    console.log(targetId);

    let newUserOrder = this.state.userOrder;
    newUserOrder[targetId] = { word: item.word, id: item.id };
    this.setState({
      userOrder: newUserOrder
    }, () => console.log(this.state))
  };

  checkResult = () => {
    console.log("checkResult");
  };

  render () {
    const { questionData } = this.props;
    const { question, words, correc_orders } = questionData;
  
    const targets = [];
    for (let i = 0; i < words.length; i++) {
      let droppedItem = null;
      if (this.state.userOrder[i]) {
        droppedItem = this.state.userOrder[i];
      } 
      targets.push(<TargetCard targetId={i} onDrop={this.onDrop} userOrder={this.state.userOrder} />);
    }

    return (
      <DndProvider backend={HTML5Backend}>
        <div className='question-page'>
          <div className='question'>{question}</div>

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
        </div>

        <div className='check-button' onClick={this.checkResult}>Check</div>
      </DndProvider>
    )
  }
};

const mapStateToProps = (state, ownProps) => ({
  questionData: selectQuestion(ownProps.match.params.lessonId, ownProps.match.params.questionId)(state)
});

export default connect(mapStateToProps)(QuestionPage);