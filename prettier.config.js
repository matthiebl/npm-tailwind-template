/** @type {import("prettier").Config} */
const config = {
  singleQuote: true,
  jsxSingleQuote: true,
  semi: false,
  arrowParens: 'avoid',
  printWidth: 100,
  tabWidth: 2,
  trailingComma: 'all',
  plugins: ['prettier-plugin-tailwindcss'],
}

module.exports = config
