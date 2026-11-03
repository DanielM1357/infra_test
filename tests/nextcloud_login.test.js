const { By, until } = require('selenium-webdriver');
const { createDriver } = require('./driverFactory');


describe ('Nextcloud login', () => {
    let driver;

    beforeEach(async () => {
        driver = await createDriver();
    });

    afterEach(async () => {
        if (driver) {
            await driver.quit();
        }
    });

    test('login test', async () => {
        await driver.get("https://nextcloud.bulme.at/index.php/login?clear=1");

        let username = await driver.wait(until.elementLocated(By.id('username')));
        await username.sendKeys('$TEST_USERNAME');

        let password = await driver.wait(until.elementLocated(By.id('password')));
        await username.sendKeys('$TEST_PASSWORD');

        await driver.wait(until.urlContains('/dashboard'), 1000); // actual home instead of `/dashboard`
        console.log('Login was successfull.');
    
    });
});
