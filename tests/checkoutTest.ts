import { afterEach, beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';
import { Browser } from '../lib/browser';
import { getCredentials } from "../lib/auth";
import { Pages } from '../pages';
const { username, password } = getCredentials();

describe('Sauce Labs Demo', function () {
  let page: Pages;

  context('Happy Path checkout flow', function () {
    beforeEach(async function () {
      const browser = await new Browser('chrome').build();
      page = new Pages(browser);
      await page.login.adminAuthenticate(username, password);
      
    });

    afterEach(async function () {
      await page.quit();
    });

    const data = {
      cartItemName1: 'sauce-labs-backpack',
      cartItemName2: 'sauce-labs-bike-light',
      cartItemName3: 'sauce-labs-bolt-t-shirt',
      cartCount1: '1',
      cartCount2: '2',
      cartCount3: '3',
      firstName: 'UserFirstname', 
      lastName: 'UserLastName', 
      zipCode: 111111,
      successMessage: 'Thank you for your order!',
      textMessage: 'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
    };

    it('Add three items by name to cart and verify customer is able to successfully checkout', async function () {
      await page.customer.selectItemByName(data.cartItemName1);
      expect(await page.customer.cartItemCount(), "Fail message: expected cart count to be 1").equal(data.cartCount1);
      await page.customer.selectItemByName(data.cartItemName2);
      expect(await page.customer.cartItemCount(), "Fail message: expected cart count to be 2").equal(data.cartCount2);
      await page.customer.selectItemByName(data.cartItemName3);
      expect(await page.customer.cartItemCount(), "Fail message: expected cart count to be 3").equal(data.cartCount3);
      await page.customer.selectCart();
      await page.customer.selctCheckout();
      await page.customer.fillCheckoutForm(data.firstName, data.lastName, data.zipCode);
      await page.customer.selctContinue();
      await page.customer.selctFinish();
      // expect(await page.customer.successImage()).exist('1');
      const successMessage = await page.customer.successMessage();
      expect(successMessage).equal(data.successMessage);
      const textMessage = await page.customer.textMessage();
      expect(textMessage).equal(data.textMessage);

    });
    
  });
});
