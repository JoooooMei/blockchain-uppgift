import { GENESIS_BLOCK } from './genesis.mjs';

export default class Block {
  constructor({
    timestamp,
    hash,
    lastHash,
    data,
    nounce,
    difficulty,
    message,
  }) {
    this.timestamp = timestamp;
    this.hash = hash;
    this.lastHash = lastHash;
    this.data = data;
    this.nounce = nounce;
    this.difficulty = difficulty;
    this.message = message;
  }

  static genesis() {
    return new this(GENESIS_BLOCK);
  }
}
