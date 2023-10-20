module.exports = {
  // testEnvironment: 'jsdom',
  // Ignore timeouts when debugging
  testTimeout: process.env.NODE_OPTIONS?.includes("inspect") ? Infinity : 5000
  // setupFilesAfterEnv: ["@testing-library/jest-dom"]
};
