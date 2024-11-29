import React from "react";
import Link from "next/link";

<nav></nav>;
const Nav = () => {
    return (
        <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
                <li>
                    <Link
                        href="/"
                        className="text-gray-500 transition hover:text-gray-500/75"
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        href="/about"
                        className="text-gray-500 transition hover:text-gray-500/75"
                    >
                        About
                    </Link>
                </li>

                <li>
                    <Link
                        href="/contact"
                        className="text-gray-500 transition hover:text-gray-500/75"
                    >
                        Contact
                    </Link>
                </li>

                <li>
                    <Link
                        href="/studio"
                        className="text-gray-500 transition hover:text-gray-500/75"
                    >
                        Studio
                    </Link>
                </li>

                <li>
                    <Link
                        href="/equipment"
                        className="text-gray-500 transition hover:text-gray-500/75"
                    >
                        Equipment
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
