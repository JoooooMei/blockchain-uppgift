export default class Block {
  constructor({ timestamp, hash, lastHash }) {
    this.timestamp = timestamp;
    this.hash = hash;
    this.lastHash = lastHash;
  }
}
