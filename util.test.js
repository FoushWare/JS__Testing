// This syntax used to testing ... i can use other import {} from ... syntax but let's focus on testing not setup
const { generateText } = require('./util');

test('should output name and age', () => {
    const text = generateText("ahmed", 26);

    expect(text).toBe("ahmed (26 years old)");

});
//Test the opposite .. if there is no data
test('should output data-less text', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');

})