import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import Card from "@/components/card";

export default function Home() {
	return (
		<>
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
			<section className="py-64">
				<div className="max-w-6xl mx-auto w-full min-h-[50vh] px-5">
					<h3 className="font-black text-6xl text-emerald-700">Guides</h3>
					<div className="grid grid-cols-2 gap-4 h-full mt-10">
						<Card
							title="Installation"
							description="Learn how to get up and running with UTSA STEM Craft!"
							buttonText="Visit"
							link="https://stemcraft.xyz/install"
						/>
						<Card
							title="Factions"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam, nulla nec dignissim iaculis, enim nisi tincidunt odio, a varius ex lacus nec ligula. "
							buttonText="Visit"
							link="https://google.com"
						/>
						<Card
							title="Mod List"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam, nulla nec dignissim iaculis, enim nisi tincidunt odio, a varius ex lacus nec ligula. "
							buttonText="Visit"
							link="https://google.com"
						/>
						<Card
							title="Resources"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam, nulla nec dignissim iaculis, enim nisi tincidunt odio, a varius ex lacus nec ligula. "
							buttonText="Visit"
							link="https://google.com"
						/>
					</div>
				</div>
			</section>
			<footer className="bg-[#179BD5] w-full h-20 mb-10 flex items-center justify-center flex-col">
				<p className="font-bold text-white">Made with ♥ & {"</>"} @ ACM UTSA</p>
				<p className="font-bold text-white">
					© The Association for Computing Machinery at UTSA 2023. All Rights Reserved.
				</p>
			</footer>
		</>
	);
}
