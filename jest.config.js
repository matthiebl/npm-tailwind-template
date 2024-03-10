/** @type {import('jest').Config} */
const config = {
  coveragePathIgnorePatterns: ['src/stories'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/mocks/styleMock.js',
  },
}

module.exports = config
