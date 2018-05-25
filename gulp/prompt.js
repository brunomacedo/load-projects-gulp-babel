import obj from '../paths.json';
import './functions';

const newObj = {};
const promptProjects = () => {
	const args = {};
	args.name = process.argv[3];
	let getCurrent;
	for (const el in obj) {
		if (obj[el].name === args.name) {
			newObj.name = obj[el].name;
			newObj.html = obj[el].folders.html.trainlingSlash();
			newObj.assets = obj[el].folders.assets.trainlingSlash();
		}
	}
};

export { promptProjects, newObj };
