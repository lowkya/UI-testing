describe('ColorComponent', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/color');
  });

  it('should create and navigate to the correct initial URL', () => {
    cy.url().should('include', '/color');
  });

  it('should check if the button to go to page 3 exists', () => {
    cy.get('button').contains('Click to go to page 3 !').should('exist');
  });

  it('should check if checkboxes exist', () => {
    cy.get('input[type="checkbox"]').should('have.length', 4);
  });

  it('should check if background image exists', () => {
    cy.get('.container').should('have.css', 'background-image').and('include', 'color1-20191204062437970.jpg');
  });

  it('should check if list exists', () => {
    cy.get('ul li').should('have.length', 4);
  });

  it('should check if text box exists', () => {
    cy.get('input[type="text"]').should('exist');
  });

  it('should check for label of text box', () => {
    cy.get('.form-label').should('have.text', 'Enter below your favourite color :');
  });

  it('should check for label of checkbox', () => {
    cy.get('.checkbox-label').should('have.text', 'Which of these are your favourite colors ?');
  });

  it('should check working of checkboxes', () => {
    cy.get('input[type="checkbox"]').eq(1).should('be.checked');
    cy.get('input[type="checkbox"]').eq(2).click().should('be.checked');
    cy.get('input[type="checkbox"]').eq(2).click().should('not.be.checked');
  });

  it('should have correct list items', () => {
    const colors = ['Black', 'Purple', 'Lavender', 'Teal'];
    cy.get('ul li').each((item, index) => {
      cy.wrap(item).should('have.text', colors[index]);
    });
  });

  it('should check working of text box', () => {
    const newColor = 'Blue';
    cy.get('input[type="text"]').type(newColor).should('have.value', newColor);
  });

  it('should check for heading on list', () => {
    cy.get('.list-p').should('have.text', 'These are my favourite colors :');
  });

  it('should check for size of text box', () => {
    cy.get('input[type="text"]').should('have.css', 'width', '800px').and('have.css', 'height', '50px');
  });

  it('should check the size of list', () => {
    cy.get('ul').should('have.css', 'width', '200px');
  });

  it('should check the size of list label', () => {
    cy.get('.list-p').should('have.css', 'width', '400px');
  });

  it('should check the size of background image', () => {
    cy.get('.container').should('have.css', 'width', '1320px').and('have.css', 'height', '900px');
  });

  it('should check size of checkboxes', () => {
    cy.get('input[type="checkbox"]').should('have.css', 'width', '20px');
  });

  it('should check for size of button', () => {
    cy.get('button').should('have.css', 'width', '1320px').and('have.css', 'height', '50px');
  });

  it('should check for location of button', () => {
    cy.get('button').then((button) => {
      const buttonRect = button[0].getBoundingClientRect();
      expect(buttonRect.left).to.be.closeTo(300, 1);
      expect(buttonRect.right).to.be.closeTo(1620, 1);
      expect(buttonRect.top).to.be.closeTo(113, 1);
      expect(buttonRect.bottom).to.be.closeTo(163, 1);
    });
  });

  it('should check for location of text box', () => {
    cy.get('input[type="text"]').then((textBox) => {
      const textBoxRect = textBox[0].getBoundingClientRect();
      expect(textBoxRect.left).to.be.closeTo(560, 1);
      expect(textBoxRect.right).to.be.closeTo(1360, 1);
      expect(textBoxRect.top).to.be.closeTo(55, 1);
      expect(textBoxRect.bottom).to.be.closeTo(105, 1);
    });
  });

  it('should check for location of background image', () => {
    cy.get('.container').then((divWithBackgroundImage) => {
      const backgroundRect = divWithBackgroundImage[0].getBoundingClientRect();
      expect(backgroundRect.top).to.be.closeTo(8, 1);
      expect(backgroundRect.bottom).to.be.closeTo(908, 1);
      expect(backgroundRect.left).to.be.closeTo(300, 1);
      expect(backgroundRect.right).to.be.closeTo(1620, 1);
    });
  });

  it('should check for location of list', () => {
    cy.get('ul').then((itemList) => {
      const itemRect = itemList[0].getBoundingClientRect();
      expect(itemRect.top).to.be.closeTo(217, 1);
      expect(itemRect.bottom).to.be.closeTo(305, 1);
      expect(itemRect.left).to.be.closeTo(312, 1);
      expect(itemRect.right).to.be.closeTo(512, 1);
    });
  });

  it('should check for location of check box', () => {
    cy.get('input[type="checkbox"]').then((checkbox) => {
      const checkBoxRect = checkbox[0].getBoundingClientRect();
      expect(checkBoxRect.top).to.be.closeTo(371, 1);
      expect(checkBoxRect.bottom).to.be.closeTo(384, 1);
      expect(checkBoxRect.left).to.be.closeTo(927, 1);
      expect(checkBoxRect.right).to.be.closeTo(947, 1);
    });
  });

  it('should take the flow to page 3', () => {
    cy.get('button').contains('Click to go to page 3 !').click();
    cy.url().should('include', '/book');
  });
})
