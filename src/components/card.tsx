import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface cardProps {
	title: string;
	description: string;
	link: string;
	buttonText: string;
}

export default function Card({ title, description, link, buttonText }: cardProps) {
	return (
		<div className="border-emerald-700 border-2 rounded w-full p-4 flex flex-col justify-between gap-2">
			<h1 className="text-3xl font-black text-emerald-700">{title}</h1>
			<p className="font-bold">{description}</p>
			<Link href={link}>
				<button className="rounded bg-emerald-700 font-bold mt-2 px-5 py-2 text-white flex gap-1 items-center">
					{buttonText}
					<FaArrowRight />
				</button>
			</Link>
		</div>
	);
}
