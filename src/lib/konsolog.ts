export class Konsolog {
  public readonly console: Console = console;
  private styles: Partial<CSSStyleDeclaration> = {};

  public log(value: string): string {
    const styleString = Object.keys(this.styles)
      .map(prop => `${prop}: ${this.styles[prop]}`)
      .join('; ')
    this.console.log(`%c${value}`, styleString);
    this.styles = {};
    return styleString;
  }
}

