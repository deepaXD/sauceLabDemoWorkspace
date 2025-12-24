import { By, WebDriver, WebElement } from 'selenium-webdriver';
import { BasePage } from './basePage';

export class CustomerPage extends BasePage {
  constructor(readonly driver: WebDriver) {
    super(driver);
  }

  // add items to cart by name
  async selectItemByName(name: string) {
    return await this.click(By.css(`[data-test=add-to-cart-${name}]`));
  }

  // add items to cart one by one using ID
  async selectFirstItem() {
    return await this.click(By.id('add-to-cart-sauce-labs-backpack'));
  }

  async selectSecondItem() {
    return await this.click(By.id('add-to-cart-sauce-labs-bike-light'));
  }

  async selectThirdItem() {
    return await this.click(By.id('add-to-cart-sauce-labs-bolt-t-shirt'));
  }

  // move to cart
  async selectCart() {
    return await this.click(By.css('[data-test=shopping-cart-link]'));
  }

  // move to checkout
  async selctCheckout() {
    return await this.click(By.id('checkout'));
  }

  // fill checkout form
  async fillCheckoutForm(firstName:string, lastName:string, zipCode:number) {
    await this.type(By.id('first-name'), firstName);
    await this.type(By.id('last-name'), lastName);
    await this.type(By.id('postal-code'), zipCode);
  }
  
  // continue from checkout
  async selctContinue() {
    return await this.click(By.id('continue'));
  }

  // selct finish
  async selctFinish() {
    return await this.click(By.id('finish'));
  }

  // success message text
  async successMessage() {
    return await this.text(By.css(`[data-test=complete-header]`));
  }

  // text message text
  async textMessage() {
    return await this.text(By.css(`[data-test=complete-text]`));
  }

  // checkout success image 
  async successImage() {
    return await this.text(By.css(`[data-test=pony-express]`));
  }

  // get cart item count
  async cartItemCount() {
    return await this.text(By.css(`[data-test=shopping-cart-badge]`));
  }


  

}
