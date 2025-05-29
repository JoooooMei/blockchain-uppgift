import { describe, expect } from 'vitest';
import Block from './Block.mjs';
import { GENESIS_BLOCK } from './genesis.mjs';

describe('Block', () => {
  const timestamp = 2000;
  const currentHash = 'current-hash';
  const lastHash = 'prev-hash';
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const nounce = 1;
  const difficulty = 1;
  const message = 'A testdriven message';

  const block = new Block({
    hash: currentHash,
    lastHash,
    timestamp,
    data,
    nounce,
    difficulty,
    message,
  });

  describe('Should have the correct properties', () => {
    it('should have a timestamp property', () => {
      expect(block).toHaveProperty('timestamp');
      console.log('timestamp print here:', block.timestamp);
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

    it('should have a message property', () => {
      expect(block).toHaveProperty('message');
    });

    it('should have difficulty property', () => {
      expect(block).toHaveProperty('difficulty');
    });
  });

  describe('Should have correct initaialization of its properties', () => {
    it('should set a timestamp value', () => {
      expect(block.timestamp).not.toEqual(undefined);
    });

    it('should have correct hash', () => {
      expect(block.hash).toEqual(currentHash);
    });

    it('should set lastHash to the hash of the previous block', () => {
      expect(block.lastHash).toEqual(lastHash);
    });

    it('should set the data property', () => {
      expect(block.data).toEqual(data);
    });

    it('should return an instance of the Block class', () => {
      expect(block instanceof Block).toBeTruthy();
    });
  });

  describe('genisis() function', () => {
    const genesisBlock = Block.genesis();

    it('should return an instance of the Block class', () => {
      expect(genesisBlock instanceof Block).toBeTruthy();
    });

    it('should return the genesis data', () => {
      expect(genesisBlock).toEqual(GENESIS_BLOCK);
    });
  });
});
