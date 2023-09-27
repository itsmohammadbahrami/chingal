/// <reference types="cypress" />

import { testIds } from '../../src/utils/constant';

const getLayoutBackground = () => {
   return cy
      .findByTestId(testIds.layout.container)
      .should('have.css', 'background');
};

describe('Header', () => {
   it('Check elements', () => {
      cy.visit('/users');
      cy.findByTestId(testIds.header.logo);
      cy.findByTestId(testIds.header.themeSwitch);
      cy.findByTestId(testIds.header.searchInput);
   });

   it('Change background after click on switch', () => {
      cy.visit('/users');
      getLayoutBackground().then(bg => {
         cy.findByTestId(testIds.header.themeSwitch).click();
         const isWhiteMode = (bg + '').includes('rgb(245, 245, 245)');
         getLayoutBackground().then(bg => {
            expect(bg + '').to.includes(
               isWhiteMode ? 'rgb(0, 0, 0)' : 'rgb(245, 245, 245)'
            );
         });
      });
   });
});
