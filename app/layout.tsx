import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "%s | Jon Albert Virrey",
		default: "Jon Albert Virrey",
	},
	description:
		"I'm an IT student exploring the world of software development. I enjoy solving complex problems, tackling challenges, and expanding my skill set through hands-on projects",
	keywords: ["Jon Albert Virrey", "IT Student", "Software Development, Web Development"],
	creator: "Jon Albert Virrey",
	// openGraph: {
	// 	title: "Jon Albert Virrey",
	// 	description: "",
	// 	url: "",
	// 	siteName: "Jon Albert Virrey",
	// 	images: [
	// 		{
	// 			url: "",
	// 			width: 1200,
	// 			height: 630,
	// 			alt: "Jon Albert Virrey",
	// 		},
	// 	],
	// 	locale: "en_US",
	// 	type: "website",
	// },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${manrope.className}`}>{children}</body>
		</html>
	);
}
