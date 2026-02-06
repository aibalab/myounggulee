import {
    ArrowRight,
    Brain,
    Database,
    TrendingUp,
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

const getIcon = (title) => {
    const t = title.toLowerCase();
    if (t.includes('agentic')) return <Bot className="h-8 w-8 text-white" />;
    if (t.includes('generative')) return <Sparkles className="h-8 w-8 text-white" />;
    if (t.includes('marketing')) return <BarChart3 className="h-8 w-8 text-white" />;
    if (t.includes('strategic') || t.includes('is')) return <Network className="h-8 w-8 text-white" />;
    if (t.includes('forecasting')) return <LineChart className="h-8 w-8 text-white" />;
    if (t.includes('recommender')) return <Target className="h-8 w-8 text-white" />;
    if (t.includes('decision')) return <Cpu className="h-8 w-8 text-white" />;
    if (t.includes('ai') || t.includes('analytics')) return <Brain className="h-8 w-8 text-white" />;
    return <Users className="h-8 w-8 text-white" />;
};

const Home = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-900 text-white py-24 sm:py-32">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{
                        backgroundImage: `url("${labInfo.hero.bgImage.startsWith('http') ? labInfo.hero.bgImage : (import.meta.env.BASE_URL + '/' + labInfo.hero.bgImage).replace(/\/+/g, '/')}")`
                    }}
                ></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                        <span className="block text-primary-400">{labInfo.hero.title}</span>
                        <span className="block">{labInfo.hero.subtitle}</span>
                    </h1>
                    <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                        {labInfo.hero.description}
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                        <Link
                            to="/research"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-primary-400 hover:bg-primary-500 transition-colors"
                        >
                            Our Research <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link
                            to="/professor"
                            className="inline-flex items-center justify-center px-6 py-3 border border-slate-500 text-base font-medium rounded-md text-white hover:bg-slate-800 transition-colors"
                        >
                            Meet the Professor
                        </Link>
                    </div>
                </div>
            </section>

            {/* Research Areas Preview */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Research Areas
                        </h2>
                        <p className="mt-4 text-lg text-slate-500">
                            Driving business value through advanced analytics and AI
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {labInfo.researchAreas.map((area, idx) => (
                            <div key={idx} className="relative group bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-primary-100">
                                <div className="inline-flex items-center justify-center p-3 bg-primary-600 rounded-lg shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300">
                                    {getIcon(area.title)}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-700 transition-colors">
                                    {area.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {area.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
