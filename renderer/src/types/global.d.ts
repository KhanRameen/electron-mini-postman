export {};
declare global {
  interface Window {
    api: {
      ping: () => any;
    };
  }
}
