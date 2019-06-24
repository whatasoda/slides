import { publish } from 'gh-pages';
import { resolve } from 'path';

const [, , slide] = process.argv;

if (!slide) process.exit(1);

publish(
  resolve(__dirname, '../slides', slide, 'dist'),
  { dest: slide },
  (err) => {
    if (err) console.error(err);
    console.log('Published');
  },
);
