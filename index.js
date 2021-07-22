// eslint-disable-next-line import/no-commonjs
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: '@muhmdraouf/eslint-config-react',
  plugins: ['react-native'],
  env: { 'react-native/react-native': true },
  settings: { 'import/ignore': ['node_modules/react-native/index\\.js$'] },
  rules: {
    // react-native
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': [
      'error',
      {
        androidPathRegex: '\\.android.(ts|tsx|js|jsx)$',
        iosPathRegex: '\\.ios.(ts|tsx|js|jsx)$',
      },
    ],
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'error',
    'react-native/no-raw-text': 'error',
    'react-native/no-single-element-style-arrays': 'error',
  },
};
