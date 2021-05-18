/// <reference types="cypress" />
import loc from '../../support/locators'

describe('compra de produto', () => {
    it('selecionar um produto', () => {
        cy.acessar_pagina()
        cy.selecionar_produto()
        cy.get(loc.PRODUTO.NOME_PRODUTO).contains('Faded Short Sleeve T-shirts')
     })

     it('adicionar produto ao carrinho', () => {
         cy.adicionar_carrinho()
         cy.get(loc.PRODUTO.PRODUTO_CARRINHO).contains('Faded Short Sleeve T-shirts')
              
         
     })

     it('confirmar a compra', () => {
        cy.get(loc.COMPRA.CONFIRMAR_COMPRA).click()
     })

     it('cadastrar cliente', () => {
        cy.get(loc.PRODUTO.CHECKOUT).click() 
        cy.cadastrar_cliente()

     })


})
