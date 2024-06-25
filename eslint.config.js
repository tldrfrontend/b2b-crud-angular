// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "max-lines-per-function": [
        "error",
        { max: 30, skipBlankLines: true, skipComments: true },
      ],
      "max-lines": ["error", { max: 400 }],
      "max-depth": ["error", { max: 2 }],
      "max-nested-callbacks": ["error", { max: 2 }],
      complexity: ["error", { max: 6 }],
      "no-magic-numbers": [
        "error",
        {
          detectObjects: false,
          ignoreClassFieldInitialValues: true,
          ignore: [0, 1, -1, 1000],
          ignoreDefaultValues: true,
        },
      ],
      "no-param-reassign": "error",
      "no-await-in-loop": "error",
      "no-duplicate-imports": "error",
      "no-template-curly-in-string": "error",
      "no-unreachable-loop": "error",
      "no-unmodified-loop-condition": "error",
      "no-unused-private-class-members": "error",
      camelcase: "error",
      curly: "error",
      "default-case-last": "error",
      "default-param-last": "error",
      "dot-notation": "error",
      "no-console": ["warn", { allow: ["error"] }],
      "no-empty-function": ["error", { allow: ["constructors"] }],
      "no-extra-bind": "error",
      "no-lonely-if": "error",
      "no-negated-condition": "error",
      "no-plusplus": "error",
      "no-return-assign": "error",
      "no-underscore-dangle": "error",
      "no-unneeded-ternary": "error",
      "no-var": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-destructuring": "error",
      "prefer-object-spread": "error",
      "prefer-spread": "error",
      "require-await": "error",
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
