import helloName from '../../../src/utils/hello-name';

describe('Tests File hello-name.js', () => {
  it('Should get \'Hello Cristina\'', () => {
    const name = 'Cristina';
    const message = helloName(name);
    expect(message).toEqual(`Hello ${name}`);
  });
});
