import test from 'ava';
import { bold } from './bold';

test('bold', t => {
  t.is(Object.keys(bold()).length, 1);
  t.is(Object.keys(bold())[0], 'font-weight');
  t.truthy(bold()['font-weight']);
  t.is(bold()['font-weight'], 'bold');
});
