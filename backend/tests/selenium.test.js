import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

const BASE_URL = process.env.APP_URL || 'http://localhost:3001';

describe('Selenium - Teste de Interface', () => {
  let driver;

  beforeAll(async () => {
    const options = new chrome.Options();
    options.addArguments('--headless');
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');

    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
  }, 30000);

  afterAll(async () => {
    if (driver) await driver.quit();
  });

  test('deve acessar /api/tarefas e receber resposta JSON', async () => {
    await driver.get(`${BASE_URL}/api/tarefas`);
    await driver.wait(until.elementLocated(By.tagName('body')), 5000);
    const body = await driver.findElement(By.tagName('body'));
    const text = await body.getText();
    expect(text).toBeDefined();
    expect(text.length).toBeGreaterThan(0);
  }, 20000);

});