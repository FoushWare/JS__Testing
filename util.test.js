// This syntax used to testing ... i can use other import {} from ... syntax but let's focus on testing not setup
const { generateText, checkAndGenerate } = require('./util');
const puppeteer = require('puppeteer');

test('should output name and age', () => {
    const text = generateText("ahmed", 26);

    expect(text).toBe("ahmed (26 years old)");

});
//Test the opposite .. if there is no data
test('should output data-less text', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');

})

// * integration test it looks like unit test but it could fail due to checkAndGenerate() or the function called iniside it generateText()

test('should generate a valid text output', () => {
    const text = checkAndGenerate('foush', 26);
    console.log(text);
    expect(text).toBe('foush (26 years old)');
});

test('should click around', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        // headless: true,
        slowMo: 80,
        args: ['--window-size=1920,1080']
    })
    const page = await browser.newPage();
    await page.goto('file:///home/tom/Programming/Testing/js-testing-introduction/index.html');
    // simulate the user action 
    await page.click('input#name');
    await page.type('input#name', 'foushware');
    await page.click('input#age');
    await page.type('input#age', '26');

    await page.click('#btnAddUser');

    // The above using head and the blow is headless 
    const finalText = await page.$eval('.user-item', el => el.textContent);
    expect(finalText).toBe('foushware (26 years old)');


}, 30000)