export interface IKonsolog {
  red: IKonsolog;
  blue: IKonsolog;
  bold: IKonsolog;
  color: (value: string) => IKonsolog;
  log: (value: string) => string;
}
