module.exports = {
    'import/order': [
        'error',
        {
            groups: [
                'external',
                'internal',
                ['sibling', 'parent'],
                ['object', 'builtin'],
                'type',
                'unknown',
                'index',
            ],
            distinctGroup: false,
            pathGroups: [
                {
                    pattern: 'react',
                    group: 'external',
                    position: 'before',
                },
                {
                    pattern: '@app/*',
                    group: 'internal',
                    position: 'before',
                },
                {
                    pattern: '@pages/*',
                    group: 'internal',
                    position: 'before',
                },
                {
                    pattern: '@widgets/*',
                    group: 'internal',
                    position: 'before',
                },
                {
                    pattern: '@features/*',
                    group: 'internal',
                    position: 'before',
                },
                {
                    pattern: '@entities/*',
                    group: 'internal',
                    position: 'before',
                },
                {
                    pattern: '@shared/*',
                    group: 'internal',
                    position: 'before',
                },
                {
                    pattern: './styles.scss',
                    group: 'index',
                    patternOptions: { matchBase: true },
                    position: 'after',
                },
                {
                    pattern: '*.scss',
                    group: 'index',
                    patternOptions: { matchBase: true },
                    position: 'before',
                },
            ],
            pathGroupsExcludedImportTypes: [],
            alphabetize: {
                order: 'asc',
                caseInsensitive: true,
            },
            'newlines-between': 'always',
            warnOnUnassignedImports: true,
        },
    ],
    'import/extensions': [
        'error',
        'ignorePackages',
        {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
        },
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
};
