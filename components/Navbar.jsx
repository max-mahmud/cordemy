import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="h-20 bg-black text-gray-400 flex items-center">
            <div className="wrapper flex justify-between items-center overflow-hidden">
                <Link href="/" className="text-white font-semibold">
                    Cordemy
                </Link>

                <div className="flex gap-5">
                    <Link href="/" className="hover:text-white transition-color">
                        Home
                    </Link>
                    <Link href="/courses" className="hover:text-white transition-color">
                        Courses
                    </Link>
                    <Link href="/orders" className="hover:text-white transition-color">
                        Orders
                    </Link>

                    <Link href="/about" className="hover:text-white transition-color">
                        About
                    </Link>
                    <Link href="/contact" className="hover:text-white transition-color">
                        Contact
                    </Link>
                </div>
                <div>
                    <Link href="/" className="hover:text-white transition-color">
                        Sing In
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar