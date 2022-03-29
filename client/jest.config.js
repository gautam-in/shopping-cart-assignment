// module.exports = {
//   preset: '@vue/cli-plugin-unit-jest',
//   collectCoverage: true,
//   collectCoverageFrom: ['src/**/*.{js,vue}', '!**/node_modules/**'],
//   modulePathIgnorePatterns: ['vee-validate.js', 'main.js']
// };

module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js}', '!**/node_modules/**']
};
