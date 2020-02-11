import { QuestionType } from "components/trivia/types";

export interface TriviaWrapperState {
    questions: QuestionType[];
    currentQuestion: number;
    triviaScore: number;
    loading: undefined | boolean;
}