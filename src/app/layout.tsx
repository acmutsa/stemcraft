import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "UTSA STEM Craft",
	description: "A semi STEM-focussed Minecraft server for UTSA students",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={"font-sans bg-white"}>{children}</body>
		</html>
	);
}
