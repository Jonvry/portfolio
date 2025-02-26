import {
	ExpressJsIcon,
	MySQLIcon,
	NextJsIcon,
	NodeJsIcon,
	PostgreSQLIcon,
	PostManIcon,
	ReactJsIcon,
	TailwindCSSIcon,
	TSIcon,
	VercelIcon,
} from "@/components/svg-icon";

function Card({ name, logo }: { name: string; logo: React.ReactNode }) {
	return (
		<figure>
			<div className="bg-zinc-100 h-20 grid place-content-center rounded-2xl">{logo}</div>
			<figcaption className="mt-2 text-xs font-bold text-center">{name}</figcaption>
		</figure>
	);
}

export function CardWrapper() {
	return (
		<section>
			<h2 className="text-xl font-extrabold text-zinc-800">What I use</h2>
			<div className="mt-4 grid grid-cols-[repeat(auto-fill,minmax(4.5rem,1fr))] gap-4 text-zinc-800">
				<Card logo={<TSIcon />} name="TypeScript" />
				<Card logo={<NodeJsIcon />} name="Node JS" />
				<Card logo={<ExpressJsIcon />} name="Express JS" />
				<Card logo={<MySQLIcon />} name="MySQL" />
				<Card logo={<PostgreSQLIcon />} name="PostgreSQL" />
				<Card logo={<ReactJsIcon />} name="React JS" />
				<Card logo={<NextJsIcon />} name="Next JS" />
				<Card logo={<PostManIcon />} name="Postman" />
				<Card logo={<TailwindCSSIcon />} name="Tailwind CSS" />
				<Card logo={<VercelIcon />} name="Vercel" />
			</div>
		</section>
	);
}
