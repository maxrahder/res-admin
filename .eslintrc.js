module.exports = {
    globals: {
        Ext: false,
        Admin: false,
        setImmediate: false,
        clearImmediate: false
    },
    env: {
        browser: true,
        es6: false
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 5
    },
    rules: {
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                ArrayExpression: 'first',
                ObjectExpression: 'first',
                MemberExpression: 'off',
                FunctionDeclaration: {
                    parameters: 'first',
                    body: 1
                },
                CallExpression: {
                    arguments: 'first'
                },
                outerIIFEBody: 0,
                ignoreComments: false,
                flatTernaryExpressions: true,
                VariableDeclarator: 1
            }
        ],
        'id-blacklist': [
            'error',
            'abstract',
            'await',
            'byte',
            'char',
            'class',
            'const',
            'double',
            'enum',
            'export',
            'extends',
            'final',
            'float',
            'implements',
            'import',
            'int',
            'interface',
            'long',
            'native',
            'package',
            'private',
            'protected',
            'public',
            'short',
            'static',
            'super',
            'synchronized',
            'throws',
            'transient',
            'volatile'
        ],
        'no-floating-decimal': 'error',
        semi: ['error', 'always'],
        'no-console': 0,
        'no-debugger': 0,
        curly: ['error'],
        'nonblock-statement-body-position': ['error', 'below'],
        'space-before-blocks': [
            'error',
            {
                functions: 'always',
                keywords: 'always',
                classes: 'always'
            }
        ],
        'space-infix-ops': ['error'],
        'block-spacing': ['error', 'always'],
        'semi-spacing': ['error', { before: false, after: true }],
        'no-whitespace-before-property': ['error'],
        'keyword-spacing': ['error', { before: true, after: true }],
        'space-before-function-paren': ['error', 'never'],
        'func-call-spacing': ['error', 'never'],
        'space-in-parens': ['error', 'never'],
        'no-multi-spaces': ['error', { ignoreEOLComments: true }],
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
        'brace-style': ['error', 'stroustrup'],
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ['error', { after: true }],
        'dot-notation': ['error', { allowKeywords: true }],
        'dot-location': ['error', 'property'],
        'multiline-ternary': ['error', 'always-multiline'],
        'operator-linebreak': [
            'error',
            'after',
            {
                overrides: {
                    '?': 'before',
                    ':': 'before'
                }
            }
        ],
        eqeqeq: ['error', 'always', { null: 'ignore' }],
        'no-trailing-spaces': [
            'error',
            {
                ignoreComments: true
            }
        ],
        'spaced-comment': [
            'error',
            'always',
            {
                line: {
                    exceptions: [
                        '<debug>',
                        '</debug>',
                        '<example>',
                        '</example>',
                        '<legacyBrowser>',
                        '</legacyBrowser>',
                        '<feature logger>',
                        '<feature classSystem.alias>',
                        '<feature classSystem.singleton>',
                        '<feature classSystem.alternateClassName>',
                        '<feature classSystem.statics>',
                        '<feature classSystem.inheritableStatics>',
                        '<feature classSystem.config>',
                        '<feature classSystem.cachedConfig>',
                        '<feature classSystem.mixins>',
                        '<feature classSystem.backwardsCompatible>',
                        '<feature classSystem.platformConfig>',
                        '<feature classSystem.loader>',
                        '<feature legacyBrowser>',
                        '</feature>',
                        '<if nonBrowser>',
                        '<if legacyBrowser>',
                        '</if legacyBrowser>',
                        '</if>',
                        '<deprecated since=5.0>',
                        '</deprecated>',
                        '<locale>',
                        '<locale type="object" property="parseCodes">',
                        '</locale>',
                        '<deprecated since=0.99>',
                        '</deprecated>',
                        '-',
                        '='
                    ]
                },
                block: {
                    balanced: true
                }
            }
        ],
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],
        'computed-property-spacing': ['error', 'never'],
        'eol-last': ['error', 'always'],
        'object-curly-spacing': ['error', 'always'],
        'vars-on-top': ['error'],
        'no-extra-boolean-cast': 'off',
        'no-unused-expressions': ['error'],
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'none',
                ignoreRestSiblings: false
            }
        ],
        'one-var': ['error', 'consecutive'],
        'one-var-declaration-per-line': ['error', 'initializations'],
        // "valid-jsdoc": ["error", {
        //     "requireReturn": false
        // }],
        'max-len': [
            'error',
            {
                code: 100,
                ignoreComments: false,
                ignoreStrings: false,
                ignoreRegExpLiterals: true,
                ignoreUrls: true
            }
        ],
        'comma-style': [
            'error',
            'last',
            {
                exceptions: {
                    ArrayExpression: false,
                    CallExpression: false,
                    FunctionDeclaration: false,
                    FunctionExpression: false,
                    ObjectExpression: false,
                    VariableDeclaration: false,
                    NewExpression: false
                }
            }
        ],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'case' },
            { blankLine: 'any', prev: 'case', next: 'case' },
            { blankLine: 'always', prev: 'break', next: 'case' },
            { blankLine: 'always', prev: 'break', next: 'default' },
            { blankLine: 'always', prev: 'var', next: '*' },
            { blankLine: 'always', prev: '*', next: 'block-like' },
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: 'block-like', next: 'block-like' },
            { blankLine: 'always', prev: 'block-like', next: 'return' },
            { blankLine: 'always', prev: 'block-like', next: 'break' },
            { blankLine: 'always', prev: 'block-like', next: 'expression' }
        ]
    },
    overrides: [
        {
            files: ['packages/pivot-locale/**/overrides/**/*.js'],
            rules: {
                'key-spacing': 'off'
            }
        },
        {
            files: ['ext/classic/locale/overrides/**/*.js'],
            rules: {
                'max-len': 'off',
                'no-useless-escape': 'off'
            }
        },
        {
            files: [
                // Not only test/specs; some packages have other relevant directories
                '**/test/**/*.js'
            ],
            env: {
                jasmine: true,
                node: true
            },
            globals: {
                topSuite: false,
                xtopSuite: false,
                wait: false,
                waitForSpy: false,
                waitsForSpy: false,
                waitForSpyCalled: false,
                spyOnEvent: false,
                focusAndWait: false,
                focusAndExpect: false,
                expectFocused: false,
                pressKey: false,
                pressTabKey: false,
                simulateTabKey: false,
                waitAWhile: false,
                waitForEvent: false,
                waitsForEvent: false,
                waitForFocus: false,
                waitsForFocus: false,
                waitForAnimation: false,
                waitsForAnimation: false,
                fireTabAndWait: false,
                waitFor: false,
                MockAjax: true,
                MockAjaxManager: true,
                spec: true,
                specFor: false
            },
            rules: {
                indent: 'off',
                'vars-on-top': 'off',
                'one-var': 'off',
                'no-unused-vars': 'off',
                'no-useless-escape': 'off',
                'max-len': 'off',
                'no-multi-spaces': 'off',
                'no-empty': 'off',
                'newline-per-chained-call': 'off',
                'dot-notation': 'off',
                'brace-style': ['error', 'stroustrup', { allowSingleLine: true }]
            }
        }
    ]
};
