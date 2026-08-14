import { FileText, Download } from 'lucide-react';
import { labInfo } from '../data/labInfo';

const CV = () => {
    return (
        <div className="relative overflow-hidden bg-night-950 py-24 sm:py-32">
            {/* Radial glow */}
            <div
                className="absolute left-1/2 top-[-12rem] h-[26rem] w-[48rem] -translate-x-1/2 rounded-full opacity-70"
                style={{ background: 'radial-gradient(closest-side, rgba(99,102,241,0.16), transparent)' }}
                aria-hidden="true"
            ></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mx-auto h-24 w-24 rounded-2xl border border-white/[0.08] bg-primary-500/10 flex items-center justify-center mb-8">
                    <FileText className="h-12 w-12 text-primary-300" />
                </div>

                <h1 className="text-4xl sm:text-5xl font-semibold text-metal tracking-tight mb-6">
                    Curriculum Vitae
                </h1>

                <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
                    View detailed academic and professional history, including full publication list, talks, and awards.
                </p>

                <a
                    href={labInfo.cvLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-white bg-primary-500 hover:bg-primary-400 shadow-[0_0_32px_rgba(99,102,241,0.4)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-night-950 focus:ring-primary-500 transition-all hover:scale-105"
                >
                    <Download className="-ml-1 mr-3 h-5 w-5" />
                    Download / View CV
                </a>
            </div>
        </div>
    );
};

export default CV;
