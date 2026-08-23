import { GraduationCap, BookOpen, User, Building, Mail, Linkedin } from 'lucide-react';
import { labInfo } from '../data/labInfo';
import { useLanguage } from '../context/LanguageContext';

const SectionTitle = ({ children }) => (
    <h2 className="text-2xl font-semibold text-white mb-6 pb-3 border-b border-white/[0.08] flex items-center">
        <span className="bg-primary-500 w-1.5 h-7 mr-3 rounded-full"></span>
        {children}
    </h2>
);

const Professor = () => {
    const { t } = useLanguage();
    const { professor } = labInfo;

    return (
        <div className="bg-night-950 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-10">

                    {/* Sidebar / Profile Info */}
                    <div className="lg:col-span-4 mb-12 lg:mb-0">
                        <div className="sticky top-24 rounded-2xl border border-white/[0.06] bg-night-850 p-6">
                            <div className="max-w-48 mx-auto lg:mx-0 rounded-xl overflow-hidden bg-night-800 mb-6 border border-white/[0.08] shadow-lg">
                                {professor.photo ? (
                                    <img
                                        src={professor.photo.startsWith('http') ? professor.photo : (import.meta.env.BASE_URL + '/' + professor.photo).replace(/\/+/g, '/')}
                                        alt={professor.name}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full w-full text-slate-600 py-20">
                                        <User className="h-32 w-32" />
                                    </div>
                                )}
                            </div>

                            <h1 className="text-3xl font-semibold text-white tracking-tight">
                                {t({ ko: professor.nameKr, en: professor.name })}
                            </h1>
                            <p className="text-slate-500 font-medium">
                                {t({ ko: professor.name, en: professor.nameKr })}
                            </p>

                            <div className="mt-6 space-y-4 text-sm">
                                <div className="flex items-center text-slate-300">
                                    <Building className="h-5 w-5 mr-3 text-primary-400 shrink-0" />
                                    <span>{t(professor.title)}<br />{t(labInfo.university)}</span>
                                </div>
                                <div className="flex items-center text-slate-300">
                                    <BookOpen className="h-5 w-5 mr-3 text-primary-400 shrink-0" />
                                    <span>{t(labInfo.department)}</span>
                                </div>
                                <div className="flex items-center text-slate-300 pt-3 border-t border-white/[0.06]">
                                    <Mail className="h-5 w-5 mr-3 text-primary-400 shrink-0" />
                                    <a href={`mailto:${labInfo.email}`} className="hover:text-white transition-colors truncate" title={labInfo.email}>{labInfo.email}</a>
                                </div>
                                <div className="flex items-center text-slate-300">
                                    <GraduationCap className="h-5 w-5 mr-3 text-primary-400 shrink-0" />
                                    <a href={labInfo.googleScholar} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Google Scholar</a>
                                </div>
                                <div className="flex items-center text-slate-300">
                                    <Linkedin className="h-5 w-5 mr-3 text-primary-400 shrink-0" />
                                    <a href={labInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/[0.06]">
                                <h3 className="font-semibold text-white mb-4">
                                    {t({ ko: '연구 관심 분야', en: 'Research Interests' })}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {professor.interests.map(tag => (
                                        <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-300 border border-primary-500/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-14">

                        {/* Biography */}
                        <section>
                            <SectionTitle>{t({ ko: '소개', en: 'Biography' })}</SectionTitle>
                            <div className="max-w-none text-slate-400 space-y-4 leading-relaxed">
                                {professor.bio.map((p, i) => (
                                    <p key={i}>{t(p)}</p>
                                ))}
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <SectionTitle>{t({ ko: '학력', en: 'Education' })}</SectionTitle>
                            <div className="space-y-8">
                                {professor.education.map((edu, idx) => (
                                    <div key={idx} className="relative pl-8 border-l-2 border-white/[0.08]">
                                        <div className={`absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 ${idx === 0 ? 'bg-primary-500/30 border-primary-400' : 'bg-night-700 border-slate-600'}`}></div>
                                        <h3 className="text-lg font-semibold text-white">{edu.school}</h3>
                                        <p className={`${idx === 0 ? 'text-primary-300' : 'text-slate-300'} font-medium`}>{t(edu.degree)}</p>
                                        <p className="text-sm text-slate-500">{edu.period}</p>
                                        {edu.note && <p className="text-sm text-slate-400 mt-1">{t(edu.note)}</p>}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Experience */}
                        <section>
                            <SectionTitle>{t({ ko: '경력', en: 'Professional Experience' })}</SectionTitle>
                            <div className="grid grid-cols-1 gap-3">
                                {labInfo.professionalExperience.map((job, idx) => (
                                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-white/[0.06] bg-night-850 hover:border-primary-400/30 transition-colors">
                                        <div>
                                            <h3 className="font-semibold text-white">{t(job.org)}</h3>
                                            <p className="text-slate-400 text-sm">{t(job.title)}</p>
                                        </div>
                                        <span className="text-xs font-semibold text-primary-300 bg-primary-500/10 border border-primary-500/20 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                                            {job.period}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Service */}
                        <section>
                            <SectionTitle>{t({ ko: '학술 활동', en: 'Academic Service' })}</SectionTitle>
                            <ul className="list-disc pl-5 space-y-2 text-slate-400">
                                {labInfo.academicService.map((item, idx) => (
                                    <li key={idx}>
                                        <strong className="text-slate-200">{t(item.label)}:</strong> {t(item.text)}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Professor;
