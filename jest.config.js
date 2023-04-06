/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['/src/**', '!/dist', '!/node_modules'],
  coverageDirectory: '.coverage',
  coverageReporters: ['lcov', 'text', 'html'],
};
