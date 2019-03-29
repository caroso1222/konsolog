import test from 'ava';
import { xl } from './xl';

test('xl', t => {
  t.is(Object.keys(xl()).length, 1);
  t.is(Object.keys(xl())[0], 'font-size');
  t.truthy(xl()['font-size']);
  t.is(xl()['font-size'], '24px');
});
