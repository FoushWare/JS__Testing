//* loadTitle().then(title => { // The problem still here we still hitting the API And i think it's not good in production
//*      ..When we look at fetching we can saw axios : > We don't want to test code written by thrid-party library 
//*      We will solve this by mocking :  means replace part of code we don't want to test with some dummy inplemention
//*     expect(title).toBe('DELECTUS AUT AUTEM')
//* });
// jest.mock('./http')

//! Here axios mocks written by me will be loaded no need to tell jest because jest use the global packages mocks 

const { loadTitle } = require('./util');
test('sould print an uppercase text', () => {
    loadTitle().then(title => { // The problem still here we still hitting the API And i think it's not good in production
        // ..When we look at fetching we can saw axios : > We don't want to test code written by thrid-party library 
        // We will solve this by mocking :  means replace part of code we don't want to test with some dummy inplemention
        expect(title).toBe('DELECTUS AUT AUTEM')
    });
})