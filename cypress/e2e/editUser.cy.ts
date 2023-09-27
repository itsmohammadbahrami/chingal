/// <reference types="cypress" />

import { testIds } from '../../src/utils/constant';
import { user as string } from '../../src/utils/string';

const getFormItemsIds = () => {
   return [
      testIds.editUser.form.name,
      testIds.editUser.form.age,
      testIds.editUser.form.email,
      testIds.editUser.form.phone,
      testIds.editUser.form.country,
      testIds.editUser.form.city,
      testIds.editUser.form.street,
      testIds.editUser.form.zipCode,
      testIds.editUser.form.company,
   ];
};

describe('Edit User', () => {
   beforeEach(() => {
      cy.visit('/users');
      cy.get('tr');
      cy.findByTestId(testIds.users.tableRow + '0').click();
      cy.wait(2000);
   });
   it('Check elements', () => {
      cy.findByTestId(testIds.editUser.card);
      cy.findByTestId(testIds.editUser.cardTitle);
      cy.findByTestId(testIds.editUser.avatar);
      getFormItemsIds().forEach(id => {
         cy.findByTestId(id);
      });
      cy.findByTestId(testIds.editUser.form.edit);
      cy.findByTestId(testIds.editUser.form.delete);
      [
         string.cardTitle,
         string.formItems.name,
         string.formItems.age,
         string.formItems.email,
         string.formItems.phoneNumber,
         string.formItems.country,
         string.formItems.city,
         string.formItems.street,
         string.formItems.zipcode,
         string.formItems.company,
         string.formItems.edit,
         string.formItems.delete,
      ].forEach(item => {
         cy.contains(item);
      });
   });

   it('Display correct error when form is empty and click on edit', () => {
      getFormItemsIds().forEach(id => {
         cy.findByTestId(id).clear();
      });
      cy.findByTestId(testIds.editUser.form.edit)
         .click()
         .then(() => {
            [
               string.formItems.message(string.formItems.name),
               string.formItems.message(string.formItems.age),
               string.formItems.message(string.formItems.email),
               string.formItems.message(string.formItems.phoneNumber),
               string.formItems.message(string.formItems.country),
               string.formItems.message(string.formItems.city),
               string.formItems.message(string.formItems.street),
               string.formItems.message(string.formItems.zipcode),
               string.formItems.message(string.formItems.company),
            ].map(item => cy.contains(item));
         });
   });

   it('Display correct error when email is wrong', () => {
      cy.findByTestId(testIds.editUser.form.email).clear().type('test');
      cy.contains(string.formItems.emailFormatError);
   });

   it('Display correct message when click on edit', () => {
      cy.findByTestId(testIds.editUser.form.edit).click();
      cy.contains(string.formItems.editSuccessfull);
   });

   it('Display correct message when click on delete and redirect to /users page', () => {
      cy.findByTestId(testIds.editUser.form.delete).click();
      cy.findByTestId(testIds.editUser.form.deleteConfirm).click();
      cy.contains(string.formItems.delete);
      cy.url().should('contain', '/users');
   });
});
