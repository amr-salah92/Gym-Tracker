module.exports = {
  testEnvironment: 'jsdom', // Changed from 'node'
  testMatch: ['**/*.test.js', '**/*.test.jsx'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
};