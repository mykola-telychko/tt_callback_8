const chai = require('chai');
const expect = chai.expect;

// npm install mocha chai --save-dev

// command for start test 
// npx mocha asyncFunctions.test.js

const { asyncFn } = require('./asyncFunctions');

describe('Async Functions', () => {
  it('should return the correct result', (done) => {
    asyncFn((result) => {+
++      expect(result).to.equal('Result from async function');
      done(); // Call done() to signal that the test is complete
    });
  });

  it('should handle errors', (done) => {
    asyncFn((result) => {
      try {
        expect(result).to.equal('Wrong Result');
        done(); // Call done() to signal that the test is complete
      } catch (error) {
        done(error); // If there's an error, pass it to done()
      }
    });
  });
});
