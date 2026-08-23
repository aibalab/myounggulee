import { Lock } from 'lucide-react';

// Client brand mark shown on the left of each project card
const BrandTile = ({ brand }) => (
    <div className="h-16 w-24 shrink-0 rounded-lg border border-white/[0.08] bg-night-800 flex flex-col items-center justify-center text-center px-2">
        {brand === 'witz' && (
            <span className="text-sm font-bold text-white">Witz<span className="text-primary-300">.ai</span></span>
        )}
        {brand === 'bugs' && (
            <>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-slate-400">NHN</span>
                <span className="text-base font-extrabold text-[#ff3348] leading-tight">벅스</span>
            </>
        )}
        {brand === 'nd' && (
            <>
                <Lock className="h-5 w-5 text-slate-500 mb-1" />
                <span className="text-[9px] font-medium tracking-tight text-slate-500 leading-none">Non-disclosure</span>
            </>
        )}
    </div>
);

const Projects = () => {
    const projects = [

        {
            period: '2023.07 - 2023.12',
            brand: 'witz',
            title: 'Character IP valuation & Recommender System (Deep Learning)',
            title_kr: '딥러닝 모형을 사용한 캐릭터 이미지 지적재산권 가치 평가 모델 및 추천 시스템 개발',
            desc: 'Influencer clustering and valuation model based on Deep Embedded Clustering (DEC)',
            desc_kr: 'Deep Embedded Clustering (DEC) 기반 인플루언서 군집화 및 가치 평가 모델 개발'
        },
        {
            period: '2018.05 - 2018.12',
            brand: 'nd',
            title: 'Asset Allocation Strategies & Decision System (Macro Index)',
            title_kr: '매크로 지표 예측 모델 기반 자산 배분 전략 수립 및 의사 결정 체계 구축 자문',
            desc: 'Improving asset management decision-making system',
            desc_kr: '자산운용 의사결정 시스템 개선 프로젝트 참여'
        },
        {
            period: '2016.01 - 2018.05',
            brand: 'nd',
            title: 'Financial Derivative Pricing & Econ Assumption Management System',
            title_kr: '머신러닝 및 금융 공학 이론을 기반으로 한 금융 파생 상품 가치 평가 및 경제적 가정 관리 시스템 구축',
            desc: 'Interest rate/stock price prediction based on Hull-White, Vasicek, Black–Scholes models',
            desc_kr: 'Hull-White, Vasicek 모델 기반 이자율 예측, Black–Scholes 모델 기반 주가 예측 등'
        },
        {
            period: '2013',
            brand: 'bugs',
            title: 'Music Recommendation System & Customer Clustering',
            title_kr: '머신러닝과 유저 인구통계정보 및 음악 청취 이력을 기반으로 한 고객 군집화 및 음악 추천 시스템 설계',
            desc: 'Brand image survey & competitive strategy proposal for Bugs!',
            desc_kr: '벅스 브랜드 이미지 설문조사 및 음원 플랫폼 시장 내 경쟁 전략 제안'
        }
    ];

    return (
        <div className="bg-night-950 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-400 mb-4">Projects</p>
                    <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-metal mb-4">
                        Industrial Projects
                    </h1>
                    <p className="text-lg text-slate-400">
                        We welcome industry collaborations utilizing data-driven approaches.
                    </p>
                    <div className="mt-4 inline-flex items-center rounded-full bg-primary-500/10 border border-primary-500/20 px-4 py-1.5 text-sm font-medium text-primary-300">
                        Industry collaborations are welcome!
                    </div>
                </div>

                <div className="relative border-l-2 border-white/[0.08] ml-4 md:ml-6 space-y-12">
                    {projects.map((project, idx) => (
                        <div key={idx} className="relative pl-8 md:pl-12">
                            {/* Dot */}
                            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary-500/30 border-2 border-primary-400 shadow-[0_0_12px_rgba(99,102,241,0.5)]"></div>

                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                <span className="text-sm font-bold text-primary-300 tracking-wide uppercase">
                                    {project.period}
                                </span>
                            </div>

                            <div className="bg-night-850 rounded-xl p-6 border border-white/[0.06] hover:border-primary-400/30 transition-colors flex flex-col sm:flex-row gap-5">
                                <BrandTile brand={project.brand} />
                                <div className="min-w-0">
                                    <div className="mb-4">
                                        <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                                        <p className="text-slate-500 text-sm">{project.title_kr}</p>
                                    </div>

                                    <div>
                                        <p className="mb-1 font-medium text-slate-300">{project.desc}</p>
                                        <p className="text-slate-500 text-sm">{project.desc_kr}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Projects;
