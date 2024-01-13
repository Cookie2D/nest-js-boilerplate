module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "comma-dangle": ["warn", "always-multiline"],
    "curly": "error",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": true
      }
    ],
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "max-depth": ["error", 10],
    "max-len": [
      "error",
      {
        code: 120,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreComments: true,
        ignorePattern: "goog.(module|require)"
      }
    ],
    quotes: [
      "error",
      "single",
      {
        allowTemplateLiterals: true,
        avoidEscape: true
      }
    ],
    camelcase: [
      "error",
      {
        allow: ["^gmail_"],
        properties: "never",
        ignoreDestructuring: true,
        ignoreImports: false,
        ignoreGlobals: false
      }
    ],    
    'object-curly-spacing': [1, 'always'],
    'no-trailing-spaces': [1],
    '@typescript-eslint/no-unused-vars': [2],
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
