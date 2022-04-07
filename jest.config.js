module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`
    // '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/src/__mocks__/file-mocks.js`,
    // '\\.svg[^.js]': '<rootDir>/src/__mocks__/svgMock.ts',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testPathIgnorePatterns: [
    `node_modules`
  ]
}