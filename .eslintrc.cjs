module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "2020", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-hooks"],
  rules: {
    "react-refresh/only-export-components": [
      { allowConstantExport: true },
    ],
    "jsx-quotes": ["error", "prefer-double"]
  },
}
