import { QuestionType } from "components/trivia/types";

export interface TriviaProps {
    setCurrentQuestion: (question: number) => void;
    question: QuestionType;
    setTriviaScore: (triviaScore: number) => void;
    triviaScore: number;
    currentQuestion: number;
    styles: any;
}