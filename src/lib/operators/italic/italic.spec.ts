import test from 'ava';
import { italic } from './italic';

test('italic', t => {
  t.is(Object.keys(italic()).length, 1);
  t.is(Object.keys(italic())[0], 'font-style');
  t.truthy(italic()['font-style']);
  t.is(italic()['font-style'], 'italic');
});
