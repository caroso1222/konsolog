import test from 'ava';
import { color } from './color';

test('red', t => {
  const myColor = 'green';
  t.is(Object.keys(color(myColor)).length, 1);
  t.is(Object.keys(color(myColor))[0], 'color');
  t.truthy(color(myColor).color);
  t.is(color(myColor).color, 'green');
});
