import Link from "next/link";
import Button from "./Button";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
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
          <Link href="/about" className="hover:text-white transition-color">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition-color">
            Contact
          </Link>
        </div>
        <div>
          {!session ? (
            <Button
              href="/users/login"
              placeholder="Sign in"
              color="secondary"
            />
          ) : (
            <Button
              href="/users/profile"
              placeholder="Profile"
              color="secondary"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
