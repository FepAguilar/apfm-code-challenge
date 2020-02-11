import React from 'react';

import { Grid } from '@material-ui/core';

import { TriviaListProps } from 'components/trivia/TriviaList/types';
import { QuestionType } from 'components/trivia/types';

import { useStyles } from "./styles";

import { Trivia, Results, ScoreBoard } from 'components/trivia';

export const TriviaList: React.FC<TriviaListProps> = (props: TriviaListProps) => {
    const classes = useStyles();
    const { questions, currentQuestion, triviaScore } = props;

    return (<div className={classes.triviaWrapper} data-test="TriviaList">
        <Grid container spacing={3}>
            <Grid item xs={12} className={classes.boxStyles}>

                {(currentQuestion >= questions.length) ?
                    <Results
                        questionsTotal={questions.length}
                        currentQuestion={currentQuestion}
                        triviaScore={triviaScore}

                    /> :
                    <ScoreBoard
                        questionsTotal={questions.length}
                        currentQuestion={currentQuestion}
                        triviaScore={triviaScore}
                    />
                }

            </Grid>
            <Grid item xs={12} className={classes.boxStyles}>
                {questions.map((question: QuestionType) => {
                    if (question.id === currentQuestion) {
                        return <Trivia styles={classes} key={question.id} question={question} {...props} />
                    } else {
                        return null;
                    }
                })}
            </Grid>
        </Grid>
    </div>)
};
