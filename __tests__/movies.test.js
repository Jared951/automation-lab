const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

let driver;

beforeAll(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
});

afterAll(async () => {
  await driver.quit();
});

test('can do cool things idk', async () => {
    await driver.get('http://localhost:3000/');

    await driver.findElement(By.id("add-movie-input")).sendKeys('matilda', Key.RETURN);

    await driver.findElement(By.id('movie-0')).click()
})