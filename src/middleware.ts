import { NextResponse, NextRequest } from "next/server";
import { has, get } from "@vercel/edge-config";
import { GuideRecord, RedirectRecord } from "@/types/edge";

export async function middleware(req: NextRequest) {
	console.log("middleware called");
	const path = req.nextUrl.pathname;
	const redirects = (await get("redirects")) as RedirectRecord;
	const guides = (await get("guides")) as GuideRecord;
	console.log(Object.keys(redirects));
	console.log(path);

	if (Object.keys(redirects).includes(path)) {
		console.log("doing redirect");
		return NextResponse.redirect(new URL(redirects[path]));
	}
	if (path.startsWith("/guide/") && Object.keys(guides).includes(path.replace("/guide/", ""))) {
		console.log("doing guide");
		return NextResponse.redirect(new URL(guides[path].url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
