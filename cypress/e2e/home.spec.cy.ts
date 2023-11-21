describe('HomeComponent', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/'); // Assuming your home page URL is '/'
  });

  it('should have a title', () => {
    cy.get('.highlight-card span').contains('Assignment5 app is running!');
  });

  it('should have a slider', () => {
    cy.get('input[type="range"]').should('exist');
  });

  it('should have a button', () => {
    cy.get('button').contains('Click to go to page 2 !').should('exist');
  });

  it('should have radio buttons', () => {
    cy.get('input[type="radio"]').should('have.length', 2);
  });

  it('should check for label for slider', () => {
    cy.get('label[for="customRange"]').should('have.text', 'How are you doing today :');
  });

  it('should check for label for radio button', () => {
    cy.get('.radio-label').should('have.text', 'What emoji represents your mood the best today ?');
  });

  it('should check for text on the button', () => {
    cy.get('button').should('have.text', 'Click to go to page 2 !');
  });

  it('radio buttons should work properly', () => {
    cy.get('input[type="radio"]').eq(0).check().should('be.checked');
    cy.get('input[type="radio"]').eq(1).check().should('be.checked');
  });

  it('should go to page 2 on clicking the go to page 2 button', () => {
    cy.get('button').contains('Click to go to page 2 !').click();
    cy.url().should('eq', 'http://localhost:4200/color');
  });

  it('should verify the size of button', () => {
    cy.get('button').should('have.css', 'width', '928px').should('have.css', 'height', '50px');
  });

  it('should check the size and location of button', () => {
    cy.get('button').should('have.css', 'width', '928px').and('have.css', 'height', '50px');
    cy.get('button').should(($btn) => {
      const rect = $btn[0].getBoundingClientRect();
      expect(rect.width).to.eq(928);
      expect(rect.height).to.eq(50);
      expect(rect.left).to.eq(496);
      expect(rect.top).to.eq(162);
    });
  });

  it('should check the size and location of slider', () => {
    cy.get('input[type="range"]').should('have.css', 'width', '200px').and('have.css', 'height', '10px');
    cy.get('input[type="range"]').should(($slider) => {
      const rect = $slider[0].getBoundingClientRect();
      expect(rect.width).to.eq(200);
      expect(rect.height).to.eq(10);
      expect(rect.left).to.eq(963.875);
      expect(rect.top).to.eq(314);
    });
  });

  it('should check the size and location of radio buttons', () => {
    cy.get('.custom-radio').should('have.css', 'font-size', '16px');
    cy.get('.custom-radio').should(($radio) => {
      const rect = $radio[0].getBoundingClientRect();
      expect(rect.width).to.eq(36.8125); // Example values, adjust as per your design
      expect(rect.height).to.eq(26); // Example values, adjust as per your design
      expect(rect.left).to.eq(941.59375); // Example values, adjust as per your design
      expect(rect.top).to.eq(412); // Example values, adjust as per your design
    });
  });
});
