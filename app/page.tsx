import { CardWrapper } from "@/components/card";
import { SiteCardWrapper } from "@/components/site-card";

export default function Home() {
	const currentYear = new Date().getFullYear();
	return (
		<div className="max-w-screen-md mx-auto">
			<main className="py-16 px-6 grid gap-10 lg:py-20">
				<header>
					<p className="font-bold uppercase tracking-wide">Hello, I&apos;m</p>
					<h1 className="text-2xl md:text-3xl font-black text-zinc-800">
						Jon Albert Virrey<span className="text-blue-600">.</span>
					</h1>
					<p className="mt-4 font-medium leading-6">
						I&apos;m an IT student exploring the world of software development. I enjoy solving complex problems,
						tackling challenges, and expanding my skill set through hands-on projects.
					</p>
				</header>
				<SiteCardWrapper />
				<CardWrapper />
			</main>
			<footer className="py-4 text-center text-xs font-medium">
				<p>&copy; {currentYear} Jon Albert Virrey</p>
			</footer>
		</div>
	);
}
