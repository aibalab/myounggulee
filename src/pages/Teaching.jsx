import { BookOpen } from 'lucide-react';
import { labInfo } from '../data/labInfo';
import { useLanguage } from '../context/LanguageContext';

const Teaching = () => {
    const { t } = useLanguage();
    const teachingData = labInfo.teaching;

    return (
        <div className="bg-night-950 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-400 mb-4">{t({ ko: '강의', en: 'Courses' })}</p>
                <h1 className="text-4xl font-semibold text-metal mb-12 tracking-tight flex items-center">
                    <BookOpen className="h-9 w-9 text-primary-400 mr-4" />
                    {t({ ko: '강의', en: 'Teaching' })}
                </h1>

                <div className="space-y-16">
                    {teachingData.map((inst, idx) => (
                        <section key={idx}>
                            <div className="border-b border-white/[0.08] pb-4 mb-8">
                                <h2 className="text-2xl font-semibold text-white">{t(inst.university)}</h2>
                                <p className="text-primary-300 font-medium">{inst.period}</p>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                {inst.courses.map((course, cIdx) => (
                                    <div key={cIdx} className="bg-night-850 rounded-xl p-6 border border-white/[0.06] hover:border-primary-400/30 transition-colors">
                                        <span className="inline-block px-2 py-1 bg-primary-500/10 text-xs font-semibold text-primary-300 rounded-md border border-primary-500/20 mb-3">
                                            {t(course.type)}
                                        </span>
                                        <h3 className="text-lg font-semibold text-white mb-2">{t(course.name)}</h3>
                                        <p className="text-slate-400 text-sm">{t(course.semester)}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Teaching;
