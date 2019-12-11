import { NullablePricePipe } from './nullable-price.pipe';

describe('NullablePricePipe', () => {
  it('create an instance', () => {
    const pipe = new NullablePricePipe();
    expect(pipe).toBeTruthy();
  });
});
