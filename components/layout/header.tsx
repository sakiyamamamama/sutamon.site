import Link from "next/link"
import { APP_NAME } from "@/constants/appInfo"

const Header = () => {
  return (
    <>
        <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo / App name */}
                <Link href="/#top" className="text-2xl font-bold text-indigo-600">
                {APP_NAME}
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
                <Link href="/#top" className="hover:text-indigo-600 transition">
                    Home
                </Link>
                <Link href="/#about" className="hover:text-indigo-600 transition">
                    About
                </Link>
                <Link href="/#features" className="hover:text-indigo-600 transition">
                    Features
                </Link>
                </nav>

                {/* CTA (optional) */}
                <div className="hidden md:block">
                <a
                    href="#"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
                >
                    Download
                </a>
                </div>
            </div>
        </header>
         <div className="top-0 left-0 w-full opacity-0">
            <div className="container py-4">
                <p className="text-2xl ">
                    {APP_NAME}
                </p>
            </div>
        </div>
    </>
  )
}

export default Header
