import React, { Component } from 'react';
import { Container } from '@material-ui/core';

import triviaService from '../trivia-service';

export class TriviaQuestions extends Component {
  state = {
    questions: [],
  };

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions = () => {
    triviaService().then((question) => {
      this.setState({
        questions: question,
      });
    });
  };

  render() {
    return (
      <Container maxWidth="sm">
        <h2>Questions</h2>

        {this.state.questions.length &&
          this.state.questions.map(({ question, answers, correct, questionId }) => (
            <h3 key="{questionId}">{question}</h3>
          ))}
      </Container>
    );
  }
}
