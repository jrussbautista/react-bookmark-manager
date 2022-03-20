export const initMocks = () => {
  // eslint-disable-next-line no-undef
  if (process.env.NODE_ENV === 'development') {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { worker } = require('./browser');
      worker.start();
    }
  }
};
