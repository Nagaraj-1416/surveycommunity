import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { CiHome } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { CiInstagram } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen" style={{ backgroundColor: "#F6F6FE" }}>
            <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                {/*<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                            </Link>
                        </div>

                        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            <a
                                href="https://www.instagram.com/i_surveyor.in/"
                                target="_blank"
                            >
                                <CiInstagram
                                    className="h-9 mt-5 w-auto relative"
                                    style={{ color: "#012970" }}
                                />
                            </a>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=careisurveyor@gmail.com"
                                target="_blank"
                            >
                                <CiMail
                                    className="h-9 mt-5 w-auto relative"
                                    style={{ color: "#012970" }}
                                />
                            </a>

                            {/*<NavLink href={route('communitypost')} active={route().current('communitypost')}>
                                    Community Post
                                </NavLink>*/}
                            {/*<NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    Dashboard
                                </NavLink>*/}
                        </div>
                    </div>

                    <div className="hidden sm:flex sm:items-center sm:ml-6">
                        <a href="/">
                            <AiOutlineHome
                                className="h-9 mr-7 w-auto relative"
                                style={{ color: "#012970" }}
                            />
                        </a>
                    </div>

                    <div className="-mr-2 flex items-center sm:hidden">
                        <Link href="/">
                            <AiOutlineHome
                                className="h-9 mr-7 w-auto relative"
                                style={{ color: "#012970" }}
                            />
                        </Link>
                        {/*<button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center mr-5 justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>*/}
                    </div>
                </div>
                {/*</div>*/}

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    {/*<div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </ResponsiveNavLink>
                    </div>*/}

                    {/*<div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800 dark:text-gray-200">{user.name}</div>
                            <div className="font-medium text-sm text-gray-500">{user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>*/}
                </div>
            </nav>

            {header && (
                <header className="bg-white dark:bg-gray-800 shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main className="flex">
                <div
                    className="w-full"
                    style={{
                        maxHeight: `calc(100vh - 80px)`,
                        overflowY: "auto",
                    }}
                >
                    <div>{children}</div>
                </div>
            </main>
        </div>
    );
}
