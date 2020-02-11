import React from 'react';
import { Typography } from '@material-ui/core';
import { ScoreBoardProps } from "./types";

export const ScoreBoard: React.FC<ScoreBoardProps> = (props: ScoreBoardProps) => {
    const { questionsTotal, currentQuestion, triviaScore } = props;

    return <div data-test="ScoreBoard">
        <Typography variant="h3">Question {currentQuestion} of {questionsTotal}</Typography>
        <Typography variant="h4">Score {triviaScore}</Typography>
    </div>;
};
