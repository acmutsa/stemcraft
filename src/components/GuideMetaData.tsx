interface GuideMetaDataProps {
	title: string;
	description: string;
	children: React.ReactNode;
}

export default function GuideMetaData({ children, title, description }: GuideMetaDataProps) {
	return (
		<div className="flex flex-col w-full max-w-[700px]">
			<h1 className="font-black text-6xl text-emerald-700 mt-[25vh]">{title}</h1>
			<h2 className="font-light text-2xl">{description}</h2>
			<div className="prose font-sans w-[500px] mt-24">{children}</div>
		</div>
	);
}
