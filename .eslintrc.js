module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-underscore-dangle': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    'max-len': 'off',
  },
};
