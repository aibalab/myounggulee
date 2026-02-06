import { FileText, Download } from 'lucide-react';

const CV = () => {
    // Extracted link
    const cvLink = "https://docs.google.com/document/d/1T1RuPHsVFsxrHhkJid1FIPr-6S6SmdSf/edit?usp=drive_link&ouid=109667819159317009117&rtpof=true&sd=true";

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mx-auto h-24 w-24 bg-primary-50 rounded-full flex items-center justify-center mb-8">
                    <FileText className="h-12 w-12 text-primary-600" />
                </div>

                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-6">
                    Curriculum Vitae
                </h1>

                <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12">
                    View detailed academic and professional history, including full publication list, talks, and awards.
                </p>

                <a
                    href={cvLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all hover:scale-105"
                >
                    <Download className="-ml-1 mr-3 h-5 w-5" />
                    Download / View CV
                </a>
            </div>
        </div>
    );
};

export default CV;
