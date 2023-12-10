import GuideMetaData from "@/components/GuideMetaData";

export default ({ children }: { children: React.ReactNode }) => (
	<GuideMetaData
		children={children}
		title="Example Guide"
		description="This is a example guide on how to do stuff and things."
	/>
);
