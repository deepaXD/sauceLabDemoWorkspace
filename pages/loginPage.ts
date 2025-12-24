import { By, WebDriver } from 'selenium-webdriver';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  constructor(readonly driver: WebDriver) {
    super(driver);
  }

  async adminAuthenticate(username: string, password: string) {
    await this.visit('https://www.saucedemo.com');
    await this.type(By.css('[data-test=username]'), username);
    await this.type(By.css('[data-test=password]'), password);
    await this.click(By.id('login-button'));
  }
  
}
