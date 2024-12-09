describe('contact form', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://api.emailjs.com/**', (req) => {
      req.reply({
        statusCode: 200,
        body: { success: true },
        headers: { 'content-type': 'application/json' },
      });
    }).as('sendEmailMessage');

    cy.visit('/contact');
  });

  it('should send request if fields are valid', () => {
    cy.fixture('fake-user').then(({ fullName, email, message }) => {
      cy.get('[data-testid=user-fullName]').type(fullName);
      cy.get('[data-testid=user-email]').type(email);
      cy.get('[data-testid=user-message]').type(message);

      cy.get('[data-testid=contact-submit]').click();

      cy.wait('@sendEmailMessage');
    });
  });

  it('should validate invalid email', () => {
    cy.get('[data-testid=contact-submit]').click();

    cy.contains('This field is required').should('be.visible');

    cy.get('[data-testid=user-email]').type('invalid email');
    cy.get('[data-testid=contact-submit]').click();

    cy.contains('Must be a valid email').should('be.visible');
  });

  it('should validate invalid fullName', () => {
    cy.get('[data-testid=contact-submit]').click();

    cy.contains('This field is required').should('be.visible');

    cy.get('[data-testid=user-fullName]').type('a');
    cy.get('[data-testid=contact-submit]').click();

    cy.contains('Validation.fullName must be at least 2 characters').should(
      'be.visible',
    );
  });

  it('should validate invalid user message', () => {
    cy.get('[data-testid=contact-submit]').click();

    cy.contains('This field is required').should('be.visible');

    cy.get('[data-testid=user-message]').type('a');
    cy.get('[data-testid=contact-submit]').click();

    cy.contains('Validation.message must be at least 5 characters').should(
      'be.visible',
    );
  });

  it('should show success toast after form submit', () => {
    cy.fixture('fake-user').then(({ fullName, email, message }) => {
      cy.get('[data-testid=user-fullName]').type(fullName);
      cy.get('[data-testid=user-email]').type(email);
      cy.get('[data-testid=user-message]').type(message);

      cy.get('[data-testid=contact-submit]').click();

      cy.wait('@sendEmailMessage');

      cy.get('[data-testid=app-toast]').should(
        'contain.text',
        'Operation completed successfully!',
      );
    });
  });
});
