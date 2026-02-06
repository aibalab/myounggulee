import { GraduationCap, Briefcase, BookOpen, User, Building } from 'lucide-react';
import { labInfo } from '../data/labInfo';

const Professor = () => {
    const { professor } = labInfo;

    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">

                    {/* Sidebar / Profile Info */}
                    <div className="lg:col-span-4 mb-12 lg:mb-0">
                        <div className="sticky top-24">
                            <div className="max-w-48 mx-auto lg:mx-0 aspect-w-3 aspect-h-4 rounded-2xl overflow-hidden bg-slate-100 mb-6 shadow-lg border border-slate-200">
                                {professor.photo ? (
                                    <img
                                        src={professor.photo.startsWith('http') ? professor.photo : (import.meta.env.BASE_URL + '/' + professor.photo).replace(/\/+/g, '/')}
                                        alt={professor.name}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full w-full bg-slate-200 text-slate-400 py-20">
                                        <User className="h-32 w-32" />
                                    </div>
                                )}
                            </div>

                            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">{professor.name}</h1>
                            <p className="text-slate-500 font-medium">{professor.nameKr}</p>

                            <div className="mt-6 space-y-4">
                                <div className="flex items-center text-slate-600">
                                    <Building className="h-5 w-5 mr-3 text-primary-600" />
                                    <span>{labInfo.professor.title.split('|')[0]}<br />{labInfo.university}</span>
                                </div>
                                <div className="flex items-center text-slate-600">
                                    <BookOpen className="h-5 w-5 mr-3 text-primary-600" />
                                    <span>{labInfo.department}</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-200">
                                <h3 className="font-semibold text-slate-900 mb-4">Research Interests</h3>
                                <div className="flex flex-wrap gap-2">
                                    {professor.interests.map(tag => (
                                        <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Biography */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center">
                                <span className="bg-primary-600 w-2 h-8 mr-3 rounded-sm"></span>
                                Biography
                            </h2>
                            <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                                {professor.bio.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200 flex items-center">
                                <span className="bg-primary-600 w-2 h-8 mr-3 rounded-sm"></span>
                                Education
                            </h2>
                            <div className="space-y-8">
                                {professor.education.map((edu, idx) => (
                                    <div key={idx} className="relative pl-8 border-l-2 border-slate-200">
                                        <div className={`absolute -left-[9px] top-0 h-4 w-4 rounded-full ${idx === 0 ? 'bg-primary-200 border-2 border-primary-600' : 'bg-slate-200 border-2 border-slate-400'}`}></div>
                                        <h3 className="text-lg font-bold text-slate-900">{edu.school}</h3>
                                        <p className={`${idx === 0 ? 'text-primary-700' : 'text-slate-700'} font-medium`}>{edu.degree}</p>
                                        <p className="text-sm text-slate-500">{edu.period}</p>
                                        {edu.note && <p className="text-sm text-slate-600 mt-1">{edu.note}</p>}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Experience */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200 flex items-center">
                                <span className="bg-primary-600 w-2 h-8 mr-3 rounded-sm"></span>
                                Professional Experience
                            </h2>
                            <div className="grid grid-cols-1 gap-4">
                                {labInfo.professionalExperience.map((job, idx) => (
                                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-primary-200 transition-colors">
                                        <div>
                                            <h3 className="font-bold text-slate-900">{job.org}</h3>
                                            <p className="text-slate-600 text-sm">{job.title}</p>
                                        </div>
                                        <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                                            {job.period}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Service */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200 flex items-center">
                                <span className="bg-primary-600 w-2 h-8 mr-3 rounded-sm"></span>
                                Academic Service
                            </h2>
                            <ul className="list-disc pl-5 space-y-2 text-slate-600">
                                <li><strong>Editorial Service:</strong> 정보통신정책학회 편집위원, (전) 대한경영학회 편집위원</li>
                                <li><strong>Peer Review:</strong> Electronic Commerce Research, Journal of Business Research, APJIS, etc.</li>
                                <li><strong>Membership:</strong> 한국경영정보학회 종신회원, 정보통신정책학회 종신회원</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Professor;
