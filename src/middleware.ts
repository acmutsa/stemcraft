import { NextResponse, NextRequest } from "next/server";
import { has, get } from "@vercel/edge-config";
import { GuideRecord, RedirectRecord } from "@/types/edge";

export async function middleware(req: NextRequest) {
	const path = req.nextUrl.pathname;
	const redirects = (await get("redirects")) as RedirectRecord;
	const guides = (await get("guides")) as GuideRecord;

	if (Object.keys(redirects).includes(path)) {
		return NextResponse.redirect(new URL(redirects[path]));
	}
	if (path.startsWith("/guide/") && Object.keys(guides).includes(path.replace("/guide/", ""))) {
		return NextResponse.redirect(new URL(guides[path.replace("/guide/", "")].url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
