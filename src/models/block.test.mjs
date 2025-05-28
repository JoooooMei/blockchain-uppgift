import { describe, expect } from 'vitest';
import Block from './Block.mjs';

describe('Block', () => {
  const timestamp = 2000;
  const hash = 'current-hash';
  const lastHash = 'prev-hash';

  const block = new Block({
    hash,
    lastHash,
    timestamp,
  });

  describe('Should have the correct properties', () => {
    it('should have a timestamp property', () => {
      expect(block).toHaveProperty('timestamp');
      console.log('Timestamp print here:', block.timestamp);
    });

    it('Should have a hash property', () => {
      expect(block).toHaveProperty('hash');
    });

    it('should have a lastHash property', () => {
      expect(block).toHaveProperty('lastHash');
      console.log('lastHash here: ', block.lastHash);
    });
  });
});
