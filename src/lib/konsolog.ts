export class Konsolog {
  private styles: Partial<CSSStyleDeclaration> = {};
  private readonly console: Console = console;

  public log(value: string): string {
    const styleString = Object.keys(this.styles)
      .map(prop => `${prop}: ${this.styles[prop]}`)
      .join('; ')
    this.console.log(`%c${value}`, styleString);
    return styleString;
  }
}

