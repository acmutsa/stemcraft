import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt, FaCheck, FaCopy } from "react-icons/fa";
import Card from "@/components/card";
import { get } from "@vercel/edge-config";
import type { GuideRecord } from "@/types/edge";
import GuideItem from "@/components/GuideItem";
import { CopyButton } from "@/components/CopyButton";

export default async function Page() {
	const guides = (await get("guides")) as GuideRecord;
	const announcement = await get("announcement");
	console.log(announcement);
	return (
		<>
			{announcement && typeof announcement === "string" ? (
				<div className="w-full max-w-screen bg-white text-emerald-800 py-2">
					<div className="max-w-6xl mx-auto px-5 text-center font-bold">
						{announcement}
					</div>
				</div>
			) : null}
			<main className="bg-emerald-700 h-full text-white px-5">
				<div className="max-w-6xl mx-auto w-full min-h-[75vh] grid grid-cols-2">
					<div className="flex flex-col justify-center">
						<h2 className="font-bold text-3xl">Welcome to</h2>
						<h1 className="font-black text-6xl">UTSA STEM Craft</h1>
						<div className="flex gap-2 gap-x-4 mt-10">
							<Link href={"/install"}>
								<button className="rounded-full bg-white hover:bg-gray-200 transition-all duration-200 text-emerald-700 font-bold px-5 py-2 flex gap-x-1 items-center">
									Install Guide
									<FaArrowRight />
								</button>
							</Link>
							<CopyButton />
							<Link
								href={"https://discord.stemcraft.xyz"}
								className="flex items-center gap-1 hover:underline font-light"
							>
								Join the Discord <FaExternalLinkAlt />
							</Link>
						</div>
						<p className="mt-20">
							Powered by{" "}
							<Link href={"https://acmutsa.org/"} className="underline">
								ACM UTSA
							</Link>{" "}
							and{" "}
							<Link
								href={"https://vercel.com/?utm_source=ACM%20UTSA&utm_campaign=oss"}
								className="underline"
							>
								Vercel
							</Link>{" "}
							▲
						</p>
					</div>
					<div className="flex justify-center items-center flex-col w-full">
						<div className="w-full aspect-square relative floating max-w-[400px]">
							<Image
								src={"/img/mineblock.png"}
								alt="A Mincraft Block with the text Stem Craft"
								layout={"fill"}
								objectFit={"contain"}
							/>
						</div>
					</div>
				</div>
			</main>
			<section className="py-64" id="links">
				<div className="max-w-6xl mx-auto w-full min-h-[50vh] px-5">
					<h3 className="font-black text-6xl text-emerald-700">Quick Links</h3>
					<div className="grid grid-cols-2 gap-4 h-full mt-10">
						<Card
							title="Installation"
							description="Learn how to get up and running with UTSA STEM Craft!"
							buttonText="Visit"
							link="https://stemcraft.xyz/install"
						/>
						<Card
							title="Factions"
							description="Learn more about factions on the server and what they entail."
							buttonText="Visit"
							link="/guide/factions"
						/>
						<Card
							title="Mod List"
							description="View the Modlist for the server."
							buttonText="Visit"
							link="/guide/mods"
						/>
						{/* <Card
							title="Voice Chat"
							description="Learn how Proximity Voice Chat works on the server."
							buttonText="Visit"
							link="/guide/voice"
						/> */}
					</div>
				</div>
			</section>
			<section className="py-64 bg-emerald-700" id="guides">
				<div className="max-w-6xl mx-auto w-full min-h-[50vh] px-5">
					<h3 className="font-black text-6xl text-white">Guides</h3>
					<div className="grid grid-cols-1 mt-20">
						<div className="border-b-white border-b grid grid-cols-5 text-white py-2 font-bold">
							<div>Title</div>
							<div className="col-span-3">Description</div>
							<div>View</div>
						</div>
						{Object.entries(guides).map(([key, data]) => (
							<GuideItem
								key={data.title}
								title={data.title}
								description={data.description}
								link={data.url}
							/>
						))}
					</div>
				</div>
			</section>
			<footer className="bg-[#179BD5] w-full h-20 flex items-center justify-center flex-col">
				<p className="font-bold text-white">Made with ♥ & {"</>"} @ ACM UTSA</p>
				<p className="font-bold text-white">
					© The Association for Computing Machinery at UTSA 2025. All Rights Reserved.
				</p>
			</footer>
		</>
	);
}

export const runtime = "edge";
export const revalidate = 60;
