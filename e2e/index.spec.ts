describe('Main testing', () => {
   it('it should visit page', () => {
      cy.visit('/');
   });

   it('should check landing page is about-me page', () => {
      cy.get('._about-me')
         .should('exist')
         .get('._title')
         .should('contain.text', 'About Me');
   });

   it('should visit Experience page and check title', () => {
      cy.get('._sticker[role=link][data-test=Experience]')
         .should('exist')
         .click()
         .get('._title')
         .should('contain.text', 'Experience');
   });

   it('should visit Education page and check title', () => {
      cy.get('._sticker[role=link][data-test=Education]')
         .should('exist')
         .click()
         .get('._title')
         .should('contain.text', 'Education');
   });

   it('should visit Knowledge page and check title', () => {
      cy.get('._sticker[role=link][data-test=Knowledge]')
         .should('exist')
         .click()
         .get('._title')
         .should('contain.text', 'Knowledge');
   });

   it('should visit Language Skills page and check title', () => {
      cy.get('._sticker[role=link][data-test="LanguageSkills"]')
         .should('exist')
         .click()
         .get('._title')
         .should('contain.text', 'Language Skills');
   });

   it('should visit contact page and check title', () => {
      cy.get('._sticker[role=link][data-test=Contact]')
         .should('exist')
         .click()
         .get('._title')
         .should('contain.text', 'Contact')
         .get('._contact')
         .should('contain.text', 'Github');
   });
});
