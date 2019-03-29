import test from 'ava';
import { green } from './green';

test('green', t => {
  t.is(Object.keys(green()).length, 1);
  t.is(Object.keys(green())[0], 'color');
  t.truthy(green().color);
  t.is(green().color, 'green');
});
