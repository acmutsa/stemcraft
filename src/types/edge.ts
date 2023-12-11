interface GuideKey {
	title: string;
	description: string;
	url: string;
}

export type GuideRecord = Record<string, GuideKey>;
export type RedirectRecord = Record<string, string>;
