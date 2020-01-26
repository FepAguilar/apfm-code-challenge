import React, { Component } from 'react';
import { Container } from '@material-ui/core';

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

  API_URL = 'https://opentdb.com/api.php?amount=5';

  computeAnswer = (answer, correctAnswer) => {
    console.log(answer, correctAnswer);

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
    return fetch(this.API_URL)
      .then((res) => res.json())
      .then((data) => {
        // Combine answers.
        data.results.forEach((question) => {
          question.answers = [...question.incorrect_answers];
          question.answers.push(question.correct_answer);
        });

        this.setState({
          questions: data.results,
        });
      })
      .catch(console.error);
  };

  playAgain = () => {
    this.getQuestions().then(() => {
      this.setState((state: any) => {
        return {
          score: 0,
          responses: 0,
        };
      });
    });
  };

  render() {
    return (
      <Container maxWidth="sm">
        <h2>Questions</h2>

        {this.state.questions.length &&
          this.state.responses < 5 &&
          this.state.questions.map(({ question, answers, correct_answer }, index) => (
            <Question
              question={question}
              options={answers}
              key={index}
              selected={(answer) => this.computeAnswer(answer, correct_answer)}
            />
          ))}

        {this.state.responses === 5 ? (
          <Results score={this.state.score} playAgain={this.playAgain} />
        ) : null}
      </Container>
    );
  }
}
