import linktray from './assets/img/projects/linktray.png'
import flds from './assets/img/projects/flds.png'

const projects: Array<{ 
	title: string,
	technologies: string[],
	description: string,
	image: string,
	repoUrl: string,
	liveUrl: string
}> = [{
	title: 'Linktray',
	technologies: ['Laravel', 'React', 'Shadcn'],
	description: 'Simple web app for creating and sharing lists of links',
	image: linktray,
	repoUrl: 'https://github.com/laravelprime/linktray',
	liveUrl: 'https://linktray.laravelprime.com/'
},{
	title: 'FLDS',
	technologies: ['Laravel', 'React', 'Shadcn', 'Tailwind CSS'],
	description: 'Simple web app for creating and sharing lists of links',
	image: flds,
	repoUrl: 'https://github.com/laravelprime/linktray',
	liveUrl: 'https://flds.laravelprime.com/'
}];

const skills: Array<{ name: string }> = [{
	name: 'Laravel',
}, {
	name: 'React',
}, {
	name: 'Tailwind CSS',
}, {
	name: 'JavaScript',
}, {
	name: 'PHP',
}, {
	name: 'MySQL',
}, {
	name: 'HTML',
}, {
	name: 'CSS',
}];

export { projects, skills };