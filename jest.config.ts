import type {Config} from '@jest/types';
const {defaults} = require('jest-config');

// const config: Config.InitialOptions = {
//     // bail: 1,
//     clearMocks: true,
//     moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
//     preset: "ts-jest",
//     testEnvironment: 'node',
//     testMatch: ['**/test.ts'],
//     testRunner: 'jest-circus/runner',
//     // transform: {
//     //   '^.+\\.ts$': 'ts-jest'
//     // },
//     verbose: true,
//     watchman: false,
// };
// export default config;

// Or async function
export default async (): Promise<Config.InitialOptions> => {
  return {
    bail: true,
    clearMocks: true,
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    preset: "ts-jest",
    testEnvironment: 'node',
    testMatch: ['**/*test.ts'],
    testRunner: 'jest-circus/runner',
    transform: {
      '^.+\\.ts$': 'ts-jest'
    },
    verbose: true,
  };
};
