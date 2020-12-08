module.exports = {
  verbose: true,
  clearMocks: true,
  moduleDirectories: ['node_modules', 'src'],
  collectCoverage: true,
  setupFilesAfterEnv: ['./test/setup.js'],
  snapshotSerializers: ['./node_modules/enzyme-to-json/serializer'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(css|scss|less)$': 'jest-css-modules',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      './__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  globals: {
    NODE_ENV: 'test',
  },
  moduleFileExtensions: ['js', 'jsx'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
}
