import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import triviaService from 'trivia-service';

import { Question } from './Question';
import { Results } from './Results';

export class Questions extends Component {
  state = {
    questions: [],
    score: 0,
    responses: 0,
  };

  componentDidMount() {
    this.getQuestions();
  }

  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState((state: any) => {
        return {
          score: state.score += 1,
        };
      });
    }

    this.setState((state: any) => {
      return {
        responses: state.responses < 5 ? state.responses + 1 : 5,
      };
    });
  };

  getQuestions = () => {
    triviaService().then((questions) => {
      this.setState({
        questions,
      });
    });
  };

  playAgain = () => {
    this.getQuestions();

    this.setState((state: any) => {
      return {
        score: 0,
        responses: 0,
      };
    });
  };

  render() {
    return (
      <Container maxWidth="sm">
        <h2>Questions</h2>

        {this.state.questions.length &&
          this.state.responses < 5 &&
          this.state.questions.map(({ question, answers, correct, questionId }) => (
            <Question
              question={question}
              options={answers}
              key={questionId}
              selected={(answer) => this.computeAnswer(answer, correct)}
            />
          ))}

        {this.state.responses === 5 ? (
          <Results score={this.state.score} playAgain={this.playAgain} />
        ) : null}
      </Container>
    );
  }
}
