module.exports = {
  "extends": [
  "plugin:@typescript-eslint/recommended",
  "prettier",
  "plugin:prettier/recommended",
],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "prettier"],
  "rules": {
  "prettier/prettier": "warn"
},
  "overrides": [
  {
    "files": ["src/**/*.ts"],
    "parserOptions": {
      "project": ["./tsconfig.json"]
    }
  }
]
}
