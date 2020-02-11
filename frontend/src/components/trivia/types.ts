export interface QuestionType {
    id: number;
    category: string;
    type: string;
    difficulty: string;
    text: string;
    choices: object[];
    correct: string;
    incorrect: [];
}