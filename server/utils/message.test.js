const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Ushi';
    var text = 'This is my test';
    var message = generateMessage(from, text);

    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    // or
    expect(message).toInclude({from, text});

    expect(message.createdAt).toBeA('number');
  });
});


describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Ho';
    var lat = 123;
    var long = 333;
    var url = `https://www.google.com/maps?q=${lat},${long}`;
    var message = generateLocationMessage(from, lat, long);

    expect(message).toInclude({from, url});
    expect(message.createdAt).toBeA('number');
  });
});
