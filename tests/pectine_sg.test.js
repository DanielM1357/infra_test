


const { createDriver } = require('./driverFactory.js');
const { By, until } = require('selenium-webdriver');


describe("Pectine autotest", () => {
  let driver;

  beforeAll(async() => {
    driver = await createDriver();
  })

  afterAll(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  test("try get url and proof autotest passed", async () => {
    await driver.get('https://pectine.bulme.at/~sg/autotest.txt');

    await driver.wait(
      until.elementLocated(By.xpath('//*[contains(text(), "PASSED")]')), 10000);
  });
}
)
