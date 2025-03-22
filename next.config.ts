import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "d2onzwh13dgj79.cloudfront.net",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
