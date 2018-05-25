const { error, warning, good } = require('./logs');
const obj = require('../paths.json');
require('./functions');

const promptProjects = () => {
	const args = {};
	args.name = process.argv[3];
	let getCurrent;
	for (const el in obj) {
		if (obj[el].name === args.name) {
			getCurrent = obj[el].folders.assets;
		}
	}
	console.log(warning('Assets: ', error(getCurrent)));
};

module.exports = promptProjects;
