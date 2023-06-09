module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  extends: ["react-app", "prettier"],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "array-bracket-spacing": [2, "never"],
    "arrow-parens": [2, "always"],
    "arrow-spacing": [2],
    "block-spacing": [2, "always"],
    "brace-style": [2, "1tbs", { allowSingleLine: true }],
    camelcase: [0, { properties: "always" }],
    "comma-dangle": [2, "always-multiline"],
    "comma-spacing": [2, { before: false, after: true }],
    "comma-style": [2, "last"],
    "computed-property-spacing": [2, "never"],
    "dot-location": [2, "property"],
    "eol-last": [2, "always"],
    eqeqeq: [2, "smart"],
    "func-call-spacing": 2,
    indent: [2, 2, { SwitchCase: 1 }],
    "key-spacing": [2, { beforeColon: false, afterColon: true }],
    "keyword-spacing": [2, { before: true, after: true }],
    "max-len": [
      0,
      {
        code: 100,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "no-array-constructor": 2,
    "no-cond-assign": 2,
    // "no-console": "warn",
    "no-const-assign": 2,
    "no-constant-condition": 2,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-duplicate-imports": [2, { includeExports: false }],
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-boolean-cast": ["error", { enforceForLogicalOperands: true }],
    "no-else-return": 2,
    "no-floating-decimal": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-lonely-if": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multi-spaces": 2,
    "no-multiple-empty-lines": [2, { max: 3 }],
    "no-nested-ternary": 2,
    "no-new-wrappers": 2,
    "no-param-reassign": 2,
    "no-proto": 2,
    "no-return-assign": 2,
    "no-throw-literal": 2,
    "no-trailing-spaces": 2,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-unneeded-ternary": 2,
    "no-unused-expressions": 2,
    "no-unused-vars": [0, { vars: "all", args: "after-used" }],
    "@typescript-eslint/no-unused-vars": "warn",
    "no-var": 2,
    "no-void": 2,
    "no-whitespace-before-property": 2,
    "object-curly-spacing": [2, "always", { objectsInObjects: false }],
    "object-shorthand": [2, "always"],
    "operator-assignment": [2, "always"],
    "operator-linebreak": [2, "after", { overrides: { "?": "before", ":": "before" } }],
    "prefer-const": 2,
    "quote-props": [2, "as-needed"],
    quotes: [2, "double", { avoidEscape: true }],
    "rest-spread-spacing": [2, "never"],
    semi: [2, "always"],
    "semi-spacing": [2, { before: false, after: true }],
    "sort-imports": [2, { ignoreDeclarationSort: true, allowSeparatedGroups: true }],
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [
      2,
      { anonymous: "always", named: "never", asyncArrow: "always" },
    ],
    "space-in-parens": [2, "never"],
    "space-infix-ops": [2, { int32Hint: false }],
    "space-unary-ops": [2, { words: true, nonwords: false }],
    "spaced-comment": [2, "always"],
    strict: [2, "never"],
    "switch-colon-spacing": 2,
    "template-curly-spacing": [2, "never"],
    "template-tag-spacing": 2,
    "wrap-iife": [2, "inside"],
    yoda: [2, "never", { exceptRange: true }],
    "jsx-a11y/anchor-is-valid": 0,
    "react-hooks/exhaustive-deps": 0,
    "react/jsx-uses-react": 0,
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
  },
};
