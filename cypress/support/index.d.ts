declare namespace Cypress {
   interface Chainable<Subject> {
      findByTestId(testid: string): Chainable<Element>;
   }
}
