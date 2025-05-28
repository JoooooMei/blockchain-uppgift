export default class Block {
  constructor({ timestamp, hash, lastHash, data, nounce, difficulty }) {
    this.timestamp = timestamp;
    this.hash = hash;
    this.lastHash = lastHash;
    this.data = data;
    this.nounce = nounce;
    this.difficulty = difficulty;
  }
}
