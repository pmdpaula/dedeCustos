/* eslint-disable no-console */
/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('/app/login/', () => {
  // it === test que estamos fazendo
  it('preencha os campos e vá para a página /app/profile', () => {
    // cy.viewport(360, 800);

    // cy.intercept(`${process.env.NEXT_PUBLIC_JWT_SERVER}/login`).as('userLogin');
    cy.intercept('http://localhost:4001/login').as('userLogin');

    cy.visit('/app/login/');

    // Preenchimento do formulário e submit
    cy.get('#signInForm input[name="email"]').type('pmdpaula@yahoo.com.br');

    cy.get('#signInForm input[name="password"]').type('123456');

    cy.get('#signInForm button[type="submit"]').click();

    // O que é esperado após o envio do formulário
    cy.url().should('include', '/app/profile');

    // Temos token?
    cy.wait('@userLogin').then((intercept) => {
      // console.log(intercept);
      const { token } = intercept.response.body;

      cy.getCookie('LOGIN_COOKIE_APP_TOKEN')
        .should('exist')
        // token do cookie é igual do server?
        .should('have.property', 'value', token);
    });
  });
});
