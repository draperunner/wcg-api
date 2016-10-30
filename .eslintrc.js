module.exports = {
    "extends": "airbnb-base",
    "plugins": [
      "import"
    ],
    "parserOptions": {
      "sourceType": "module"
    },
    "env": {
      "es6": true,
      "node": true
    },
    "rules": {
      "import/prefer-default-export": "off"
    }
};
