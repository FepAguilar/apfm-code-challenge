import React from 'react';
import { Button } from '@material-ui/core';

export const Results = ({ score, playAgain }) => (
  <div className="scoreboard">
    <h3>{score} out of 5 correct answers</h3>
    <Button className="btn-reset" onClick={playAgain}>
      Play again
    </Button>
  </div>
);
