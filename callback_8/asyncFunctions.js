function asyncFn(callback) {
    setTimeout(() => {
      callback('Result from async function');
    }, 1000);
  }
  
  module.exports = { asyncFn };