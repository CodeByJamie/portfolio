import Link from 'next/link';

export default function NavLink({ name, href }: { name: string, href: string }) {
	return (
		<>
			<Link href={href + name.toLowerCase()} className='text-xl text-gray-300 hover:text-white transition duration-300'>
				{name}
			</Link>
		</>
	);
}
