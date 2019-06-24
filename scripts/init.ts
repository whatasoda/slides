import { resolve } from 'path';
import fs from 'fs-extra';

const [, , slide] = process.argv;

if (!slide) process.exit(1);

const base = resolve(__dirname, '../slides', slide);

if (fs.pathExistsSync(base)) {
  console.error('That directory already exists!');
  process.exit(1);
}

fs.mkdirsSync(base);
fs.copySync('template', base);
