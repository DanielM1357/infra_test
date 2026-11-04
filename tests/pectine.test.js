const { createDriver } = require('./driverFactory.js');
const { By, until } = require('selenium-webdriver');


describe("Pectine redirect to Bulme", () => {
  let driver;

  beforeAll(async() => {
    driver = await createDriver();
  })

  afterAll(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  test("try get url and test redirect", async () => {
    await driver.get('https://pectine.bulme.at');

    excpect(await driver.getCurrentUrl()).toBe(
      'https://www.bulme.at/'
    );
    await driver.wait(
      until.elementLocated(By.xpath('//*[contains(text(), "Ibererstraße 15 – 21, 8051 Graz")]')), 10000);
  });
}
)
