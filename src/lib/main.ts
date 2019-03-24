import { Konsolog } from "./konsolog";
import * as operators from './operators';
import { IKonsolog } from "./konsolog.interface";

export const console: IKonsolog = (() => {
  const newConsole = new Konsolog();

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
