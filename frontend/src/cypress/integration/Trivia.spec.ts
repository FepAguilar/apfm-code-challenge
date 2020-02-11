import { clientBaseUrl } from 'helpers/clientRoutes';

describe('Trivia Game', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3001");
    });

    it('Verifies <Header /> component Exists', () => {

        const header = cy.get('[data-test="Header"]');

        header.should("exist");
        header.contains("Trivia Game!");

    });

    it('Verifies <ScoreBoard /> component Exists', () => {

        const scoreBoard = cy.get('[data-test="ScoreBoard"]');

        scoreBoard.should("exist");
        scoreBoard.contains("Question 0 of 8");
    });

    it('Verifies <Trivia /> component Exists', () => {

        const trivia = cy.get('[data-test="Trivia"]');
        const answerButton = cy.get('[data-test="button-test-0"]');

        trivia.should("exist");
        answerButton.click();
    });

    it('Verifies <Results /> component Exists', () => {

        const results = cy.get('[data-test="Results"]');

        results.should("exist");
    });

    it('Verifies <TriviaList /> component Exists', () => {

        const triviaList = cy.get('[data-test="TriviaList"]');

        triviaList.should("exist");
    });

    it('Verifies <AnswerPortal /> component Exists', () => {

        const answerPortal = cy.get('[data-test="AnswerPortal"]');

        answerPortal.should("exist");
    });
});
