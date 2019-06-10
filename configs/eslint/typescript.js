const extensions = [".ts", ".tsx", ".js", ".jsx", ".json"];

module.exports = {
  settings: {
    "import/extensions": extensions,
    "import/resolver": {
      node: {
        extensions
      }
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    }
  },

  overrides: [
    {
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      files: ["*.{ts,tsx}"],
      rules: {
        "no-restricted-globals": "off",
        "no-undef": "off",
        "no-unused-vars": "warn", // Temp (false positives: https://github.com/nzakas/eslint-plugin-typescript/issues/90)

        // IMPORT
        "import/extensions": [
          "error",
          "never",
          {
            json: "always"
          }
        ],
        "import/named": "off",
        "import/no-cycle": "off",
        "import/no-named-as-default": "off",

        // REACT
        "react/destructuring-assignment": "off",
        "react/jsx-filename-extension": [
          "error",
          { extensions: [".tsx", ".jsx"] }
        ],
        "react/no-unused-prop-types": "off",
        "react/prefer-stateless-function": "off",
        "react/prop-types": "off",

        // TYPESCRIPT
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/member-delimiter-style": "error",
        "@typescript-eslint/member-ordering": "off", // Prefer react/sort-comp
        "@typescript-eslint/no-angle-bracket-type-assertion": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-array-constructor": "error",
        "@typescript-eslint/no-triple-slash-reference": "error",
        "@typescript-eslint/no-parameter-properties": "error",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/type-annotation-spacing": "error"
      }
    }
  ]
};
