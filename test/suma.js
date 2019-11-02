
const assert = require('assert');
const products = require('../product.controller.js');

    describe('Sum', () => {

        it('Suma de Positivos', () => {
      assert.equal(products.Suma(5,3), 8);
    });

    it('Suma de negativo y positivo', () => {
      assert.equal(products.Suma(3, -5), -2);
    });

    it('Suma de decimales', () => {
      assert.equal(products.Suma(3.5, 7.1), 10.6);
    });
  
});
