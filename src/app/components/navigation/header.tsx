import Link from "next/link";

export default function Header() {
	return (
		<>
			{/* Ensure the header has a z-index of 50 */}
			<div className='flex flex-row items-center p-3 select-none justify-between px-10 z-50 relative'>
				<span className='font-semibold text-2xl font-Poppins text-neutral-100 border-b-4 border-b-indigo-500 border-opacity-85'>
					Jamie M.
				</span>
                <nav className="flex flex-row items-center gap-10 text-neutral-500 tracking-wider hnav">
                    <Link href="#">Projects</Link>
                    <Link href="#">Services</Link>
                    <Link href="#">About</Link>
                    <Link href="#">Blog</Link>
                    <Link href="#">Contact</Link>
                </nav>
			</div>
		</>
	);
}
