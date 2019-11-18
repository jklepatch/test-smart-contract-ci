const SimpleStorage = artifacts.require('SimpleStorage.sol');

contract('SimpleStorage', () => {
  it('should return foo', async () => {
    const simpleStorage = await SimpleStorage.new();
    const result = await simpleStorage.foo();
    assert(result === 'foo');
  });
});
