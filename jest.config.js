module.exports = {
  roots: [
    "<rootDir>/src",
  ],
  coverageDirectory: "<rootDir>/coverage/",
  moduleNameMapper: {"\\.(css|scss|png|svg)$": "<rootDir>/__mocks__/styleMock.js"},
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,js}',
  ],
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.js/"
  ],
  coveragePathIgnorePatterns: ['(tests/.*.mock).(jsx?|tsx?)$'],
  verbose: true,
}