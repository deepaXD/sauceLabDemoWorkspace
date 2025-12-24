import { WebDriver } from 'selenium-webdriver';
import { CustomerPage } from './sauceLabPageObject';
import { LoginPage } from './loginPage';

export class Pages {
  public login: LoginPage;
  public customer: CustomerPage;

  constructor(public browser: WebDriver) {
    this.login = new LoginPage(browser);
    this.customer = new CustomerPage(browser);
  }

  async dispose() {
    await this.cleanup();
    await this.close();
  }

  async quit() {
    if (this.browser != null) {
      await this.browser.quit();
    }
  }

  async cleanup() {
    await this.browser.manage().deleteAllCookies();
  }

  async close() {
    await this.browser.close();
  }
}
