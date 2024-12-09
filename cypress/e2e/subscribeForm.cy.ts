describe('subscribe form', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://api.emailjs.com/**', (req) => {
      req.reply({
        statusCode: 200,
        body: { success: true },
        headers: { 'content-type': 'application/json' },
      });
    }).as('sendSubscribeEmail');

    cy.visit('/');
  });

  it('should send subscribe request if email is valid', () => {
    cy.fixture('fake-user').then(({ email }) => {
      cy.get('[data-testid=subscribe-email]').type(email);
      cy.get('[data-testid=subscribe-submit]').click();

      cy.wait('@sendSubscribeEmail');
    });
  });

  it('should validate invalid email', () => {
    cy.get('[data-testid=subscribe-submit]').click();

    cy.contains('This field is required').should('be.visible');

    cy.get('[data-testid=subscribe-email]').type('invalid email');
    cy.get('[data-testid=subscribe-submit]').click();

    cy.contains('Must be a valid email').should('be.visible');
  });

  it('should show failure toast if email is invalid', () => {
    cy.get('[data-testid=subscribe-email]').type('invalid email');
    cy.get('[data-testid=subscribe-submit]').click();

    cy.get('[data-testid=app-toast]').should(
      'contain.text',
      'Something went wrong!',
    );
  });

  it('should show success toast after subscribe', () => {
    cy.fixture('fake-user').then(({ email }) => {
      cy.get('[data-testid=subscribe-email]').type(email);
      cy.get('[data-testid=subscribe-submit]').click();

      cy.wait('@sendSubscribeEmail');

      cy.get('[data-testid=app-toast]').should(
        'contain.text',
        'Operation completed successfully!',
      );
    });
  });
});
