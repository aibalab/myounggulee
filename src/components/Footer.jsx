import { Mail, MapPin } from 'lucide-react';
import { labInfo } from '../data/labInfo';
import DaisyMark from './DaisyMark';

const Footer = () => {
    return (
        <footer className="bg-night-950 border-t border-white/5 mt-auto">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Lab Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-white">
                            <DaisyMark className="h-5 w-5" />
                            <h3 className="text-sm font-semibold tracking-wider uppercase">
                                {labInfo.name}
                            </h3>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            {labInfo.fullName}<br />
                            {labInfo.university}
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                            Contact
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <MapPin className="h-5 w-5 text-primary-400 mr-2 mt-0.5 shrink-0" />
                                <p className="text-sm text-slate-400">
                                    School of Business, Konkuk University<br />
                                    120 Neungdong-ro, Gwangjin-gu<br />
                                    Seoul 05029, South Korea
                                </p>
                            </div>
                            <div className="flex items-center">
                                <Mail className="h-5 w-5 text-primary-400 mr-2 shrink-0" />
                                <a href={`mailto:${labInfo.email}`} className="text-sm text-slate-400 hover:text-white transition-colors">
                                    {labInfo.email}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                            Links
                        </h3>
                        <div className="flex space-x-4 text-sm">
                            <a
                                href={labInfo.googleScholar}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-white transition-colors"
                                title="Google Scholar"
                            >
                                Google Scholar
                            </a>
                            <span className="text-slate-700">|</span>
                            <a
                                href={labInfo.univHome}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-white transition-colors"
                                title="Konkuk University Home"
                            >
                                Konkuk Home
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-white/5 pt-8">
                    <p className="text-sm text-center text-slate-500">
                        &copy; {new Date().getFullYear()} {labInfo.name}, {labInfo.university}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
