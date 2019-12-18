/* eslint-disable */
module.exports = {
	root: true,
	env: { node: true }, 
  	'extends': ['plugin:vue/essential', '@vue/airbnb'],
  	rules: {
		'array-bracket-spacing': 'off',
		'array-callback-return': 'off',
		'arrow-parens': ['error', 'as-needed'],
		'brace-style': ['error', 'stroustrup'],
		'class-methods-use-this': 'off',
		'comma-dangle': ['error', 'never'],
		'consistent-return': 'off',
		'func-names': ['error', 'as-needed'],
		'function-paren-newline': 'off',
		'global-require': 'off',
		'import/no-dynamic-require': 'off',
		'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
		'import/prefer-default-export': 'off',
		'import/no-cycle': 'off',
		'indent': 'off',
		'key-spacing': ['error', { 'align': { 'on': 'colon', 'beforeColon': true, 'afterColon': true } }],
    	'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['error'] }] : 'off',
    	'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-multi-spaces': 'off',
		'no-param-reassign': ['error', { 'props': false }],
		'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
		'no-return-assign': 'error',
		'no-shadow': 'off',
		'no-tabs': 0,
		'no-trailing-spaces': 'off',
		'no-underscore-dangle': 'error',
		'no-unused-expressions': 'off',
		'no-unused-vars': ['error', {'args': 'after-used'}],
		'no-use-before-define': ['error', { 'functions': false }],
		'no-useless-escape': 'off',
		'object-curly-newline': 'off',
		'object-curly-spacing': ['error', 'always'],
		'object-shorthand': ['error', 'always', { 'avoidQuotes': true }],
		'prefer-const': ['error', { 'destructuring': 'all' }],
		'prefer-destructuring': ['error', {'object': true, 'array': false}],
		'template-curly-spacing': ['error', 'always'],
		'vue/no-side-effects-in-computed-properties': 'error'
  	},
  	parserOptions: { parser: 'babel-eslint' }
}
