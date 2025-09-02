import linktray from './assets/img/projects/linktray.png'
import flds from './assets/img/projects/flds.png'

import { FaLaravel, FaReact, FaPhp, FaHtml5, FaCss3, FaCloudflare, FaDigitalOcean, FaWordpress } from 'react-icons/fa'
import { RiTailwindCssFill, RiJavascriptFill } from 'react-icons/ri';
import { SiTypescript, SiMysql, SiVmware } from 'react-icons/si';
import { FcLinux } from 'react-icons/fc'; 

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
	technologies: ['Laravel', 'React', 'MaterialUI', 'DigitalOcean', 'Cloudflare', 'MySQL', 'Linux'],
	description: 'Simple web app for logging and tracking sensor data from IoT devices at fuel storage facilities',
	image: flds,
	repoUrl: 'https://github.com/comfortprince/fuel-leak-detector-2',
	liveUrl: 'https://flds.laravelprime.com/'
}];

const skills: Array<{ icon?: any, name: string }> = [
	{
		icon: <FaLaravel/>,
		name: 'Laravel',
	},
	{
		icon: <FaReact/>,
		name: 'React',
	},
	{
		icon: <RiTailwindCssFill/>,
		name: 'Tailwind CSS',
	},
	{
		icon: <RiJavascriptFill/>,
		name: 'JavaScript',
	},
	{
		icon: <SiTypescript size={14}/>,
		name: 'Typescript',
	},
	{
		icon: <FaPhp size={24}/>,
		name: 'PHP',
	},
	{
		icon: <SiMysql size={24}/>,
		name: 'MySQL',
	},
	{
		icon: <FaHtml5/>,
		name: 'HTML',
	},
	{
		icon: <FaCss3/>,
		name: 'CSS',
	},
	{
		icon: <FaCloudflare/>,
		name: 'Cloudflare DNS',
	},
	{
		icon: <FaDigitalOcean/>,
		name: 'Digital Ocean',
	},
	{
		icon: <FcLinux/>,
		name: 'Linux (Ubuntu & Kali)',
	},
	{
		icon: <SiVmware size={24}/>,
		name: 'VMware',
	},
	{
		icon: <FaWordpress size={24}/>,
		name: 'WordPress',
	},
];

export { projects, skills };