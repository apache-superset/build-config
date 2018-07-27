const fs = require('fs');
const path = require('path');
const { EXTS, EXT_PATTERN } = require('./constants');

// package: run in root
// workspaces: run in root
module.exports = function jest(args, tool) {
  const workspacesEnabled = !!tool.package.workspaces;
  const setupFiles = [];
  const roots = [];
  const testRoot = args['test-dir'] || 'test';

  if (workspacesEnabled) {
    roots.push('<rootDir>/packages');
  } else {
    roots.push('<rootDir>/src', `<rootDir>/${testRoot}`);
  }

  const setupFilePath = path.join(process.cwd(), args.setup || `./${testRoot}/setup.js`);
  if (fs.existsSync(setupFilePath)) {
    setupFiles.push(setupFilePath);
  }
  if (args.react) {
    setupFiles.push(path.join(__dirname, './jest/enzyme.js'));
  }

  return {
    coverageDirectory: './coverage',
    coveragePathIgnorePatterns: ['/node_modules/', '/esm/', '/lib/', '/build/'],
    coverageReporters: ['lcov'],
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
      [`${workspacesEnabled ? './packages/*/' : './'}src/**/*.${EXT_PATTERN}`]: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
    globals: {
      __DEV__: true,
    },
    moduleFileExtensions: EXTS.map(ext => ext.slice(1)), // no period
    roots,
    setupFiles,
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testMatch: [`**/?(*.)+(spec|test).${EXT_PATTERN}`],
    testURL: 'http://localhost/', // see stackoverflow.com/questions/51554366/npm-test-fail-with-jest#51554619
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    verbose: !!args.verbose,
  };
};
