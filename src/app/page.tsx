'use client';
import { useState, useEffect, useRef } from 'react';
import Header from './components/navigation/header';
import * as HeroIcons from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Home() {
	const [isContentVisible, setIsContentVisible] = useState(false);
	const aboutSectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsContentVisible(entry.isIntersecting);
			},
			{ threshold: 0.3 }
		);

		if (aboutSectionRef.current) {
			observer.observe(aboutSectionRef.current);
		}

		return () => {
			if (aboutSectionRef.current) {
				observer.unobserve(aboutSectionRef.current);
			}
		};
	}, []);


	return (
		<>
			<div className='relative h-screen bg-neutral-800 w-screen'>
				<Header />
				<section className='text-neutral-50 font-semibold h-[92dvh] w-full md:p-56'>
					<div className='relative flex flex-col-reverse xl:flex-row items-center lg:justify-between max-xl:gap-12 h-full max-md:-translate-y-20 max-xl:translate-y-1/4'>
						<div className=' relative flex flex-col gap-2 max-xl:text-center p-8'>
							<span className='text-sm'>HELLO, I AM</span>
							<span className='text-4xl text-nowrap'>Jamie MacDonald</span>
							<span className='flex flex-row items-center max-xl:justify-center text-indigo-500 text-opacity-90 mt-1 uppercase gap-2 animate-hue'>
								Full Stack Web Developer
								<HeroIcons.SparklesIcon className='w-5 h-5' />
							</span>
							<span className='text-base text-nowrap'>I am a UI / UX & Web Designer from Scotland.</span>
							<div className='flex flex-row items-center justify-center bg-indigo-500 px-4 py-2 rounded-full mt-2 hover:bg-indigo-600 duration-200 gap-2 cursor-pointer'>
								<button>Learn More</button>
								<HeroIcons.ArrowRightIcon className='size-4' />
							</div>
						</div>
						<div className='relative min-w-[200px] min-h-[200px] '>
							<Image
								src='/promotion.jpg'
								alt='profile'
								fill={true}
								className='rounded-full border-4 border-indigo-500'
							/>
							<div className='absolute -translate-x-7 -translate-y-5 md:size-[250px] max-md:size-[250px]'>
								<HeroIcons.PaperAirplaneIcon className='absolute -rotate-45 size-7 text-indigo-600 text-opacity-70' />
								<HeroIcons.PencilIcon className='absolute bottom-0 right-0 size-7 text-purple-800' />
							</div>
						</div>
					</div>
				</section>
				<section ref={aboutSectionRef} className='flex flex-col w-screen h-screen bg-neutral-800' id='about'>
					<div
						className={`transition-opacity duration-1000 w-full ${
							isContentVisible ? 'opacity-100' : 'opacity-0'
						}`}
					></div>
				</section>
			</div>
		</>
	);
}
