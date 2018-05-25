import { error, warning, good } from './logs';
import obj from '../paths.json';
import './functions';

const promptProjects = () => {
	const args = {};
	args.name = process.argv[3];
	let getCurrent;
	for (const el in obj) {
		if (obj[el].name === args.name) {
			getCurrent = obj[el].folders.assets;
		}
	}
	console.log(warning('Assets: ', error(getCurrent.trainlingSlash())));
};

export default promptProjects;
