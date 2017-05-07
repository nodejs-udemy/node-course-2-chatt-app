const expect = require('expect');

const {generateMessage} = require('./message');

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
  })
});
