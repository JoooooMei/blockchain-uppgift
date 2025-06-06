import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const logger = (req, res, next) => {
  const message = `${req.method} ${
    req.originalUrl
  } - ${new Date().toLocaleDateString('sv-SE')} ${new Date().toLocaleTimeString(
    'sv-SE'
  )}\n`;

  console.log('Metod: ', message);

  const logDir = path.join(__dirname, '..', 'logs');
  const logFilePath = path.join(logDir, 'logs.txt');

  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }

  fs.appendFile(logFilePath, message, (err) => {
    if (err) {
      console.error('Unable to write log to file:', err.message);
    }
  });

  next();
};
