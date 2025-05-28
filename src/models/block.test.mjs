import { describe, expect } from 'vitest';

describe('Should have the correct properties', () => {
  it('should have a timestamp property', () => {
    expect(block).toHaveProperty('timestamp');
  });

  it('Should have a hash property', () => {
    expect(block).toHaveProperty('hash');
  });

  it('should have a lastHash property', () => {
    expect(block).toHaveProperty('lastHash');
  });
});
