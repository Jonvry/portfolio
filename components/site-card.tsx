import Image from "next/image";
import Link from "next/link";

function Card({ ImagUrl, title, url }: { ImagUrl: string; title: string; url: string }) {
	return (
		<figure className="group">
			<Link
				href={url}
				target="_blank"
				rel="noopener noreferrer"
				className="block"
				aria-label={`View details about ${title}`}
			>
				<div className="relative overflow-hidden rounded-2xl border border-zinc-300 h-56 sm:h-40 md:h-32">
					<Image
						src={ImagUrl}
						alt={`Thumbnail of ${title}`}
						fill
						sizes="(max-width: 639px) 90vw, (min-width: 640px) 40vw, (min-width: 1024px) 10vw"
						style={{ width: "100%", height: "100%", objectFit: "cover" }}
					/>
				</div>
			</Link>

			<figcaption className="font-semibold text-sm mt-2 flex items-center gap-1 group-hover:text-zinc-800">
				<Link href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
					{title}
					<svg
						width={14}
						height={14}
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
						/>
					</svg>
				</Link>
			</figcaption>
		</figure>
	);
}

export function SiteCardWrapper() {
	return (
		<section>
			<h2 className="text-xl font-extrabold text-zinc-800">What I build</h2>
			<div className="mt-4 grid gap-4 sm:grid-cols-[repeat(auto-fill,minmax(14rem,1fr))]">
				<Card
					title="Landshelf"
					ImagUrl="https://d2onzwh13dgj79.cloudfront.net/RQe8N9tGywukWcXNUH0AcWBihM.png"
					url="https://landshelf.com"
				/>
				<Card
					title="QR Generator"
					ImagUrl="https://d2onzwh13dgj79.cloudfront.net/fwM1GUQXjHSnfgTN2odxIZcEgT.png"
					url="https://qr-code-generator-gray-pi.vercel.app"
				/>

				<Card
					title="Carding Garden"
					ImagUrl="https://d2onzwh13dgj79.cloudfront.net/z4SWVMnbTuEfixei9TihhHoYlK.png"
					url="https://carding-garden.vercel.app"
				/>

				<Card
					title="Lorem Bank"
					ImagUrl="https://d2onzwh13dgj79.cloudfront.net/ZlQYv47JdLXbP1VGRwCxXV6kHy.png"
					url="https://lorembank.vercel.app"
				/>
			</div>
		</section>
	);
}
