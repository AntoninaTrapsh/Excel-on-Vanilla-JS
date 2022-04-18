module.exports = {
  'parser': '@babel/eslint-parser',
  'parserOptions': {
    babelOptions: {
      configFile: './babel.config.json',
    },
  },
  'env': {
    browser: true,
    node: true,
    es6: true,
  },
  'extends': ['eslint:recommended', 'google'],
  'rules': {
    'max-len': ['error', {'code': 80}],
    'comma-dangle': 0,
    'eol-last': ['error', 'never']
  },
};