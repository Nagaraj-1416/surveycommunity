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

                    <div className="-mr-2 flex flex justify-between w-full items-center sm:hidden">
                        <div className="flex gap-3">
                            <a
                                href="https://www.instagram.com/i_surveyor.in/"
                                target="_blank"
                            >
                                <CiInstagram
                                    className="h-9 mt-2 w-auto relative"
                                    style={{ color: "#012970" }}
                                />
                            </a>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=careisurveyor@gmail.com"
                                target="_blank"
                            >
                                <CiMail
                                    className="h-9 mt-2 w-auto relative"
                                    style={{ color: "#012970" }}
                                />
                            </a>
                        </div>
                        <div>
                            <Link href="/">
                                <AiOutlineHome
                                    className="h-9 mr-7 w-auto relative"
                                    style={{ color: "#012970" }}
                                />
                            </Link>
                        </div>
                    </div>
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
