import fetch from "unfetch";
import { OPENDTB_URL } from "config/appConfig";

const getTriviaQuestionsFromAPI = async () => {

    const result = await fetch(OPENDTB_URL);
    const jsonResults = await result.json();
    const formattedResults = jsonResults.results;

    return formattedResults;
}

const decodeHTML = (html) => {
    var txt = document.createElement("textarea")
    txt.innerHTML = html
    return txt.value
}

const formatAPITriviaData = questions => questions.map((question, index) => formatQuestion(question, index));


const setFormatChoices = choices => choices.map((choice, index) => ({ text: decodeHTML(choice.trim()) }));


const shiftAllChoices = question => question.correct_answer.split(',').concat(question.incorrect_answers)


const formatTrivia = (trivia, index) => ({
    id: index,
    category: trivia.category,
    type: trivia.type,
    difficulty: trivia.difficulty,
    text: decodeHTML(trivia.question.trim()),
    choices: setFormatChoices(shiftAllChoices(trivia)),
    correct: decodeHTML(trivia.correct_answer.trim()),
    incorrect: trivia.incorrect_answers
});

const formatAPITriviaData = questions => questions.map((question, index) => formatTrivia(question, index));


export const triviaData = async () => {
    const triviaQuestions = await getTriviaQuestionsFromAPI();
    const formattedTriviaQuestions = await formatAPITriviaData(triviaQuestions);

    return formattedTriviaQuestions
}