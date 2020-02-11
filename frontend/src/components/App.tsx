import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Footer } from 'components/layout/Footer';
import { Header } from 'components/layout/Header';
import { clientRoutes } from 'helpers/clientRoutes';
import { TriviaWrapper } from 'components/trivia/TriviaWrapper';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    appTriviaWrapper: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%',
      width: "80%",
      margin: "0 auto"
    },
  });
});

export interface AppProps { }

export const App: React.FC<AppProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.appTriviaWrapper}>
      <Header />
      <Switch>
        <Route exact path={clientRoutes.triviaHome()} component={TriviaWrapper} />
      </Switch>
    </div>
  );
};
