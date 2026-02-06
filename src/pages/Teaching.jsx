import { BookOpen } from 'lucide-react';
import { labInfo } from '../data/labInfo';

const Teaching = () => {
    const teachingData = labInfo.teaching;

    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-12 tracking-tight flex items-center">
                    <BookOpen className="h-10 w-10 text-primary-600 mr-4" />
                    Teaching
                </h1>

                <div className="space-y-16">
                    {teachingData.map((inst, idx) => (
                        <section key={idx}>
                            <div className="border-b border-slate-200 pb-4 mb-8">
                                <h2 className="text-2xl font-bold text-slate-900">{inst.university}</h2>
                                <p className="text-primary-600 font-medium">{inst.period}</p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                {inst.courses.map((course, cIdx) => (
                                    <div key={cIdx} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-primary-200 transition-colors">
                                        <span className="inline-block px-2 py-1 bg-white text-xs font-semibold text-primary-700 rounded-md border border-slate-100 mb-3">
                                            {course.type}
                                        </span>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{course.name}</h3>
                                        <p className="text-slate-500 text-sm">{course.semester}</p>
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
