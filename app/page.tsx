'use client';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NavLink from './NavLink';

export default function Home() {
	return (
		<>
			{/* Hero Section */}
			<div className='relative min-h-screen bg-gray-900 flex items-center py-24 px-6 lg:px-20'>
				<div className='absolute inset-0 bg-black opacity-40'></div>
				<div className='relative container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 text-white'>
					<div className='flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg'>
						<h3 className='text-lg text-white font-semibold uppercase tracking-widest mb-2'>
							Full Stack Web Developer
						</h3>
						<h1 className='text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white'>
							Hi, I'm Jamie from the UK.
						</h1>
						<p className='text-lg lg:text-xl mb-6 max-w-2xl mx-auto lg:mx-0'>
							Passionate about web development, technology, and innovation. In my free time, I
							love skiing, snowboarding, and exploring the latest advancements in aviation.
						</p>

						{/* Navigation Links */}
						<div className='flex justify-center lg:justify-start gap-8'>
							<NavLink href='#' name='About' />
							<NavLink name='Projects' href='#' />
							<NavLink href='#' name='Contact' />
						</div>
					</div>

					<div className='relative w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-lg'>
						<Image src='/profile.jpg' alt='Profile photo' fill className='object-cover' />
					</div>
				</div>
			</div>

			{/* About Section */}
			<section id='about' className='py-24 bg-gray-100'>
				<div className='container mx-auto px-8 text-center'>
					<motion.h2
						className='text-4xl font-bold text-gray-800 mb-6'
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						About Me
					</motion.h2>
					<motion.p
						className='text-lg text-gray-600 max-w-3xl mx-auto'
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						I am a full-stack web developer with a passion for creating innovative, user-friendly, and
						scalable applications. My skills span frontend and backend development, including
						expertise in JavaScript, React, Next.js, Node.js, and MongoDB. When I'm not coding, you'll
						find me staying active through skiing, snowboarding, and playing sports like badminton and
						squash.
					</motion.p>
				</div>
			</section>

			{/* Projects Section */}
			<section id='projects' className='py-24 bg-white'>
				<div className='container mx-auto px-8 text-center'>
					<motion.h2
						className='text-4xl font-bold text-gray-800 mb-6'
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						Projects
					</motion.h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
						{/* Kidfit Project */}
						<div className='bg-gray-50 p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300'>
							<h3 className='text-xl font-semibold text-gray-800 mb-3'>KidFit</h3>
							<p className='text-gray-600 mb-3'>
								Kidfit is an application designed to promote healthy eating amongst
								young children.
							</p>
							<span className='text-xl font-semibold text-gray-800 mb-3'>Stacks</span>
							<p className='text-gray-600'>Flutter, React Native, Tailwind CSS</p>
							<div className='mt-6 flex justify-center'>
								<Link
									href='https://github.com/CodeByJamie/kidfit'
									target='_blank'
									className='text-indigo-600 hover:text-indigo-700 transition duration-300'
								>
									GitHub
								</Link>
							</div>
						</div>

						{/* ScotsFarm Project */}
						<div className='bg-gray-50 p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300'>
							<h3 className='text-xl font-semibold text-gray-800 mb-3'>ScotsFarm</h3>
							<p className='text-gray-600 mb-3'>
								A website for a small farm located between Edinburgh and Carlisle.
							</p>
							<span className='text-xl font-semibold text-gray-800 mb-3'>Stacks</span>
							<p className='text-gray-600'>React, NextJS, Tailwind CSS</p>
							<div className='mt-6 flex justify-center'>
								<Link
									href='https://github.com'
									target='_blank'
									className='text-indigo-600 hover:text-indigo-700 transition duration-300'
								>
									GitHub
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id='contact' className='py-24 bg-gray-900 text-white'>
				<div className='container mx-auto px-8 text-center'>
					<motion.h2
						className='text-4xl font-bold mb-6'
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						Get In Touch
					</motion.h2>
					<motion.p
						className='text-lg mb-8 max-w-2xl mx-auto'
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						I'm always open to discussing new projects, collaborations, or just chatting about
						technology and innovation. Feel free to reach out!
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.4 }}
						className='flex justify-center gap-6'
					>
						<Link
							href='mailto:j.s.macdonald@icloud.com'
							className='bg-gray-800 text-white py-3 px-8 rounded-lg hover:bg-gray-700 transition duration-300'
						>
							<EnvelopeIcon className='h-6 w-6 inline-block' /> Contact Me
						</Link>
					</motion.div>
				</div>
			</section>
		</>
	);
}
