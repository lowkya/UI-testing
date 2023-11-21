describe('BookComponent', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/book');
  });

  it('should create and navigate to the correct initial URL', () => {
    cy.url().should('include', '/book');
  });

  it('should have a text box', () => {
    cy.get('input[type="text"]').should('exist');
  });

  it('should have a button to go to page 1', () => {
    cy.get('button').contains('Click here to go to page 1 !').should('exist');
  });

  it('should have a slider', () => {
    cy.get('input[type="range"]').should('exist');
  });

  it('should have radio buttons', () => {
    cy.get('input[type="radio"]').should('have.length', 2);
  });

  it('should have a background image', () => {
    cy.get('.container').should('have.css', 'background-image').and('include', 'opened-book-with-flying-pages-butterflies-dark-backgroundgenerative-ai_391052-12859.avif');
  });

  it('should have a label for slider', () => {
    cy.get('label[for="customRange"]').should('exist').should('have.text', 'How much do you like the book :');
  });

  it('should have a label for radio buttons', () => {
    cy.get('.radio-label').should('exist').should('have.text', 'Do you like reading ?');
  });

  it("check for existence of label for text box", () => {
    cy.get('.container .row:first-child .form-label').should('exist').and('have.text', 'Enter below your favourite book :');
  });

  it('should update text box value', () => {
    cy.get('input[type="text"]').type('Harry Potter').should('have.value', 'Harry Potter');
  });

  it('should check radio button functionality', () => {
    cy.get('input[type="radio"]').eq(0).click().should('be.checked');
    cy.get('input[type="radio"]').eq(1).should('not.be.checked');
    cy.get('input[type="radio"]').eq(1).click().should('be.checked');
    cy.get('input[type="radio"]').eq(0).should('not.be.checked');
  });

  it('should update the slider value', () => {
    cy.get('p').should('have.text', 'Selected Value: 50');
    cy.get('input[type="range"]').invoke('val', 75).trigger('change');
    cy.get('p').should('have.text', 'Selected Value: 75');
  });

  it('should have correct size for text box', () => {
    cy.get('input[type="text"]').should('have.css', 'width', '800px').and('have.css', 'height', '50px');
  });

  it('should have correct size for button', () => {
    cy.get('button').should('have.css', 'width', '1296px').and('have.css', 'height', '50px');
  });

  it('should have correct size for slider', () => {
    cy.get('input[type="range"]').should('have.css', 'width', '200px').and('have.css', 'height', '10px');
  });

  it('should have correct size for radio buttons', () => {
    cy.get('.custom-radio').should('have.css', 'font-size', '16px');
  });

  it('should have correct size for background image', () => {
    cy.get('.container').should('have.css', 'width', '1320px').and('have.css', 'height', '900px');
  });

  it('should have correct location for button', () => {
    cy.get('button').should(($btn) => {
      const rect = $btn[0].getBoundingClientRect();
      expect(rect.left).to.eq(312);
      expect(rect.right).to.eq(1608);
      expect(rect.top).to.eq(113);
      expect(rect.bottom).to.eq(163);
    });
  });

  it('should have correct location for text box', () => {
    cy.get('input[type="text"]').should(($textbox) => {
      const rect = $textbox[0].getBoundingClientRect();
      expect(rect.left).to.eq(560);
      expect(rect.right).to.eq(1360);
      expect(rect.top).to.eq(55);
      expect(rect.bottom).to.eq(105);
    });
  });

  it('should have correct location for slider', () => {
    cy.get('input[type="range"]').should(($slider) => {
      const rect = $slider[0].getBoundingClientRect();
      expect(rect.top).to.eq(218);
      expect(rect.bottom).to.eq(228);
      expect(rect.left).to.eq(995.21875);
      expect(rect.right).to.eq(1195.21875);
    });
  });

  it('should have correct location for radio buttons', () => {
    cy.get('.custom-radio').should(($radio) => {
      const rect = $radio[0].getBoundingClientRect();
      expect(rect.top).to.eq(320);
      expect(rect.bottom).to.eq(338);
      expect(rect.left).to.eq(940.234375);
      expect(rect.right).to.eq(979.765625);
    });
  });

  it('should have correct location for background image', () => {
    cy.get('.container').should(($div) => {
      const rect = $div[0].getBoundingClientRect();
      expect(rect.top).to.eq(8);
      expect(rect.bottom).to.eq(908);
      expect(rect.left).to.eq(300);
      expect(rect.right).to.eq(1620);
    });
  });

  it('should navigate to page 1 on button click', () => {
    cy.get('button').contains('Click here to go to page 1 !').click();
    cy.url().should('eq', 'http://localhost:4200/');
  });
});
