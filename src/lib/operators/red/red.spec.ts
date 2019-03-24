import test from 'ava';
import { red } from './red';

test('red', t => {
  t.is(Object.keys(red()).length, 1);
  t.is(Object.keys(red())[0], 'color');
  t.truthy(red().color);
  t.is(red().color, 'red');
});
