export default function GuideLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex items-center flex-col w-full max-w-[500px] mx-auto">
			<nav className="w-full bg-emerald-700 rounded-full h-16 mt-2 grid grid-cols-2 py-2 text-white px-5 max-w-[700px]">
				<div className="flex items-center h-full">
					<p className="font-black text-2xl">UTSA STEM Craft</p>
				</div>
			</nav>
			<div>{children}</div>
		</div>
	);
}
