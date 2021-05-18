/// <reference types="cypress" />

Cypress.Commands.add('acessar_pagina', () => {
    cy.visit('http://automationpractice.com/')
})

Cypress.Commands.add('selecionar_produto', () => {
    cy.get('.sf-menu > :nth-child(3) > a').click()
    
    
})

Cypress.Commands.add('adicionar_carrinho', () => {
    cy.get('.product_img_link > .replace-2x').click()
    cy.get('[name=Submit]').click({force: true})
    
   
    
})

Cypress.Commands.add('cadastrar_cliente', () => {
    cy.get('#email_create').type('test96@test.com')
    cy.get('#SubmitCreate > span').click()
    cy.get('#customer_firstname').type('test')
    cy.get('#customer_lastname').type('dbsp')
    cy.get('#passwd').type('919191')
    cy.get('#address1').type('Street dbsp')
    cy.get('#city').type('City')
    cy.get('#id_state').select('Maine')
    cy.get('#postcode').type('45300')
    cy.get('#phone_mobile').type('99999999')
    cy.get('#submitAccount > span').click()


})

