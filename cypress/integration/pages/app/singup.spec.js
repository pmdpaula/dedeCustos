/* eslint-disable no-console */
/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('/app/login/', () => {
  // it === test que estamos fazendo
  it('preencha os campos e vá para a página /app/profile', () => {
    cy.viewport(360, 800);

    // cy.intercept(`${process.env.NEXT_PUBLIC_JWT_SERVER}/login`).as('userSinUp');
    cy.intercept('http://localhost:4001/register').as('userSinUp');

    cy.visit('/app/login/');

    // Exibe o formulário de cadastro de usuário
    cy.get('#singUpButton').click();
    cy.wait(2000);

    // Preenchimento do formulário e submit
    cy.get('#signUpForm input[name="firstName"]').type('Pedro');
    cy.get('#signUpForm input[name="surname"]').type('de Paula');
    cy.get('#signUpForm input[name="email"]').type('pmdpaula1@yahoo.com.br');

    cy.get('#signUpForm input[name="password"]').type('123456');
    cy.get('#signUpForm input[name="passwordConfirmation"]').type('123456');

    cy.get('#signUpForm button[type="submit"]').click();

    // O que é esperado após o envio do formulário
    // cy.url().should('include', '/app/profile');

    // Temos token?
    cy.wait('@userSinUp').then((intercept) => {
      // console.log(intercept);

      if (intercept.response.body === 'User Already Exist. Please Login') {
        cy.get('#CreateUserError').contains('Erro de Cadastro');
      } else {
        cy.get('#CreateUserSuccess').contains('Usuário cadastro');
      }
      // const { token } = intercept.response.body;

      // cy.getCookie('LOGIN_COOKIE_APP_TOKEN')
      //   .should('exist')
      //   // token do cookie é igual do server?
      //   .should('have.property', 'value', token);
    });
  });
});
