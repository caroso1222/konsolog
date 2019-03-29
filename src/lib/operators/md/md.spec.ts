import test from 'ava';
import { md } from './md';

test('md', t => {
  t.is(Object.keys(md()).length, 1);
  t.is(Object.keys(md())[0], 'font-size');
  t.truthy(md()['font-size']);
  t.is(md()['font-size'], '16px');
});
