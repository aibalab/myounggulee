import {
    ArrowRight,
    Brain,
    Users,
    Bot,
    Sparkles,
    BarChart3,
    Network,
    LineChart,
    Target,
    Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { labInfo } from '../data/labInfo';
import DaisyMark from '../components/DaisyMark';

const getIcon = (title) => {
    const t = title.toLowerCase();
    const cls = "h-5 w-5 text-primary-300";
    if (t.includes('agentic')) return <Bot className={cls} />;
    if (t.includes('generative')) return <Sparkles className={cls} />;
    if (t.includes('marketing')) return <BarChart3 className={cls} />;
    if (t.includes('strategic') || t.includes('is')) return <Network className={cls} />;
    if (t.includes('forecasting')) return <LineChart className={cls} />;
    if (t.includes('recommender')) return <Target className={cls} />;
    if (t.includes('decision')) return <Cpu className={cls} />;
    if (t.includes('ai') || t.includes('analytics')) return <Brain className={cls} />;
    return <Users className={cls} />;
};

// Career affiliations rendered as a Better Stack style trust strip
const affiliations = [
    { name: 'KAIST', className: 'font-extrabold tracking-[0.2em]' },
    { name: 'KONKUK UNIV.', className: 'font-bold tracking-widest' },
    { name: 'KPMG', className: 'font-extrabold tracking-[0.15em]' },
    { name: 'KEARNEY', className: 'font-semibold tracking-[0.3em]' },
    { name: 'Deloitte.', className: 'font-bold tracking-tight normal-case text-base sm:text-lg' },
    { name: 'SAMSUNG', className: 'font-bold tracking-[0.25em]' },
];

const Home = () => {
    return (
        <div className="bg-night-950">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-night-950">
                {/* Blueprint grid, faded at the edges by the vignette */}
                <div className="absolute inset-0 bg-hero-grid" aria-hidden="true"></div>
                <div className="absolute inset-0 hero-vignette" aria-hidden="true"></div>

                {/* Radial glow behind the headline */}
                <div
                    className="absolute left-1/2 top-[-14rem] h-[34rem] w-[64rem] -translate-x-1/2 rounded-full opacity-60"
                    style={{ background: 'radial-gradient(closest-side, rgba(99,102,241,0.16), transparent)' }}
                    aria-hidden="true"
                ></div>

                {/* Diagonal light beams */}
                <div className="beam w-[46rem] left-[-14rem] top-[16rem] rotate-[32deg]" aria-hidden="true"></div>
                <div className="beam w-[36rem] left-[-10rem] top-[26rem] rotate-[32deg] opacity-60" aria-hidden="true"></div>
                <div className="beam w-[46rem] right-[-14rem] top-[14rem] -rotate-[32deg]" aria-hidden="true"></div>
                <div className="beam w-[34rem] right-[-8rem] top-[25rem] -rotate-[32deg] opacity-60" aria-hidden="true"></div>

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-20 text-center">
                    {/* Centered lab mark */}
                    <div className="flex items-center justify-center gap-2.5 text-white mb-10">
                        <DaisyMark className="h-8 w-8" />
                        <span className="text-lg font-semibold tracking-tight">DAISY Lab</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.05]">
                        <span className="block text-metal">{labInfo.hero.title}</span>
                        <span className="block text-metal-dim">{labInfo.hero.subtitle}</span>
                    </h1>

                    <p className="mt-8 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        {labInfo.hero.description}
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            to="/research"
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-500 hover:bg-primary-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(99,102,241,0.35)] transition-colors"
                        >
                            Explore Research <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            to="/professor"
                            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] px-6 py-3 text-sm font-semibold text-slate-200 transition-colors"
                        >
                            Meet the Professor
                        </Link>
                    </div>

                    <p className="mt-6 text-sm text-slate-500">
                        Prospective students & industry partners —{' '}
                        <a href={`mailto:${labInfo.email}`} className="text-slate-300 underline underline-offset-4 decoration-slate-600 hover:text-white transition-colors">
                            get in touch
                        </a>
                    </p>

                    {/* Affiliation strip */}
                    <div className="mt-20 border-t border-white/5 pt-8">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-600 mb-6">
                            Experience & collaboration across
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-slate-600">
                            {affiliations.map(a => (
                                <span key={a.name} className={a.className}>{a.name}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Areas Preview */}
            <section className="py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-400 mb-4">
                            Research
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-metal">
                            What we work on
                        </h2>
                        <p className="mt-4 text-lg text-slate-400">
                            Driving business value through advanced analytics and AI
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {labInfo.researchAreas.map((area, idx) => (
                            <div
                                key={idx}
                                className="group rounded-2xl border border-white/[0.06] bg-night-850 p-7 transition-all duration-300 hover:border-primary-400/30 hover:bg-night-800 hover:shadow-[0_0_40px_rgba(99,102,241,0.12)]"
                            >
                                <div className="inline-flex items-center justify-center h-11 w-11 rounded-lg border border-white/[0.06] bg-primary-500/10 mb-5 transition-transform duration-300 group-hover:scale-110">
                                    {getIcon(area.title)}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {area.title}
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {area.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join CTA */}
            <section className="pb-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-night-900 px-6 py-16 sm:px-16 text-center">
                        <div
                            className="absolute left-1/2 top-[-10rem] h-[20rem] w-[36rem] -translate-x-1/2 rounded-full"
                            style={{ background: 'radial-gradient(closest-side, rgba(99,102,241,0.22), transparent)' }}
                            aria-hidden="true"
                        ></div>
                        <div className="relative">
                            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-metal mb-4">
                                Join DAISY Lab
                            </h2>
                            <p className="text-slate-400 max-w-xl mx-auto mb-8">
                                We are always looking for motivated students and industry partners
                                interested in data, AI systems, and business analytics.
                            </p>
                            <a
                                href={`mailto:${labInfo.email}`}
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-500 hover:bg-primary-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(99,102,241,0.35)] transition-colors"
                            >
                                Get in touch <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
