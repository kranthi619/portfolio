module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks', // Ensures hooks rules are included
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks', // Includes rules for React Hooks
  ],
  rules: {
    'prefer-template': 'off', // Use 'off' for consistency with Airbnb's format
    'react/no-children-prop': 'off',
    'linebreak-style': 'off', // Commonly used in cross-platform projects
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // Allows JSX in both .js and .jsx files
    'react/prop-types': 'off', // Disable prop-types rule if you use TypeScript or prefer to use other type checking methods
    'no-console': 'warn', // Warns about console statements, helpful in production code
  },
};
