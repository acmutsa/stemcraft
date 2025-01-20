"use client";

import { useState } from "react";
import { FaCheck, FaCopy } from "react-icons/fa";

export const CopyButton = () => {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		await navigator.clipboard.writeText("play.stemcraft.xyz");
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<button
			onClick={handleCopy}
			className="rounded-full border-2 border-white hover:bg-white/10 transition-all duration-200 text-white font-bold px-5 py-2 flex gap-x-2 items-center"
		>
			play.stemcraft.xyz
			{copied ? <FaCheck className="w-4 h-4" /> : <FaCopy className="w-4 h-4" />}
		</button>
	);
};
