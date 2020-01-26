import React, { useState } from 'react';
import { Button, Card } from '@material-ui/core';

export const Question = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);

  return (
    <Card variant="outlined">
      <h3>{question}</h3>
      {answer.map((text, index) => (
        <Button
          key={index}
          className="btn-answer"
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
          variant="contained"
          color="primary"
          type="button"
        >
          {text}
        </Button>
      ))}
    </Card>
  );
};
