module.exports = {
    'react-refresh/only-export-components': [
        'warn',
        {allowConstantExport: true},
    ],
    "react/jsx-indent": [2, 4],
    'react/function-component-definition': 'off',
    "react/react-in-jsx-scope": 'off',
    "react/jsx-filename-extension": [2, {"extensions": [".js", ".jsx", '.tsx']}],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/button-has-type": "off",
    "react/jsx-sort-props": [
        "warn",
        {
            "callbacksLast": true,
            "shorthandFirst": true,
            "noSortAlphabetically": false,
            "reservedFirst": true
        }
    ]
};
