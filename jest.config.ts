import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/jest-setup.ts',
    '<rootDir>/src/__mocks__/mocks.ts',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+\\.(svg)$': '<rootDir>/src/__mocks__/svg.ts',
  },
  transform: {
    '^.+\\.(svg)$': 'jest-transformer-svg',
  },
};

export default createJestConfig(config);
