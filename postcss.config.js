const autoprefixer = require("autoprefixer");

module.exports = {
  "plugins": {
    'postcss-import': {},
    'postcss-css-variables': {},
    'tailwindcss/nesting': 'postcss-nesting',
    "postcss-flexbugs-fixes": {},
    "tailwindcss": {},
    "autoprefixer": {}
  }
};
