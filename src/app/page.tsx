"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
	FaGithub,
	FaLinkedin,
	FaUser,
	FaBook,
	FaMailBulk,
	FaSpaceShuttle,
	FaStackpath,
	FaStackOverflow,
	FaJs,
	FaHtml5,
	FaCss3Alt,
	FaReact,
	FaWind,
	FaNodeJs,
	FaDiscord,
	FaLeaf,
} from "react-icons/fa";
import Link from "next/link";
import { JSX, useState } from "react";
import { FaF, FaFlutter, FaN, FaS, FaT, FaXmarksLines } from "react-icons/fa6";

export default function Home() {
	// Variable toggle for the experience modal
	const [experience, setExperience] = useState(false);
	const [showExperience, setShowExperience] = useState("");

	const experiences: Record<string, {children: JSX.Element}> = {
		RAFAC: {
			children: (
				<div>
					<span>test</span>
				</div>
			),
		},
	};

	return (
		<div className="relative min-h-screen flex flex-col gap-12 items-center justify-center pb-12">
			{/* Navbar */}
			<header className="sticky top-0 left-0 w-full py-4 px-12 flex justify-between items-center bg-zinc-800/80 backdrop-blur-md shadow-md z-10 rounded-lg">
				<h1 className="text-yellow-500 text-2xl font-bold">
					Jamie MacDonald
				</h1>
				<nav className="flex gap-8 items-center">
					<Link
						href="#"
						className="text-zinc-300 hover:text-yellow-500 duration-500"
					>
						<FaUser />
					</Link>
					<Link
						href="#projects"
						className="text-zinc-300 hover:text-yellow-500 duration-500"
					>
						<FaBook />
					</Link>
					<Link
						href="/contact"
						className="text-zinc-300 hover:text-yellow-500 duration-500"
					>
						<FaMailBulk />
					</Link>
				</nav>
			</header>

			{/* Experience Modals */}

			{showExperience && (
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
                              exit={{scale: 0}}
					transition={{ duration: 1 }}
					className="absolute top-0 left-0 z-50 h-full w-full bg-zinc-900"
				>
                              {experiences[showExperience].children}
                        </motion.div>
			)}

			{/* Profile Card */}
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="relative shadow-yellow-600 shadow-md w-1/2 p-6 rounded-3xl flex items-center justify-between bg-zinc-800 mx-auto"
			>
				<div className="relative rounded-full w-24 h-24 border border-yellow-600 overflow-hidden bg-zinc-900">
					<Image
						src="/profile.png"
						alt="profile"
						fill
						className="absolute object-cover"
					/>
				</div>
				<div className="flex flex-col text-center">
					<h1 className="text-yellow-500 text-4xl tracking-wide font-semibold">
						Jamie MacDonald
					</h1>
					<p className="text-zinc-400 text-lg">
						Full Stack Developer
					</p>
				</div>
			</motion.div>

			{/* About Me Section */}
			<motion.section
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				id="about"
				className="relative w-3/4 p-8 bg-zinc-800 rounded-3xl shadow-md flex flex-col gap-4 overflow-auto max-h-72"
			>
				<h1 className="text-3xl font-semibold text-yellow-500">
					About Me
				</h1>
				<p className="text-zinc-400 text-lg leading-relaxed">
					Hey there! I'm Jamie, a full-stack web developer
					based in the UK. Passionate about both aviation
					and technology, I specialize in front-end and
					back-end development, crafting innovative
					solutions. My love for aviation started since I
					was a young boy. By 16, I earned my RAFAC Gliding
					Scholarship, taking to the skies before even
					learning to drive.
				</p>
				<div className="flex gap-4 mt-4">
					<Link
						href="https://github.com/CodebyJamie"
						target="_blank"
						className="text-yellow-500 text-3xl hover:text-yellow-300 transition-all"
					>
						<FaGithub />
					</Link>
					<Link
						href="https://www.linkedin.com/in/jamie-macdonald-35a2a0338/"
						target="_blank"
						className="text-yellow-500 text-3xl hover:text-yellow-300 transition-all"
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
				className="w-[70vw] h-2 bg-gradient-to-r from-yellow-600/20 to-yellow-600/80 rounded-full"
			/>

			{/* Projects Section */}
			<motion.section
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				id="projects"
				className="relative w-3/4 p-8 bg-zinc-800 rounded-3xl shadow-md flex flex-col gap-4 max-h-80 overflow-auto"
			>
				<h1 className="text-3xl font-semibold text-yellow-500">
					Projects
				</h1>
				<div className="text-zinc-400 text-lg leading-relaxed flex">
					<div className="w-1/2 flex flex-col gap-2">
						<h2 className="text-yellow-500 text-2xl font-semibold flex gap-3 items-baseline">
							Baymax APIs{" "}
							<span className="text-base text-zinc-50/60">
								Present (1 month)
							</span>
						</h2>
						<ul className="list-disc list-inside pl-3">
							<li>Community Manager</li>
							<li>Front End Developer</li>
							<li>Lead Bot Developer</li>
						</ul>
					</div>
					<div className="w-1/2 flex flex-col gap-2">
						<h2 className="text-yellow-500 text-2xl font-semibold flex gap-3 items-baseline">
							Regula{" "}
							<span className="text-base text-zinc-50/60">
								Present (2 months)
							</span>
						</h2>
						<ul className="list-disc list-inside pl-3">
							<li>Founder</li>
							<li>Lead Developer</li>
						</ul>
					</div>
				</div>
				<div className="flex gap-4 mt-4">
					<Link
						href="https://github.com/CodebyJamie"
						target="_blank"
						className="text-yellow-500 text-3xl hover:text-yellow-300 transition-all"
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
				className="w-[70vw] h-2 bg-gradient-to-r from-yellow-600/20 to-yellow-600/80 rounded-full"
			/>

			{/* Skills Section */}
			<motion.section
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				id="skills"
				className="relative w-3/4 p-8 bg-zinc-800 rounded-3xl shadow-md flex flex-col gap-4 overflow-auto"
			>
				<div
					className="absolute top-5 right-5 text-zinc-500 hover:text-zinc-600 duration-300 cursor-pointer"
					onClick={() => setExperience(!experience)}
				>
					<span>
						{experience ? "Skills" : "Experience"}
					</span>
				</div>
				<h1 className="text-3xl font-semibold text-yellow-500">
					{experience ? "Experience" : "Skills"}
				</h1>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className="text-zinc-400 text-lg leading-relaxed flex"
				>
					{!experience ? (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1 }}
							className="w-1/2 flex flex-col gap-2"
						>
							<span>Front End Development</span>
							<span>
								Backend (Junior) Development
							</span>
							<span></span>
						</motion.div>
					) : (
						<div className="">
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 1 }}
								className="flex flex-col"
							>
								<span
									list-inside
									pl-3
									className="text-yellow-500 text-2xl hover:text-blue-500 font-semibold cursor-pointer duration-300 flex gap-2 items-baseline"
									onClick={() =>
										setShowExperience(
											"RAFAC"
										)
									}
								>
									Royal Air Force Air Cadets
									<span className="text-base text-zinc-50/60">
										Present (2yr 10mo)
									</span>
								</span>
								<nav className="list-disc list-inside pl-3">
									<li>
										Cadet Flight
										Sergeant
									</li>
								</nav>
							</motion.div>
						</div>
					)}
				</motion.div>

				<div className="flex gap-4 mt-4">
					<span className="text-yellow-500 text-3xl hover:text-yellow-300">
						<FaSpaceShuttle />
					</span>
				</div>
			</motion.section>

			{/* Animated Divider */}
			<motion.div
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 1 }}
				transition={{ duration: 1 }}
				className="w-[70vw] h-2 bg-gradient-to-r from-yellow-600/20 to-yellow-600/80 rounded-full"
			/>

			{/* Stacks Section */}
			<motion.section
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				id="skills"
				className="relative w-3/4 p-8 bg-zinc-800 rounded-3xl shadow-md flex flex-col gap-4 overflow-auto max-h-72"
			>
				<h1 className="text-3xl font-semibold text-yellow-500">
					Stacks
				</h1>
				<div className="flex justify-between">
					<div className="flex flex-col gap-4">
						<h2 className="text-xl text-yellow-500 font-semibold">
							Web Development
						</h2>
						<div className="text-zinc-400 text-lg leading-relaxed flex gap-12">
							<div className="flex flex-col gap-2">
								<span className="flex gap-2 items-center">
									<FaHtml5 className="size-6 text-orange-500" />
									HTML
								</span>
								<span className="flex gap-2 items-center">
									<FaCss3Alt className="size-6 text-blue-500" />
									CSS
								</span>
								<span className="flex gap-2 items-center">
									<FaJs className="size-6 text-yellow-500" />
									JavaScript
								</span>
								<span className="flex gap-2 items-center">
									<FaReact className="size-6 text-cyan-500" />
									React
								</span>
								<span className="flex gap-2 items-center">
									<FaWind className="size-6 text-cyan-500" />
									Tailwindcss
								</span>
								<span className="flex gap-2 items-center">
									<FaN className="size-5 text-white" />
									NextJS
								</span>
								<span className="flex gap-2 items-center">
									<FaXmarksLines className="size-5 text-red-500" />
									EsLint
								</span>
								<span className="flex gap-2 items-center">
									<FaF className="size-5 text-yellow-500" />
									Framer
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<h2 className="text-xl text-yellow-500 font-semibold">
							Backend Development
						</h2>
						<div className="text-zinc-400 text-lg leading-relaxed flex gap-12">
							<div className="flex flex-col gap-2">
								<div className="flex gap-2 items-center">
									<span className="flex gap-0">
										<FaT className="size-3 text-blue-500" />
										<FaS className="size-3 text-blue-500" />
									</span>
									TypeScript
								</div>
								<span className="flex gap-2 items-center">
									<FaDiscord className="size-6 text-indigo-500" />
									DiscordJS
								</span>
								<span className="flex gap-3 items-center">
									<FaNodeJs className="size-5 text-green-500" />
									Node
								</span>
								<span className="flex gap-2 items-center">
									<FaLeaf className="size-5 text-emerald-500" />
									Mongoose
								</span>
								<span className="flex gap-2 items-center">
									<FaFlutter className="size-5 text-sky-500" />
									Flutter
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className="flex gap-4 mt-4">
					<span className="text-yellow-500 text-3xl hover:text-yellow-300">
						<FaStackOverflow />
					</span>
				</div>
			</motion.section>

			{/* Animated Divider */}
			<motion.div
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 1 }}
				transition={{ duration: 1 }}
				className="w-[70vw] h-2 bg-gradient-to-r from-yellow-600/20 to-yellow-600/80 rounded-full"
			/>
		</div>
	);
}
