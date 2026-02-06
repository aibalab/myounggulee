import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 mt-auto">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Lab Info */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">
                            AIBA Lab
                        </h3>
                        <p className="text-base text-slate-500">
                            AI & Machine Learning for Business Analytics<br />
                            Konkuk University
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">
                            Contact
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <MapPin className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
                                <p className="text-sm text-slate-500">
                                    School of Business, Konkuk University<br />
                                    120 Neungdong-ro, Gwangjin-gu<br />
                                    Seoul 05029, South Korea
                                </p>
                            </div>
                            <div className="flex items-center">
                                <Mail className="h-5 w-5 text-primary-600 mr-2" />
                                <a href="mailto:myounggulee@konkuk.ac.kr" className="text-sm text-slate-500 hover:text-primary-700 transition-colors">
                                    myounggulee@konkuk.ac.kr
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">
                            Links
                        </h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://scholar.google.com/citations?user=Bq57hwYAAAAJ&hl=ko"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-primary-600 transition-colors"
                                title="Google Scholar"
                            >
                                Google Scholar
                            </a>
                            <span className="text-slate-300">|</span>
                            <a
                                href="https://kbs.konkuk.ac.kr/kbs/23961/subview.do"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-primary-600 transition-colors"
                                title="Konkuk University Home"
                            >
                                Konkuk Home
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-slate-200 pt-8">
                    <p className="text-base text-center text-slate-400">
                        &copy; {new Date().getFullYear()} AIBA Lab, Konkuk University. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
