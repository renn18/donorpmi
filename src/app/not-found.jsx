"use client"

import Link from "next/link"

const Page = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-4 flex-col">
                {/* <FileSearch size={32} className="text-color-accent"/> */}
                <h3 className="text-color-red text-4xl font-bold">NOT FOUND</h3>
                <Link href="/" className="text-color-dark hover:text-color-red transition-all underline">Kembali</Link>
            </div>
        </div>
    )
}

export default Page