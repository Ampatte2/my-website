module.exports = {
  "plugins": {
    'postcss-import': {},
    'postcss-css-variables': {},
    "postcss-flexbugs-fixes": {},
    "postcss-custom-properties": {},
    "@csstools/postcss-global-data": {
      files: ["styles/globals.css"]
    },
    "tailwindcss": {},
    'tailwindcss/nesting': 'postcss-nesting',
  }
};
