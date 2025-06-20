import logo from './assets/img/laravelprime-logo.png'
import frontendMentorIcon from './assets/icons/frontendmentor.svg'
import githubIcon from './assets/icons/github.svg'
import xIcon from './assets/icons/x.svg'

import linktray from './assets/img/projects/linktray.png'
import flds from './assets/img/projects/flds.png'

function App() {
	return (
		<>
			<header className='px-2 sm:px-4 lg:px-40 xl:px-60 py-2 sm:py-4 absolute top-0 left-0 w-full'>
				<div className='flex items-center justify-between bg-[#0C141B] border border-[#4C545B] p-2 sm:p-4 rounded-full'>
					<img src={logo} alt="Logo" className='w-36 sm:w-48 md:w-52'/>
					<ul className='flex items-center space-x-8 max-sm:hidden'>
						<li className='text-lg font-semibold text-[#EFF1F7]'>
							Home
						</li>
						<li className='text-lg font-semibold text-[#EFF1F7]'>
							Projects
						</li>
						<li className='text-lg font-semibold text-[#EFF1F7]'>
							About
						</li>
					</ul>
					<a 
						href="mailto:admin@laravelprime.com"
						className='sm:text-lg font-semibold text-[#FFFFF4] bg-[#F8770E] px-4 py-2 rounded-full'
					>
						Contact
					</a>
				</div>
			</header>
			<main>
				<div className='flex items-center justify-center h-screen bg-[#01090F]'>
					<Hero/>
				</div>
				<div className='bg-[#001122] px-4 md:px-16 py-6'>
					<Skills/>
				</div>
				<div className='bg-[#162B42] px-4 md:px-16 py-6'>
					<Projects/>
				</div>
				<div className='bg-[#01090F] px-4 md:px-16 py-6'>
					<About/>
				</div>
			</main>
			<footer className='bg-[#162B42] px-4 md:px-16'>
				<Footer />
			</footer>
		</>
	)
}

export default App


function Hero() {
	return (
		<div className='flex flex-col items-center justify-center space-y-4 text-center'>
			<p className='text-lg text-[#DADCDE] border border-[#DADCDE] px-4 py-2 rounded-full'>
				WEB DEVELOPER
			</p>
			<h1 className='text-4xl md:text-6xl font-bold text-[#DADCDE] py-2'>
				Welcome to Laravel Prime
			</h1>
			<p className='text-[#DADCDE] md:text-lg px-2'>
				Hi, I'm Prince, a web developer specializing in Laravel and React. 
				<br className='hidden md:inline' /> 
				I create beautiful and functional web applications.
			</p>
			<a 
				href="mailto:admin@laravelprime.com"
				className='sm:text-lg font-semibold text-[#FFFFF4] bg-[#F8770E] px-4 py-2 rounded-full'
			>
				Reach Out via Email
			</a>
		</div>
	)
}

function Skills() {
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

	return (
		<div className='my-8'>
			<p className='text-sm md:text-base text-[#B0B5BD] text-center mb-1'>
				STACKS
			</p>
			<h2 className='text-[#F8FAFB] text-center text-xl md:text-2xl font-bold mb-8'>
				Technologies I've worked with
			</h2>
			<ul className='flex flex-wrap gap-4 justify-center'>
				{skills.map((skill, index) => (
					<li 
						key={index} 
						className='md:text-lg border border-[#5D6D7C] rounded-lg px-4 py-2 text-[#F5FEFF]'
					>
						{skill.name}
					</li>
				))}
			</ul>
		</div>
	)
}

// React landing page projects component
function Projects() {
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
	
	return (
		<div className='my-8'>
			<p className='text-sm md:text-base text-[#B0B5BD] text-center mb-1'>
				PROJECTS
			</p>
			<h2 className='text-[#F8FAFB] text-center text-xl md:text-2xl font-bold mb-8'>
				Check Out Some Of My Work
			</h2>
			<ul className='flex flex-col space-y-8'>
				{projects.map(project => (
					<li 
						key={project.title}
						className='flex flex-col space-y-10 md:flex-row md:space-x-8 h-[30rem] md:h-80 rounded-2xl bg-[#001122] p-8'
					>
						<div className='md:w-[35%] md:h-full rounded-xl overflow-hidden'>
							<img 
								src={project.image} 
								alt={`${project.title} image`} 
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='md:w-[65%] md:h-full flex flex-col space-y-4 justify-center'>
							<h3 className='text-[#F8FAFB] text-xl md:text-2xl font-bold'>
								{project.title}
							</h3>
							<div className='flex flex-wrap justify-center gap-2'>
								{project.technologies.map(tech => (
									<span
										key={tech} 
										className='bg-[#162B42] text-[#F9FFFF] rounded-full px-4 py-1'
									>
										{tech}
									</span>
								))}
							</div>
							<p className='text-[#F9FFFF]'>
								{project.description}
							</p>
							<div className='flex flex-col md:flex-row md:space-x-2'>
								<a 
									href={project.repoUrl}
									className='border border-[#F9FFFF] text-[#F9FFFF] rounded-full px-4 py-2'
								>
									Github Repository
								</a>
								<a 
									href={project.liveUrl}
									className='text-[#F9FFFF] px-4 py-2'
								>
									Live Site
								</a>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

function About() {
	const profiles: Array<{name: string, url: string, icon: string}> = [
		{
			'name': 'Frontend Mentor',
			'url': 'https://www.frontendmentor.io/profile/comfortprince',
			'icon': frontendMentorIcon
		}, {
			'name': 'Old GitHub Profile',
			'url': 'https://github.com/comfortprince',
			'icon' : githubIcon
		}, {
			'name': 'New GitHub Profile',
			'url': 'https://github.com/laravelprime',
			'icon' : githubIcon
		}, {
			'name': 'LinkedIn',
			'url': 'https://www.linkedin.com/in/comfort-prince/',
			'icon': 'https://cdn-icons-png.flaticon.com/512/174/174857.png'
		},
		{
			'name': 'Twitter',
			'url': 'https://x.com/laravelprime',
			'icon': xIcon
		}
	]

	return (
		<div className='flex flex-col max-md:space-y-4 space-x-4 md:flex-row'>
			<div className='bg-[#001122] text-[#FAFFFF] border border-[#21343E] rounded-2xl p-8 md:w-[40%]'>
				Hi 👋. I'm <br />
				<div className='text-3xl fontbold mt-1 mb-3'>
					Prince
				</div>
				a web developer with a passion for building beautiful and functional web applications. I specialize in Laravel and React, and I love creating user-friendly interfaces with Tailwind CSS.
			</div>
			<div className='grid grid-cols-2 gap-4 md:w-[60%]'>
				{profiles.map(profile => (
					<a 
						href={profile.url} 
						key={profile.name}
						target='_blank'
						className='flex justify-center items-center space-x-2 p-2 rounded-2xl bg-[#001122] text-[#FAFFFF] text-sm border border-[#21343E]'
					>
						<img src={profile.icon} alt={`${profile.name} icon`} className='w-6 h-6' />
						<span>{profile.name}</span>
					</a>
				))}
			</div>
		</div>
	)
}

function Footer() {
	// contact link email, linkedin and twitter links
	// const contactLinks = [
	// 	{
	// 		'name': 'Email',
	// 		'url': 'mailto:admin@laravelprime.com',
	// 		'icon': 'https://cdn-icons-png.flaticon.com/512/732/732200.png'
	// 	},
	// 	{
	// 		'name': 'LinkedIn',
	// 		'url': 'https://www.linkedin.com/in/comfort-prince/',
	// 		'icon': 'https://cdn-icons-png.flaticon.com/512/174/174857.png'
	// 	},
	// 	{
	// 		'name': 'Twitter',
	// 		'url': 'https://x.com/laravelprime',
	// 		'icon': xIcon
	// 	}
	// ]

	return (
		<>
			<div className='flex items-center justify-center py-2 text-sm'>
				<p className='text-gray-500'>© 2023 Laravel Prime. All rights reserved.</p>
			</div>
		</>
	)
}