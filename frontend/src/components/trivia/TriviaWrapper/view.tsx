import React from 'react';

import { TriviaWrapperState } from "./types";

import { TriviaList } from 'components/trivia/';
import { triviaData } from "api/opentdb";


export class TriviaWrapper extends React.Component<{}, TriviaWrapperState> {
    state = {
        questions: [],
        currentQuestion: 0,
        triviaScore: 0,
        loading: undefined
    }

    private setQuestions = async () => {
        const results = await triviaData();
        this.setState({ questions: results, loading: false });
    }

    setCurrentQuestion(currentQuestion: number) {
        this.setState({ currentQuestion })
    }

    setTriviaScore(triviaScore: number) {
        this.setState({ triviaScore })
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.setQuestions();
    }
    render() {
        const { loading } = this.state;

        if (loading === false) {
            return (
                <>
                    <TriviaList
                        {...this.state}
                        setCurrentQuestion={this.setCurrentQuestion.bind(this)}
                        setTriviaScore={this.setTriviaScore.bind(this)}
                    />
                </>
            )
        } else {
            return null;
        }

    }
};