import test from 'ava';
import { blue } from './blue';

test('blue', t => {
  t.is(Object.keys(blue()).length, 1);
  t.is(Object.keys(blue())[0], 'color');
  t.truthy(blue().color);
  t.is(blue().color, 'blue');
});
