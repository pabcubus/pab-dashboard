
export {};

declare global {
  interface Window {
    api: {
      getAppName(): Promise<string>;
    };
  }
}
