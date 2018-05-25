module.exports = {
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module"
	},
	rules: {
		'array-bracket-spacing': ['error', 'never'],
		camelcase: ['error'],
		'comma-dangle': ['error', 'never'],
		'comma-spacing': ['error', { before: false, after: true }],
		eqeqeq: 'error',
		indent: ['error', 'tab'],
		'lines-around-comment': ['error', { beforeBlockComment: true }],
		'multiline-comment-style': ['error', 'starred-block'],
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': 'error',
		'no-empty-character-class': 'error',
		'no-empty': 'error',
		'no-irregular-whitespace': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
		'no-redeclare': 'error',
		'no-regex-spaces': 'error',
		'no-sparse-arrays': 'error',
		'no-trailing-spaces': ['error', { skipBlankLines: false, ignoreComments: false }],
		'quote-props': ['error', 'as-needed'],
		quotes: ['error', 'single', { allowTemplateLiterals: true }],
		semi: ['error', 'always'],
		'spaced-comment': ['error', 'always', { line: { exceptions: ['-', '+'], markers: ['=', '!'] }, block: { exceptions: ['-', '+'], markers: ['=', '!'], balanced: true } }],
	},
};
