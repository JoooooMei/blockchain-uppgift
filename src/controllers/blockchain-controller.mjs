import { catchErrorAsync } from '../utilities/catchErrorAsync.mjs';
import Blockchain from '../models/Blockchain.mjs';

const blockChain = new Blockchain();

export const getAllBlocks = catchErrorAsync(async (req, res) => {
  res.status(200).json({ success: true, data: blockChain });
});

export const getBlockByHash = catchErrorAsync(async (req, res) => {
  const hash = req.params.hash;

  const block = blockChain.find(hash);

  if (!block) {
    return next(new AppError(`No block found with hash ${hash}`, 404));
  }

  res.status(200).json({ success: true, data: block });
});

export const createBlock = catchErrorAsync(async (req, res) => {
  const data = req.body;
  console.log('The body: ', req.body);
  blockChain.addBlock(data);

  res.status(201).json({
    success: true,
    statusMessage: 'Block added to blockchain',
    data: blockChain.chain,
    message: blockChain.message,
  });
});
