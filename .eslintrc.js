module.exports = {
    rules: {
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 1,
                multiline: {
                    max: 3,
                    allowFirstLine: true,
                },
            },
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        'vue/no-mutating-props': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 1,
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'vue/no-unused-components': 'warn',
        'guard-for-in': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'ecmaVersion': 6
    },
    plugins: [
        'markdown'
    ]
};
