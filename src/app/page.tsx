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
			<div className='relative h-screen w-screen'>
				<Header />
				<section className='absolute top-0 left-0 flex items-center justify-center text-neutral-50 font-semibold h-screen w-full md:p-56'>
					<div className='relative flex flex-col-reverse items-center h-full w-full gap-6 justify-between max-md:translate-y-0 max-md:gap-6 max-xl:justify-center xl:flex-row max-xl:translate-y-[7rem] max-xl:gap-12 max-:translate-y-4 '>
						<div className=' relative flex flex-col gap-2 max-xl:text-center p-8'>
							<span className='text-sm'>HELLO, I AM</span>
							<span className='text-4xl text-nowrap'>Jamie MacDonald</span>
							<span className='flex flex-row items-center max-xl:justify-center text-indigo-500 text-opacity-90 mt-1 uppercase gap-2 animate-hue'>
								Full Stack Web Developer
								<HeroIcons.SparklesIcon className='w-5 h-5' />
							</span>
							<span className='text-base text-nowrap'>I am a UI / UX & Web Designer from Scotland.</span>
							<div className='flex flex-row items-center justify-center bg-indigo-500 px-4 py-2 rounded-full mt-2 hover:bg-indigo-600 duration-200 gap-2 cursor-pointer'>
								<button className=''>Learn More</button>
								<HeroIcons.ArrowRightIcon className='size-4' />
							</div>
						</div>
						<div className='relative max-lg:min-w-[150px] max-lg:min-h-[150px] min-w-[200px] min-h-[200px]'>
							<Image
								src='/promotion.jpg'
								alt='profile'
								fill={true}
								className='rounded-full border-4 border-indigo-500'
							/>
							<div className='absolute -translate-x-7 -translate-y-5 lg:size-[250px] max-lg:size-[200px]'>
								<HeroIcons.PaperAirplaneIcon className='absolute -rotate-45 size-7 text-indigo-600 text-opacity-70' />
								<HeroIcons.PencilIcon className='absolute bottom-0 right-0 size-7 text-purple-800' />
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
