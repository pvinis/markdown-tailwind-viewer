"use client"

import { MDRenderer } from "@/MDRenderer"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function CustomPage() {
	const searchParams = useSearchParams()
	const url = searchParams.get("u")
	/// make it so url is restricted, so i don t fire random requests

	if (!url)
		return (
			<>
				<h2>Wrong url</h2>
				<p>
					Try going to the <Link href="/intro.md">intro</Link> instead 🙂
				</p>
			</>
		)

	return <MDRenderer url={url} />
}

//// add robots file

/// choose a font
