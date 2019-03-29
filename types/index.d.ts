interface IKonsolog {
  red: Console;
  green: Console;
  blue: Console;
  italic: Console;
  bold: Console;
  lg: Console;
  md: Console;
  xl: Console;
  color: (value: string) => Console;
  loading: () => void;
}

interface Console extends IKonsolog {}

declare var console: Console;
