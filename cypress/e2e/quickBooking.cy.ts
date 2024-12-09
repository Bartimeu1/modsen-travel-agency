describe('quick booking', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://api.emailjs.com/**', (req) => {
      req.reply({
        statusCode: 200,
        body: { success: true },
        headers: { 'content-type': 'application/json' },
      });
    }).as('sendBookingEmail');

    cy.visit('/');
  });

  it('should open quick booking modal', () => {
    cy.get('[data-testid="booking-button"]').click();

    cy.get('[data-testid="booking-modal"]').should('be.visible');
  });

  it('should send booking request if values are valid', () => {
    cy.get('[data-testid="booking-button"]').click();

    cy.fixture('fake-user').then(({ fullName, email }) => {
      cy.get('[data-testid=booking-name]').type(fullName);
      cy.get('[data-testid=booking-email]').type(email);
      cy.get('[data-testid="booking-submit"]').click();

      cy.wait('@sendBookingEmail');
    });
  });

  it('should validate invalid user name', () => {
    cy.get('[data-testid="booking-button"]').click();

    cy.get('[data-testid="booking-submit"]').click();
    cy.contains('This field is required').should('be.visible');

    cy.get('[data-testid="booking-name"]').type('a');
    cy.get('[data-testid="booking-submit"]').click();
    cy.contains('This value is too short').should('be.visible');
  });

  it('should validate invalid user email', () => {
    cy.get('[data-testid="booking-button"]').click();

    cy.get('[data-testid="booking-submit"]').click();
    cy.contains('This field is required').should('be.visible');

    cy.get('[data-testid="booking-email"]').type('a');
    cy.get('[data-testid="booking-submit"]').click();
    cy.contains('Must be a valid email').should('be.visible');
  });

  it('should show failure toast if email is invalid', () => {
    cy.get('[data-testid="booking-button"]').click();

    cy.get('[data-testid=booking-email]').type('invalid email');
    cy.get('[data-testid=booking-submit]').click();

    cy.get('[data-testid=app-toast]').should(
      'contain.text',
      'Something went wrong!',
    );
  });
});
