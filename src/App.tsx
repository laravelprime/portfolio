import logo from './assets/img/laravelprime-logo.png'
import { SiFrontendmentor } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { BsLightningCharge, BsTwitterX } from 'react-icons/bs';
import { projects, skills } from './cms.tsx';

import { BiPhoneCall } from 'react-icons/bi';

console.log(projects, skills);

function App() {
	return (
		<>
			<header id="home" className='px-2 sm:px-4 lg:px-40 xl:px-60 py-2 sm:py-4 absolute top-0 left-0 w-full'>
				<div className='flex items-center justify-between bg-[#0C141B] border border-[#4C545B] p-2 sm:p-4 rounded-full'>
					<img src={logo} alt="Logo" className='w-36 sm:w-48 md:w-52'/>
					<ul className='flex items-center space-x-8 max-sm:hidden'>
						<li className='text-lg font-semibold text-[#EFF1F7]'>
							<a href="#home">Home</a>
						</li>
						<li className='text-lg font-semibold text-[#EFF1F7]'>
							<a href="#skills">Skills</a>
						</li>
						<li className='text-lg font-semibold text-[#EFF1F7]'>
							<a href="#projects">Projects</a>
						</li>
						<li className='text-lg font-semibold text-[#EFF1F7]'>
							<a href="#about"> About</a>
						</li>
					</ul>
					<a 
						href="#about"
						className='sm:text-lg font-semibold text-[#FFFFF4] bg-[#F8770E] px-4 py-2 rounded-full inline-flex items-center gap-2'
					>
						<BiPhoneCall/> Contact Me
					</a>
				</div>
			</header>
			<main>
				<div className='flex items-center justify-center pt-20 pb-10 md:pt-32 md:pb-16 bg-[#01090F]'>
					<Hero/>
				</div>
				<div className='bg-[#001122] px-4 md:px-16 py-6'>
					<Skills id="skills"/>
				</div>
				<div className='bg-[#162B42] px-4 md:px-16 py-6'>
					<Projects id="projects"/>
				</div>
				<div className='bg-[#01090F] px-4 md:px-16 py-6'>
					<About id="about"/>
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
			<p className='text-lg text-[#DADCDE] border border-[#DADCDE] px-4 py-2 rounded-full inline-flex items-center gap-2'>
				WEB DEVELOPER
			</p>
			<h1 className='text-4xl md:text-6xl font-bold text-[#DADCDE] py-2'>
				Welcome to Laravel Prime
			</h1>
			<p className='text-[#DADCDE] md:text-lg px-2'>
				Hi, I'm Prince, a web developer and IT professional specializing in Laravel and React. 
				<br className='hidden md:inline' /> 
				
			</p>
			<a 
				href="#about"
				className='sm:text-lg font-semibold text-[#FFFFF4] bg-[#F8770E] px-4 py-2 rounded-full inline-flex items-center gap-2'
			>
				<BiPhoneCall/> Contact Me
			</a>
		</div>
	)
}

function Skills({id}: {id: string}) {
	return (
		<div id={id} className='py-8'>
			<h2 className='text-[#F8FAFB] text-center text-xl md:text-2xl font-bold mb-8'>
				Technologies I've worked with
			</h2>
			<ul className='flex flex-wrap gap-4 justify-center'>
				{skills.map((skill, index) => (
					<li 
						key={index} 
						className='md:text-lg border border-[#5D6D7C] rounded-lg px-4 py-2 text-[#F5FEFF] inline-flex items-center gap-2'
					>
						{skill.icon && skill.icon} {skill.name}
					</li>
				))}
			</ul>
		</div>
	)
}

// React landing page projects component
function Projects({id}: {id: string}) {
	return (
		<div id={id} className='py-8'>
			<h2 className='text-[#F8FAFB] text-center text-xl md:text-2xl font-bold mb-8'>
				Check Out Some Of My Work
			</h2>
			<ul className='flex flex-col space-y-8'>
				{projects.map(project => (
					<li 
						key={project.title}
						className='flex flex-col max-md:space-y-8 md:flex-row md:space-x-8 md:items-center rounded-2xl bg-[#001122] p-4 md:p-8'
					>
						<div className='lg:w-[45%] md:w-[50%]'>
							<div className='aspect-video w-full rounded-xl overflow-hidden'>
								<img 
									src={project.image} 
									alt={`${project.title} image`} 
									className='w-full h-full object-cover'
								/>
							</div>
						</div>
						<div className='md:w-[65%] md:h-full flex flex-col space-y-4 justify-center'>
							<h3 className='text-[#F8FAFB] text-xl md:text-2xl font-bold'>
								{project.title}
							</h3>
							<div className='flex flex-wrap justify-start gap-2'>
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
									className='border border-[#F9FFFF] text-[#F9FFFF] inline-flex gap-2 rounded-full px-4 py-2'
									target="_blank" rel="noopener noreferrer"
								>
									<FaGithub size={24}/> Github Repository
								</a>
								<a 
									href={project.liveUrl}
									className='text-[#F9FFFF] px-4 py-2 inline-flex gap-2 items-center'
									target="_blank" rel="noopener noreferrer"
								>
									<BsLightningCharge color='red'/> Live Site
								</a>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

function About({id}: {id: string}) {
	const profiles: Array<{name: string, url: string, icon: any}> = [
		{
			'name': 'Frontend Mentor',
			'url': 'https://www.frontendmentor.io/profile/comfortprince',
			'icon': <SiFrontendmentor size={24}/>,
		}, 
		{
			'name': '+263 78 498 8345',
			'url': 'tel:+263784988345',
			'icon': <FaPhone size={24} style={{ transform: 'scaleX(-1)' }}/>,
		},
		{
			'name': 'WhatsApp',
			'url': 'https://wa.me/263784988345',
			'icon': <FaWhatsapp size={24}/>,
		},
		{
			'name': 'LinkedIn',
			'url': 'https://www.linkedin.com/in/comfort-prince/',
			'icon': <FaLinkedin size={24}/>,
		},
		{
			'name': 'Old GitHub Profile',
			'url': 'https://github.com/comfortprince',
			'icon' : <FaGithub size={24}/>,
		},
		{
			'name': 'New GitHub Profile',
			'url': 'https://github.com/laravelprime',
			'icon' : <FaGithub size={24}/>,
		},
		{
			'name': 'Twitter',
			'url': 'https://x.com/laravelprime',
			'icon': <BsTwitterX size={24}/>,
		},
	]

	return (
		<div id={id} className='flex flex-col max-md:space-y-4 space-x-4 md:flex-row'>
			<div className='bg-[#001122] text-[#FAFFFF] border border-[#21343E] rounded-2xl p-4 md:p-8 md:w-[40%]'>
				<p>
					Hi 👋. I'm
				</p>
				<p className='text-3xl fontbold mt-1 mb-3'>
					Prince
				</p>
				<p className='mb-4'>
					A web developer with a passion for building beautiful and functional web applications. I specialize in Laravel and React, and I love creating user-friendly interfaces with Tailwind CSS.
				</p>
				<p className='mb-4'>
					I'm also skilled in general IT, CCNA routing and switching, and cybersecurity solutions.
				</p>
				<p className=''>
					Feel free to reach out to me through any of the platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
				</p>
			</div>
			<div className='grid grid-cols-2 gap-4 md:w-[60%]'>
				{profiles.map(profile => (
					<a 
						href={profile.url} 
						key={profile.name}
						target='_blank'
						className='flex justify-center items-center space-x-2 p-2 rounded-2xl bg-[#001122] text-[#FAFFFF] text-sm border border-[#21343E]'
					>
						{profile.icon}
						<span>{profile.name}</span>
					</a>
				))}
			</div>
		</div>
	)
}

function Footer() {
	return (
		<>
			<div className='flex items-center justify-center py-2 text-sm'>
				<p className='text-gray-500'>© 2025 LaravelPrime. All rights reserved.</p>
			</div>
		</>
	)
}