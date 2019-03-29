import test from 'ava';
import { loading } from './loading';

test('loading', t => {
  let _console = '';
  const konsologStub: any = {
    console: {
      log: (...args: string[]) => (_console = args[1])
    }
  };
  const windowStub: any = {
    btoa: (str: string) => str
  };
  loading.call(konsologStub, windowStub);
  t.not(_console.indexOf('background'), -1);
  t.not(_console.indexOf('svg'), -1);
  t.is((_console.match(/<circle/g) || []).length, 3);
  t.not(_console.indexOf('font-size: 16px'), -1);
});
