import { Briefcase } from 'lucide-react';

const Projects = () => {
    const projects = [

        {
            period: '2023.07 - 2023.12',
            title: 'Character IP valuation & Recommender System (Deep Learning)',
            title_kr: '딥러닝 모형을 사용한 캐릭터 이미지 지적재산권 가치 평가 모델 및 추천 시스템 개발',
            desc: 'Influencer clustering and valuation model based on Deep Embedded Clustering (DEC)',
            desc_kr: 'Deep Embedded Clustering (DEC) 기반 인플루언서 군집화 및 가치 평가 모델 개발'
        },
        {
            period: '2018.05 - 2018.12',
            title: 'Asset Allocation Strategies & Decision System (Macro Index)',
            title_kr: '매크로 지표 예측 모델 기반 자산 배분 전략 수립 및 의사 결정 체계 구축 자문',
            desc: 'Improving asset management decision-making system',
            desc_kr: '자산운용 의사결정 시스템 개선 프로젝트 참여'
        },
        {
            period: '2016.01 - 2018.05',
            title: 'Financial Derivative Pricing & Econ Assumption Management System',
            title_kr: '머신러닝 및 금융 공학 이론을 기반으로 한 금융 파생 상품 가치 평가 및 경제적 가정 관리 시스템 구축',
            desc: 'Interest rate/stock price prediction based on Hull-White, Vasicek, Black–Scholes models',
            desc_kr: 'Hull-White, Vasicek 모델 기반 이자율 예측, Black–Scholes 모델 기반 주가 예측 등'
        },
        {
            period: '2013',
            title: 'Music Recommendation System & Customer Clustering',
            title_kr: '머신러닝과 유저 인구통계정보 및 음악 청취 이력을 기반으로 한 고객 군집화 및 음악 추천 시스템 설계',
            desc: 'Brand image survey & competitive strategy proposal for Bugs!',
            desc_kr: '벅스 브랜드 이미지 설문조사 및 음원 플랫폼 시장 내 경쟁 전략 제안'
        }
    ];

    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        Industrial Projects
                    </h1>
                    <p className="text-lg text-slate-500">
                        We welcome industry collaborations utilizing data-driven approaches.
                    </p>
                    <div className="mt-4 inline-flex items-center rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
                        Industry collaborations are welcome!
                    </div>
                </div>

                <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-12">
                    {projects.map((project, idx) => (
                        <div key={idx} className="relative pl-8 md:pl-12">
                            {/* Dot */}
                            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary-100 border-2 border-primary-600 shadow-sm"></div>

                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                <span className="text-sm font-bold text-primary-600 tracking-wide uppercase">
                                    {project.period}
                                </span>
                            </div>

                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">{project.title}</h3>
                                    <p className="text-slate-500 font-serif text-sm italic">{project.title_kr}</p>
                                </div>

                                <div className="text-slate-700">
                                    <p className="mb-1 font-medium">{project.desc}</p>
                                    <p className="text-slate-500 text-sm">{project.desc_kr}</p>
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
