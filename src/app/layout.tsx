import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Jamie MacDonald',
	description: 'Full-Stack Web Developer',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='bg-neutral-800'>
			<body>{children}</body>
		</html>
	);
}
