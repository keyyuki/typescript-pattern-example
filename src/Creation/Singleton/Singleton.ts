export class Singleton {
  protected static instance: Singleton;
  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  // some own variable and functions
  private num = 0;
  public addNum(): number {
    return ++this.num;
  }
}
