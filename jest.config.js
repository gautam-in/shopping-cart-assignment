module.exports = {
    setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
    "testEnvironment": "jsdom",
    moduleNameMapper: {
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
        '^@pages/(.*)$': '<rootDir>/src/pages/$1',
        '^@api/(.*)$': '<rootDir>/src/api/$1',
        '\\.(css|less|scss)$': '<rootDir>/src/jest/__mocks__/styleMock.js',
    }
};