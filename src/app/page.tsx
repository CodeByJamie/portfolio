import Header from './components/navigation/header';
import Link from 'next/link';
import * as HeroIcons from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<div className='relative min-h-screen bg-neutral-800 w-full'>
				<Header />
				<div className='flex flex-row text-neutral-50 font-semibold p-52 items-center justify-between'>
					<div className='flex flex-col gap-2'>
						<span className='text-sm'>HELLO, I AM</span>
						<span className='text-4xl'>Jamie MacDonald</span>
						<span className='flex flex-row items-center text-indigo-500 text-opacity-90 mt-1 uppercase gap-2'>
							Full Stack Web Developer <HeroIcons.SparklesIcon className='size-5' />
						</span>
						<span className='text-base'>I am a UI / UX & Web Designer from Scotland.</span>
						<div className='flex flex-row items-center justify-center bg-indigo-500 px-4 py-2 rounded-full mt-2 hover:bg-indigo-600 duration-200 gap-2 cursor-pointer'>
							<Link href='/about' className='flex items-center'>
								<span>Learn More</span>
							</Link>
							<HeroIcons.ArrowRightIcon className='size-4' />
						</div>
						<Link href="https://github.com/CodeByJamie"></Link>
					</div>
					<div className='relative h-[150px] w-[150px] border-4 border-indigo-500 rounded-full'>
					<Image src='/promotion.jpg' alt='profile' fill={true} className='rounded-full' />
				</div>
				</div>
			</div>
		</>
	);
}
