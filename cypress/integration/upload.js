/* eslint-disable no-undef */

describe('CSV Upload', () => {
  it('uploading', () => {
    cy.visit('/');
    cy.get('input[type=file]').attachFile('../fixtures/test.csv');
    cy.contains('Matthieu');
    cy.contains('Nicolas');
  })
});
