/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('/app/login/', () => {
  // it === test que estamos fazendo
  it('preencha os campos com valores de usuário incorreto e receba um alerta de erro', () => {
    cy.viewport(360, 800);
    cy.visit('/app/login/');
    cy.get('#signInForm input[name="email"]').type('rafael@casa');

    cy.get('#signInForm input[name="password"]').type('1234');

    cy.get('#signInForm button[type="submit"]').click();

    cy.contains('Erro de login');
  });
});
