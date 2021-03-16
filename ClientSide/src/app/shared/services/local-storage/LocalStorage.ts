export class LocalStorage implements Storage {
  [name: string]: any;
  readonly length: number;
  clear(): void {}
  getItem(key: string): string | null {
    return undefined;
  }
  key(index: number): string | null {
    return undefined;
  }
  removeItem(key: string): void {}
  setItem(key: string, value: string): void {}
}
