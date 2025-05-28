import { describe, expect } from 'vitest';
import Block from './Block.mjs';

describe('Block', () => {
  const timestamp = 2000;
  const hash = 'current-hash';
  const lastHash = 'prev-hash';
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const nounce = 1;
  const difficulty = 1;

  const block = new Block({
    hash,
    lastHash,
    timestamp,
    data,
    nounce,
    difficulty,
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

    it('should have data property', () => {
      expect(block).toHaveProperty('data');
    });

    it('should have nounce property', () => {
      expect(block).toHaveProperty('nounce');
    });

    it('should have difficulty property', () => {
      expect(block).toHaveProperty('difficulty');
    });
  });
});
