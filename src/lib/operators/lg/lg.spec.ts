import test from 'ava';
import { lg } from './lg';

test('lg', t => {
  t.is(Object.keys(lg()).length, 1);
  t.is(Object.keys(lg())[0], 'font-size');
  t.truthy(lg()['font-size']);
  t.is(lg()['font-size'], '32px');
});
