import React from 'react';
import { Typography, Button, Grid } from '@material-ui/core';
import { ResultsProps } from "./types";;

export const Results: React.FC<ResultsProps> = (props: ResultsProps) => {
    const { questionsTotal, triviaScore } = props;
    const percent = (triviaScore / questionsTotal * 100);
    const percentFormatted = isNaN(percent) ? "" : percent;

    return <div data-test="Results">
        <Grid>
            <Typography variant="h3">You Got {triviaScore} out of {questionsTotal} Correct</Typography>
            <Typography variant="h4">Your Score: {percentFormatted}%</Typography>
        </Grid>
        <hr />
        <Grid>
            <Button variant="contained" color="primary" href="/">Play Again!</Button>
        </Grid>
    </div>;
};
