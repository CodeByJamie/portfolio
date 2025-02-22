import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Jamie MacDonald",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="bg-zinc-900 ">
			<body>{children}</body>
		</html>
	);
}
