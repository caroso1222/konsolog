import { Konsolog } from "./konsolog";
import * as operators from './operators';
import * as functions from './functions';
import noLog from './no-log';

export default (() => {
  const konsolog = new Konsolog();

  const newConsole = Object.assign(konsolog, noLog);

  Object.keys(operators).forEach(key => {
    const fn = function(this: Konsolog, ...args: any): Konsolog {
      this['styles'] = {
        ...this['styles'],
        ...operators[key].apply(null, args)
      }
      return this;
    }
    const isGetter = operators[key].length === 0;
    Object.defineProperty(newConsole, key, isGetter ? { get: fn } : { value: fn });
  });

  Object.keys(functions).forEach(key => {
    Object.defineProperty(newConsole, key, { value: functions[key].bind(newConsole) });
  })

  return newConsole;
})();
