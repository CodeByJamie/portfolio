'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import {
	FaGithub,
	FaLinkedin,
	FaUser,
	FaBook,
	FaMailBulk,
	FaSpaceShuttle,
	FaStackOverflow,
	FaJs,
	FaHtml5,
	FaCss3Alt,
	FaReact,
	FaWind,
	FaNodeJs,
	FaLeaf,
	FaPaperPlane,
	FaMedal,
	FaTrashAlt,
	FaUserTie,
	FaTableTennis,
} from 'react-icons/fa';
import Link from 'next/link';
import { JSX, useState } from 'react';
import { FaChevronDown, FaF, FaFlutter, FaN, FaS, FaT, FaTableTennisPaddleBall, FaXmarksLines } from 'react-icons/fa6';

type Experience = {
	children: JSX.Element;
	primary: string;
	icon: JSX.Element;
};

type Experiences = {
	'Royal Air Force Air Cadets': Experience;
	'Highlife Highland': Experience;
	[key: string]: Experience;
};

export default function Home() {
	// Variable toggle for the experience modal
	const [experience, setExperience] = useState(false);
	const [showExperience, setShowExperience] = useState('');

	const experiences: Experiences = {
		'Royal Air Force Air Cadets': {
			children: (
				<div className='flex flex-col h-full max-h-full overflow-auto gap-8'>
					<div className='flex justify-between mx-6'>
						<div className='flex flex-col gap-4'>
							<span className='text-zinc-200 text-2xl leading-relaxed flex font-semibold items-center gap-3'>
								<FaChevronDown /> Ranks
							</span>
							<div className='flex flex-col pl-8 text-xl text-zinc-300 tracking-wide gap-2'>
								<div className='flex flex-col gap-1'>
									<span className='flex gap-2 items-baseline font-semibold'>
										Cadet Flight Sergeant
										<span className='text-base text-zinc-400'>
											- Current
										</span>
									</span>
									<span className='text-base pl-4 text-zinc-500'>
										Achieved 30th Jan 2025
									</span>
								</div>
								<div className='flex flex-col gap-1'>
									<span className='font-semibold'>
										Cadet Sergeant
									</span>
									<span className='text-base pl-4 text-zinc-500'>
										Achieved 29 Mar 2024
									</span>
								</div>
								<div className='flex flex-col gap-1'>
									<span className='font-semibold'>
										Cadet Corporal
									</span>
									<span className='text-base pl-4 text-zinc-500'>
										Achieved 8 June 2023
									</span>
								</div>
								<div className='flex flex-col gap-1'>
									<span className='font-semibold'>
										Cadet
									</span>
									<span className='text-base pl-4 text-zinc-500'>
										Joined in 2022
									</span>
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-4'>
							<span className='text-zinc-200 text-2xl leading-relaxed flex font-semibold items-center gap-3'>
								<FaMedal /> Achievements
							</span>
							<div className='flex flex-col pl-8 text-xl text-zinc-300 tracking-wide gap-2'>
								<div className='flex flex-col gap-1'>
									<span className='flex gap-2 items-baseline font-semibold'>
										RAFAC Gliding Scholarship
									</span>
									<span className='text-base pl-4 text-zinc-500'>
										Achieved 6th July 2024
									</span>
								</div>
								<div className='flex flex-col gap-1'>
									<span className='font-semibold'>
										Instructor Cadet
									</span>
									<span className='text-base pl-4 text-zinc-500'>
										Achieved 13th Oct 2024
									</span>
								</div>
								<div className='flex flex-col gap-1'>
									<span className='font-semibold'>
										Advanced Marksman
									</span>
									<span className='text-base pl-4 text-zinc-500'>
										Achieved 11th Oct 2024
									</span>
								</div>
								<div className='flex flex-col gap-1'>
									<span className='font-semibold'>
										Cadet Drill Trainer
									</span>
									<span className='text-base pl-4 text-zinc-500'>
										Achieved 24th March 2024
									</span>
								</div>
								<div className='flex flex-col gap-1'>
									<span className='font-semibold'>
										Radio Comms Operator
									</span>
									<span className='text-base pl-4 text-zinc-500'>
										Achieved 21st Oct 2023
									</span>
								</div>
								<div className='flex flex-col gap-1'>
									<span className='font-semibold'>
										St John Ambulance First Aid
									</span>
									<span className='text-base pl-4 text-zinc-500'>
										Achieved 21st Oct 2023
									</span>
								</div>
							</div>
						</div>
					</div>
					<p className='text-zinc-400 text-xl leading-relaxed'>
						I have developed a strong foundation in discipline, teamwork, decision making,
						resilience and perseverance; qualities that are integral to flying training.
						These principles have also positively influenced my academic work and other
						extracurricular activities, and I am eager to carry them forward into
						university study and towards a future career as RAF aircrew.
					</p>
					<div className='relative w-fit flex gap-4 mx-auto'>
						<div className='relative w-[200px] h-[120px]'>
							<Image
								src={'/gliding-wings.jpg'}
								alt='gliding-wings'
								fill
								className='rounded-xl'
							/>
						</div>
						<div className='relative w-[200px] h-[120px]'>
							<Image
								src={'/gliding-banner.jpg'}
								alt='gliding-wings'
								fill
								className='rounded-xl'
							/>
						</div>
						<div className='relative w-[200px] h-[120px]'>
							<Image
								src={'/glider-landing.jpg'}
								alt='gliding-wings'
								fill
								className='rounded-xl'
							/>
						</div>
						<div className='relative w-[200px] h-[120px]'>
							<Image
								src={'/glider-cockpit.jpg'}
								alt='gliding-wings'
								fill
								className='rounded-xl'
							/>
						</div>
						<div className='relative w-[350px] h-[120px]'>
							<Image
								src={'/vgs.jpg'}
								alt='gliding-wings'
								fill
								className='rounded-xl'
							/>
						</div>
					</div>
				</div>
			),
			primary: '#3b82f6',
			icon: <FaPaperPlane className='hover:text-red-500/50 duration-300' />,
		},
		'Highlife Highland': {
			children: (
				<div className='flex flex-col h-full max-h-full overflow-auto gap-8'>
					<div className='flex justify-between mx-6'>
						<div className='flex flex-col gap-4'>
							<span className='text-zinc-200 text-2xl leading-relaxed flex font-semibold items-center gap-3'>
								<FaUserTie /> Young Ambassador
							</span>
							<span className='text-zinc-400 text-lg max-w-3xl leading-relaxed'>
								During my time as a Highlife Highland Young
								Ambassador, I had the opportunity to deeply understand
								the importance of communication. As an ambassador, I
								was tasked with representing the interests and values
								of the community, and effective communication became
								the key to fostering relationships and driving change.
								Whether I was speaking with local stakeholders,
								engaging with young people, or advocating for
								initiatives, I quickly learned that clear, respectful,
								and impactful communication is essential to making a
								meaningful difference.
							</span>
						</div>
						<div className='flex flex-col gap-4'>
							<span className='text-zinc-200 text-2xl leading-relaxed flex font-semibold items-center gap-3'>
								<FaTableTennisPaddleBall /> Young Leader
							</span>
							<span className='max-w-3xl text-zinc-400 text-lg leading-relaxed'>
								During my time as a young leader, I dedicated over 100
								hours to volunteering, with a strong focus on
								encouraging sport within my community. I worked
								closely with local organizations and youth groups to
								promote physical activity, create accessible
								opportunities for participation, and inspire others to
								lead healthy, active lifestyles
							</span>
						</div>
					</div>
                              <div className="relative w-[450px] h-[400px] mx-auto">
                                    <Image src={'/young-ambassador.jpg'} alt="highlife" fill className="rounded-xl" />
                              </div>
				</div>
			),
			primary: '#008da1',
			icon: <FaTrashAlt className='hover:text-red-500/50 duration-300 size-5' />,
		},
	};

	return (
		<div className='relative min-h-screen flex flex-col'>
			{/* Experience Modals */}
			<AnimatePresence>
				{showExperience && (
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0 }}
						transition={{ duration: 0.6 }}
						style={{
							boxShadow: `1px 4px 10px ${experiences[showExperience].primary}`,
							color: experiences[showExperience].primary,
						}}
						className={`fixed z-50 bg-zinc-900 w-[80dvw] h-[80dvh] top-0 bottom-0 left-0 right-0 shadow-md m-auto rounded-3xl p-8 overflow-auto flex flex-col gap-4`}
					>
						<span
							className='absolute right-5 top-5 cursor-pointer'
							onClick={() => setShowExperience('')}
						>
							{experiences[showExperience].icon}
						</span>

						<span className='text-3xl font-semibold leading-relaxed'>
							{showExperience}
						</span>
						{experiences[showExperience].children}
					</motion.div>
				)}
			</AnimatePresence>

			{/* Main Content */}
			<div
				className={`relative min-h-screen flex flex-col gap-12 items-center justify-center pb-12 ${
					showExperience && 'opacity-50'
				} duration-300`}
			>
				{/* Navbar */}
				<header className='sticky top-0 left-0 w-full py-4 px-12 flex justify-between items-center bg-zinc-800/80 backdrop-blur-md shadow-md z-10 rounded-lg'>
					<h1 className='text-yellow-500 text-2xl font-bold'>Jamie MacDonald</h1>
					<nav className='flex gap-8 items-center'>
						<Link href='#' className='text-zinc-300 hover:text-yellow-500 duration-500'>
							<FaUser />
						</Link>
						<Link
							href='#projects'
							className='text-zinc-300 hover:text-yellow-500 duration-500'
						>
							<FaBook />
						</Link>
						<Link
							href='/contact'
							className='text-zinc-300 hover:text-yellow-500 duration-500'
						>
							<FaMailBulk />
						</Link>
					</nav>
				</header>

				{/* Profile Card */}
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='relative shadow-yellow-600 shadow-md w-1/2 p-6 rounded-3xl flex items-center justify-between bg-zinc-800 mx-auto'
				>
					<div className='relative rounded-full w-24 h-24 border border-yellow-600 overflow-hidden bg-zinc-900'>
						<Image
							src='/profile.png'
							alt='profile'
							fill
							className='absolute object-cover'
						/>
					</div>
					<div className='flex flex-col text-center'>
						<h1 className='text-yellow-500 text-4xl tracking-wide font-semibold'>
							Jamie MacDonald
						</h1>
						<p className='text-zinc-400 text-lg'>Full Stack Developer</p>
					</div>
				</motion.div>

				{/* About Me Section */}
				<motion.section
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					id='about'
					className='relative w-3/4 p-8 bg-zinc-800 rounded-3xl shadow-md flex flex-col gap-4 overflow-auto max-h-72'
				>
					<h1 className='text-3xl font-semibold text-yellow-500'>About Me</h1>
					<p className='text-zinc-400 text-lg leading-relaxed'>
						Hey there! I'm Jamie, a full-stack web developer based in the UK. Passionate
						about both aviation and technology, I specialize in front-end and back-end
						development, crafting innovative solutions. My love for aviation started since
						I was a young boy. By 16, I earned my RAFAC Gliding Scholarship, taking to the
						skies before even learning to drive.
					</p>
					<div className='flex gap-4 mt-4'>
						<Link
							href='https://github.com/CodebyJamie'
							target='_blank'
							className='text-yellow-500 text-3xl hover:text-yellow-300 transition-all'
						>
							<FaGithub />
						</Link>
						<Link
							href='https://www.linkedin.com/in/jamie-macdonald-35a2a0338/'
							target='_blank'
							className='text-yellow-500 text-3xl hover:text-yellow-300 transition-all'
						>
							<FaLinkedin />
						</Link>
					</div>
				</motion.section>

				{/* Animated Divider */}
				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 1 }}
					className='w-[70vw] h-2 bg-gradient-to-r from-yellow-600/20 to-yellow-600/80 rounded-full'
				/>

				{/* Projects Section */}
				<motion.section
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					id='projects'
					className='relative w-3/4 p-8 bg-zinc-800 rounded-3xl shadow-md flex flex-col gap-4 max-h-80 overflow-auto'
				>
					<h1 className='text-3xl font-semibold text-yellow-500'>Projects</h1>
					<div className='text-zinc-400 text-lg leading-relaxed flex'>
						<div className='w-1/2 flex flex-col gap-2'>
							<h2 className='text-yellow-500 text-2xl font-semibold flex gap-3 items-baseline'>
								Baymax APIs{' '}
								<span className='text-base text-zinc-50/60'>
									Present (1 month)
								</span>
							</h2>
							<ul className='list-disc pl-8'>
								<li>Community Manager</li>
								<li>Front End Developer</li>
								<li>Lead Bot Developer</li>
							</ul>
						</div>
						<div className='w-1/2 flex flex-col gap-2'>
							<h2 className='text-yellow-500 text-2xl font-semibold flex gap-3 items-baseline'>
								Regula{' '}
								<span className='text-base text-zinc-50/60'>
									Present (2 months)
								</span>
							</h2>
							<ul className='list-disc pl-8'>
								<li>Founder</li>
								<li>Lead Developer</li>
							</ul>
						</div>
					</div>
					<div className='flex gap-4 mt-4'>
						<Link
							href='https://github.com/CodebyJamie'
							target='_blank'
							className='text-yellow-500 text-3xl hover:text-yellow-300 transition-all'
						>
							<FaGithub />
						</Link>
					</div>
				</motion.section>

				{/* Animated Divider */}
				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 1 }}
					className='w-[70vw] h-2 bg-gradient-to-r from-yellow-600/20 to-yellow-600/80 rounded-full'
				/>

				{/* Skills / Experience Section */}
				<motion.section
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					id='skills'
					className='relative w-3/4 p-8 bg-zinc-800 rounded-3xl shadow-md flex flex-col gap-4 overflow-auto'
				>
					<div
						className='absolute top-5 right-5 text-zinc-500 hover:text-zinc-600 duration-300 cursor-pointer'
						onClick={() => setExperience(!experience)}
					>
						<span>{experience ? 'Skills' : 'Experience'}</span>
					</div>
					<h1 className='text-3xl font-semibold text-yellow-500'>
						{experience ? 'Experience' : 'Skills'}
					</h1>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className='text-zinc-400 text-lg leading-relaxed flex max-h-72 overflow-auto'
					>
						{!experience ? (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 1 }}
								className='w-1/2 flex flex-col gap-2'
							>
								<span>Front End Development</span>
								<span>Junior Backend Development</span>
								<span></span>
							</motion.div>
						) : (
							<div className='flex justify-between w-full'>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 1 }}
									className='flex flex-col gap-2'
								>
									<span
										className='text-yellow-500 text-2xl hover:text-blue-500 font-semibold cursor-pointer duration-300 flex gap-2 items-baseline'
										onClick={() =>
											setShowExperience(
												'Royal Air Force Air Cadets'
											)
										}
									>
										Royal Air Force Air Cadets
										<span className='text-base text-zinc-50/60'>
											2022 - Present
										</span>
									</span>
									<ul className='list-disc pl-8'>
										<li>Cadet Flight Sergeant</li>
										<li>Instructor Cadet</li>
										<li>Cadet Drill Trainer</li>
									</ul>
								</motion.div>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 1 }}
									className='flex flex-col gap-2'
								>
									<span
										className='text-yellow-500 text-2xl hover:text-[#008da1] font-semibold cursor-pointer duration-300 flex gap-2 items-baseline'
										onClick={() =>
											setShowExperience(
												'Highlife Highland'
											)
										}
									>
										Highlife Highland
										<span className='text-base text-zinc-50/60'>
											2020 - 2024
										</span>
									</span>
									<ul className='list-disc pl-8'>
										<li>Young Ambassador</li>
										<li>Young Leader</li>
									</ul>
								</motion.div>
							</div>
						)}
					</motion.div>

					<div className='flex gap-4 mt-4'>
						<span className='text-yellow-500 text-3xl hover:text-yellow-300'>
							<FaSpaceShuttle />
						</span>
					</div>
				</motion.section>

				{/* Animated Divider */}
				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 1 }}
					className='w-[70vw] h-2 bg-gradient-to-r from-yellow-600/20 to-yellow-600/80 rounded-full'
				/>

				{/* Stacks Section */}
				<motion.section
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					id='skills'
					className='relative w-3/4 p-8 bg-zinc-800 rounded-3xl shadow-md flex flex-col gap-4 overflow-auto max-h-72'
				>
					<h1 className='text-3xl font-semibold text-yellow-500'>Stacks</h1>
					<div className='flex justify-between'>
						<div className='flex flex-col gap-4'>
							<h2 className='text-xl text-yellow-500 font-semibold'>
								Web Development
							</h2>
							<div className='text-zinc-400 text-lg leading-relaxed flex gap-12'>
								<div className='flex flex-col gap-2'>
									<span className='flex gap-2 items-center'>
										<FaHtml5 className='size-6 text-orange-500' />
										HTML
									</span>
									<span className='flex gap-2 items-center'>
										<FaCss3Alt className='size-6 text-blue-500' />
										CSS
									</span>
									<span className='flex gap-2 items-center'>
										<FaJs className='size-6 text-yellow-500' />
										JavaScript
									</span>
									<span className='flex gap-2 items-center'>
										<FaReact className='size-6 text-cyan-500' />
										React
									</span>
									<span className='flex gap-2 items-center'>
										<FaWind className='size-6 text-cyan-500' />
										Tailwindcss
									</span>
									<span className='flex gap-2 items-center'>
										<FaN className='size-5 text-white' />
										NextJS
									</span>
									<span className='flex gap-2 items-center'>
										<FaXmarksLines className='size-5 text-red-500' />
										EsLint
									</span>
									<span className='flex gap-2 items-center'>
										<FaF className='size-5 text-yellow-500' />
										Framer
									</span>
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-4'>
							<h2 className='text-xl text-yellow-500 font-semibold'>
								Backend Development
							</h2>
							<div className='text-zinc-400 text-lg leading-relaxed flex gap-12'>
								<div className='flex flex-col gap-2'>
									<div className='flex gap-2 items-center'>
										<span className='flex gap-0'>
											<FaT className='size-3 text-blue-500' />
											<FaS className='size-3 text-blue-500' />
										</span>
										TypeScript
									</div>

									<span className='flex gap-3 items-center'>
										<FaNodeJs className='size-5 text-green-500' />
										Node
									</span>
									<span className='flex gap-2 items-center'>
										<FaLeaf className='size-5 text-emerald-500' />
										Mongoose
									</span>
									<span className='flex gap-2 items-center'>
										<FaFlutter className='size-5 text-sky-500' />
										Flutter
									</span>
								</div>
							</div>
						</div>
					</div>

					<div className='flex gap-4 mt-4'>
						<span className='text-yellow-500 text-3xl hover:text-yellow-300'>
							<FaStackOverflow />
						</span>
					</div>
				</motion.section>

				{/* Animated Divider */}
				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 1 }}
					className='w-[70vw] h-2 bg-gradient-to-r from-yellow-600/20 to-yellow-600/80 rounded-full'
				/>
			</div>
		</div>
	);
}
