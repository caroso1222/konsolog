import test from 'ava';
import console from './main';

test('console', t => {
  t.is(console.red.color('green').log('foo'), 'color: green');
  t.is(console.bold.color('green').log('foo'), 'font-weight: bold; color: green');
});
