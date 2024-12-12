'use client';

import { AcademicCapIcon, Bars3Icon, ChatBubbleOvalLeftIcon, ClipboardDocumentCheckIcon, EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
	const [menu, setMenu] = useState(false);

	// Variants for menu animation
	const menuVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -20 },
	};

	return (
		<>
			<div className='flex flex-row items-center p-3 select-none justify-between px-5'>
				<span className='font-semibold text-2xl font-Poppins text-neutral-100 border-b-4 border-b-indigo-500 border-opacity-85'>
					Jamie M.
				</span>
				<nav className='hidden md:flex flex-row items-center gap-10 text-transparent tracking-wider hnav z-50 bg-gradient-to-l from-neutral-600/70 to-neutral-600 bg-clip-text bg-gradient-size animate-gradientFlow'>
					<Link href='#'>Projects</Link>
					<Link href='#'>Services</Link>
					<Link href='#'>About</Link>
					<Link href='#'>Blog</Link>
					<Link href='#'>Contact</Link>
				</nav>

				<div className='flex flex-col absolute top-4 right-5 items-center z-50'>
					<button className='md:hidden' onClick={() => setMenu(!menu)}>
						<Bars3Icon className='size-7 text-neutral-500 hover:scale-110 duration-300' />
					</button>
					<AnimatePresence>
						{menu && (
							<motion.nav
								className='flex flex-col gap-4 items-center text-neutral-500 w-fit py-6 px-3 md:hidden hnav '
								initial='hidden'
								animate='visible'
								exit='exit'
								variants={menuVariants}
								transition={{ duration: 0.3, ease: 'easeInOut' }}
								onClick={() => setMenu(false)}
							>
								<Link href='#'>
									<AcademicCapIcon className='size-6' />
								</Link>
								<Link href='#'>
									<ClipboardDocumentCheckIcon className='size-6' />
								</Link>
								<Link href='#'>
									<UserIcon className='size-6' />
								</Link>
								<Link href='#'>
									<ChatBubbleOvalLeftIcon className='size-6' />
								</Link>
								<Link href='#'>
									<EnvelopeIcon className='size-6' />
								</Link>
							</motion.nav>
						)}
					</AnimatePresence>
				</div>
			</div>
		</>
	);
}
