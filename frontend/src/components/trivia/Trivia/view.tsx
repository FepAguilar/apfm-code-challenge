import React, { Component, MouseEvent } from 'react';

import { Button, ButtonGroup, Grid, Typography } from '@material-ui/core';
import { TriviaProps } from './types';
import { shuffleChoices } from "./utils";
import { AnswerPanel } from "components/trivia/";

let results: string[] = [];

class Trivia extends Component<TriviaProps> {
    state = {
        results: []
    };

    onChange(choice: any, event: MouseEvent) {
        event.preventDefault()
        const { setCurrentQuestion, question, setTriviaScore, triviaScore, currentQuestion } = this.props
        if (choice === question.correct) {
            results.push('✓')
            setTriviaScore(triviaScore + 1)
            setCurrentQuestion(currentQuestion + 1)
        } else if (choice !== question.correct) {
            results.push('X')
            setCurrentQuestion(currentQuestion + 1)
        } else {
            console.error('error while trying to process your answer')
            setCurrentQuestion(currentQuestion + 1)
        }
    }
    render() {
        const { question, styles } = this.props;
        return (
            <div className={styles.triviaItem} data-test="Trivia">

                <AnswerPanel results={results} styles={styles} />

                <Typography variant="h5">{question.text}</Typography>

                <ButtonGroup
                    orientation="vertical"
                    color="secondary"
                    aria-label="vertical contained primary button group"
                    variant="contained"
                    className={styles.buttonGroup}
                >
                    {shuffleChoices(question.choices).map((choice: any, index: number) => (
                        <Button key={`button_${index}`} data-test={`button-test-${index}`} onClick={this.onChange.bind(this, choice.text)}>
                            <span>{choice.text}</span>
                        </Button>
                    ))}
                </ButtonGroup>
                <Grid item xs={12} className={styles.boxStyles}>
                    <span>{question.category}</span>
                </Grid>
                <Grid item xs={12} className={styles.boxStyles}>
                    <span>Difficulty: {question.difficulty}</span>
                </Grid>
            </div>
        )
    }
}

export { Trivia };