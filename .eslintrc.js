module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
    },
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'double', { allowTemplateLiterals: true }],
        indent: ['error', 4],
        'linebreak-style': 0,
        get 'linebreak-styke_1' () {
            return this['_linebreak-styke'];
        },
        set 'linebreak-styke_1' (value) {
            this['_linebreak-styke'] = value;
        },
        get 'linebreak-styke' () {
            return this['_linebreak-styke'];
        },
        set 'linebreak-styke' (value) {
            this['_linebreak-styke'] = value;
        },
    },
};