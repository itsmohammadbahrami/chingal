/// <reference types="cypress" />

import { testIds } from '../../src/utils/constant';
import { users as string } from '../../src/utils/string';

describe('Users', () => {
   it('Check elements', () => {
      cy.visit('/users');
      cy.findByTestId(testIds.layout.breadcrumb);
      cy.findByTestId(testIds.users.table);
      string.tableHeaders.forEach(item => {
         cy.contains(item.title);
      });
   });

   it('Redirect to user page after click on table row', () => {
      cy.visit('/users');
      cy.get('tr');
      cy.findByTestId(testIds.users.tableRow + '0').click();
      cy.url().should('match', /\/users\/\d+/);
   });
});
