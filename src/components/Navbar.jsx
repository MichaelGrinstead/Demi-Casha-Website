import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex flex-row gap-10 text-black">
                <Link href={"/Tour"}>Tour</Link>
                <Link href={"/About"}>About</Link>
                <Link href={"/Video"}>Video</Link>
        </nav>
    )
}