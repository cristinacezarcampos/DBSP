/// <reference types="cypress" />
import loc from '../../support/locators'

it('consulta shopping_cart', () => {
    const expectedResult = [
        {
          sku: 'demo_2',
          color: 'Black',
          size: 'S',
          price: 27.00
        }
      ]
    cy.request({
        method: 'GET',
        url: 'http://5d9cc58566d00400145c9ed4.mockapi.io/shopping_cart'
    }).then((Response) => {
        expect(response.status).to.be.equal(200);
        response.body.shopping_cart.forEach((shopping_cart, indice) => {
        expect(shopping_cart.sku).to.equal(expectedResult[indice].sku)
        expect(shopping_cart.color).to.equal(expectedResult[indice].color)
        expect(shopping_cart.size).to.equal(expectedResult[indice].size)
        expect(shopping_cart.price).to.equal(expectedResult[indice].price)

    })
})

})
    
