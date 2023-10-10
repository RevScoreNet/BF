import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = {
  mode: 'production',
  entry: './test.js',
  output: {
    path: resolve(__dirname, 'docs'),
    filename: 'test.min.js'
  }
};

export default config;