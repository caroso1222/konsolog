import { Konsolog } from "./konsolog";
import * as operators from './operators';
import { IKonsolog } from "./konsolog.interface";
import noLog from './no-log';

export const console: IKonsolog = (() => {
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

  return newConsole as any;
})();
