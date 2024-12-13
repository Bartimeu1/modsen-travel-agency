describe('locale toggle', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('toggle locale button should exist', () => {
    cy.get('[data-testid="locale-button"]').should('exist').click();
    cy.get('[data-testid="locale-item"]').should('exist');
  });

  it('should change dynamic locale route after click', () => {
    cy.get('[data-testid="locale-button"]').click();
    cy.get('[data-testid="locale-item"]').first().click();
    cy.url().should('eq', 'http://localhost:3000/ru');

    cy.get('[data-testid="locale-button"]').click();
    cy.get('[data-testid="locale-item"]').eq(1).click();
    cy.url().should('eq', 'http://localhost:3000/en');
  });

  it('base locale should be english', () => {
    cy.url().should('eq', 'http://localhost:3000/en');

    cy.get('[data-testid="tour-button"]')
      .should('exist')
      .contains('Take a tour');
    cy.get('[data-testid="subscribe-button"]')
      .should('exist')
      .contains('Subscribe');
  });

  it('should change localization into russian after click', () => {
    cy.get('[data-testid="locale-button"]').click();
    cy.get('[data-testid="locale-item"]').first().click();

    cy.url().should('eq', 'http://localhost:3000/ru');
    cy.get('[data-testid="tour-button"]')
      .should('exist')
      .contains('Выбрать тур');
    cy.get('[data-testid="subscribe-button"]')
      .should('exist')
      .contains('Подписаться');
  });
});
