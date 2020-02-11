import { QuestionType } from "components/trivia/types";

export interface TriviaListProps {
    questions: QuestionType[];
    currentQuestion: number;
    triviaScore: number;
    setCurrentQuestion: (question: number) => void;
    setTriviaScore: (triviaScore: number) => void;
}