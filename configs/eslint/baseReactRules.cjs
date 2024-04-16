module.exports = {
  "react-refresh/only-export-components": [
    "warn",
    { allowConstantExport: true },
  ],
  "react/jsx-indent": [2, 2],
  "react/function-component-definition": "off",
  "react/react-in-jsx-scope": "off",
  "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".tsx"] }],
  "react/jsx-props-no-spreading": "off",
  "react/prop-types": "off",
  "react/require-default-props": "off",
  "react/button-has-type": "off",
  "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
  "react-hooks/exhaustive-deps": "error", // Checks effect dependencies
  "react/jsx-sort-props": [
    "warn",
    {
      callbacksLast: true,
      shorthandFirst: true,
      noSortAlphabetically: false,
      reservedFirst: true,
    },
  ],
};
