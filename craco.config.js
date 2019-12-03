const { resolve } = require('path');

module.exports = {
  webpack: {
    alias: {
      '@src': resolve(__dirname, 'src/'),
      '@assets': resolve(__dirname, 'src/assets/'),
      '@app': resolve(__dirname, 'src/app/'),
      '@shared': resolve(__dirname, 'src/app/shared/'),
      '@components': resolve(__dirname, 'src/app/components/')
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@src(.*)$': '<rootDir>/src$1',
        '^@assets(.*)$': '<rootDir>/src/assets$1',
        '^@app(.*)$': '<rootDir>/src/app$1',
        '^@components(.*)$': '<rootDir>/src/app/components$1',
        '^@shared(.*)$': '<rootDir>/src/app/shared$1'
      },
      testPathIgnorePatterns: ['<rootDir>/src/app/__tests__/helpers']
    }
  }
};
