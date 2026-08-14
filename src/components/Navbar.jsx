import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import { labInfo } from '../data/labInfo';
import DaisyMark from './DaisyMark';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Professor', href: '/professor' },
        { name: 'Research', href: '/research' },
        { name: 'Projects', href: '/projects' },
        { name: 'Teaching', href: '/teaching' },
        { name: 'CV', href: '/cv' },
    ];

    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <nav className="sticky top-0 z-50 bg-night-950/95 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo / Brand */}
                    <Link to="/" className="flex items-center gap-2.5 text-white">
                        <DaisyMark className="h-7 w-7" />
                        <span className="font-semibold text-lg tracking-tight leading-none">
                            DAISY Lab
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${isActive(item.href)
                                    ? 'text-white'
                                    : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a
                            href={`mailto:${labInfo.email}`}
                            className="ml-4 inline-flex items-center gap-1.5 rounded-full bg-primary-500 hover:bg-primary-400 text-white text-sm font-medium px-4 py-1.5 transition-colors"
                        >
                            <Mail className="h-3.5 w-3.5" />
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-night-900 border-b border-white/5">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(item.href)
                                    ? 'bg-white/5 text-white'
                                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a
                            href={`mailto:${labInfo.email}`}
                            className="block px-3 py-2 rounded-md text-base font-medium text-primary-300 hover:bg-white/5"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
