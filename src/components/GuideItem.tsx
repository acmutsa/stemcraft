import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface GuideItemProps {
	title: string;
	description: string;
	link: string;
}

export default function GuideItem({ title, description, link }: GuideItemProps) {
	return (
		<div className="border-b-white border-b grid grid-cols-5 text-white py-2">
			<div className="flex items-center font-bold">{title}</div>
			<div className="col-span-3 flex items-center">{description}</div>
			<div>
				<Link href={link}>
					<button className="bg-white font-bold text-emerald-700 rounded px-5 py-1 flex items-center gap-1">
						View <FaArrowRight />
					</button>
				</Link>
			</div>
		</div>
	);
}
