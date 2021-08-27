module.exports = {
    moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/config/styleMock.js',
    },
    setupFilesAfterEnv: ["./src/setupTests.js"]
  };