import React from 'react'
import logoSmall from '../images/SMBLogoSmall.svg'
import '../css/Nav.css'

export default function Nav() {
    return (
        <nav className="bg-transparent">
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-auto">
                    <div className="ml-52 flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className=" items-center">
                            <img
                                className="hidden lg:block h-24"
                                src={`${logoSmall}`}
                                alt="Small SMB Logo"
                            />
                        </div>
                        <div className="hidden sm:block sm:ml-6 self-center">
                            <div className="flex space-x-8">
                                <a
                                    href="/"
                                    className="navLink text-slate-300 py-2 rounded-md text-md font-medium"
                                >
                                    Home
                                </a>

                                <a
                                    href="/"
                                    className="navLink text-slate-300 py-2 rounded-md text-md font-medium"
                                >
                                    Services
                                </a>

                                <a
                                    href="/"
                                    className="navLink text-slate-300 py-2 rounded-md text-md font-medium"
                                >
                                    About
                                </a>

                                <a
                                    href="/"
                                    className="navLink text-slate-300 py-2 rounded-md text-md font-medium"
                                >
                                    Locations
                                </a>
                                <a
                                    href="/"
                                    className="navLink text-slate-300 py-2 rounded-md text-md font-medium"
                                >
                                    FAQ
                                </a>
                                <a
                                    href="/"
                                    className="text-slate-300 py-2 rounded-md text-md font-medium"
                                >
                                    Blog
                                </a>
                                <a
                                    href="www.google.com"
                                    className="navLink text-slate-300 py-2 rounded-md text-md font-medium"
                                >
                                    Employment
                                </a>
                                <a
                                    href="/"
                                    className="navLink text-slate-300 py-2 rounded-md text-md font-medium"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="ml-3 relative">
                            <a
                                href="/get-quote"
                                className="bg-white text-orange hover:text-white border border-orange hover:bg-orange text-lg rounded-full px-3 py-2"
                            >
                                Get Quote
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a
                        href="www.google.com"
                        className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                        aria-current="page"
                    >
                        Dashboard
                    </a>

                    <a
                        href="www.google.com"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Team
                    </a>

                    <a
                        href="www.google.com"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Projects
                    </a>

                    <a
                        href="www.google.com"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Calendar
                    </a>
                </div>
            </div> */}
        </nav>
    )
}
