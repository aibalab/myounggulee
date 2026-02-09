import { FileText, Mic, Globe, Book } from 'lucide-react';

const Research = () => {
    const publications = {
        international: [
            "Lee, M.*, & Kim, H. J. (2026). Uncovering App Activity Patterns Behind E-Commerce App Usage: An Explainable AI Framework. Asia Marketing Journal. (Accepted)",
            "Kim, W.- sung, Choi, I. & Lee, M.* (2025). Explainable AI-based mass appraisal: Insights from machine learning applications in Korea’s residential property market. International Journal of Strategic Property Management, 29(5), 350–376.",
            "Lee, M., Cho, J.*, Kim, Y., & Kim, H. J. (2025). Extracting offline retail shopping patterns: a restricted Boltzmann machines approach to customer segmentation and cross-selling. Expert Systems with Applications, 128797.",
            "Kim, H., & Lee, M.* (2025). Unraveling the Drivers of ESG Performance in Chinese Firms: An Explainable Machine-Learning Approach. Systems, 13(7), 578.",
            "Lee, M.*, Choi, I., & Kim, W. C. (2025). Predicting Mobile Payment Behavior Through Explainable Machine Learning and Application Usage Analysis. Journal of Theoretical and Applied Electronic Commerce Research, 20(2), 117.",
            "Lee, M., & Kim, H. J.* (2023). A collaborative filtering model incorporating media promotions and users' variety-seeking tendencies in the digital music market. Decision Support Systems, 114022.",
            "Lee, M., Cho, J.*, Kim, Y., & Kim, H. J. (2023). Impact of Movie-watching on Cross-selling Revenue in Shopping Malls: Implications for Post-pandemic Recovery. Journal of Retailing and Consumer Services, 73, 103350.",
            "Choi, I., Lee, M., Kim, H., & Kim, W. C.* (2023). Elucidating Directed Statistical Dependencies: Investigating Global Financial Market Indices' Influence on Korean Short Selling Activities. Pacific-Basin Finance Journal, 79, 102018. (First author - Equal contribution)",
            "Lee, M., and Kim, H. J.* (2022). Exploring Determinants of Digital Music Success in South Korea. Electronic Commerce Research, 1-22.",
        ],
        domestic: [
            "이명구, 김혜진*. \"디자인의 골디락스 존: 캐릭터 디자인 시장 성공을 위한 시각적 복잡성의 최적화.\" 경영학연구 (2026), Accepted",
            "김혜진*, 이명구. \"마케팅 분야의 머신러닝 연구 동향 분석.\" 마케팅연구 36, no. 1 (2021): 1-25.",
        ],
        conferences: [
            "\"Machine Learning-Based Prediction of the Most Valuable Player (MVP) in E-sports Matches and Analysis of Influencing Factors: Focusing on <League of Legends>,\" 2025 Academic Conference on Management Information Systems (Fall), Korea University, Seoul, Korea (2025)",

            "“When disaster strikes: The impact of national disasters on digital music consumption,” 2024 KrAIS Summer Workshop, Seoul National University, Seoul, Korea (2024)",
            "“When disaster strikes: The impact of national disasters on digital music consumption,” 2024 Joint Academic Conference on Management Information Systems, Yonsei University, Seoul, Korea (2024)",
            "“When disaster strikes: The impact of national disasters on digital music consumption,” 2024 Korea Productivity Association Spring Conference, Konkuk University, Seoul, Korea (2024)",

            "“Extracting Offline Retail Shopping Patterns: Collaborative Filtering with Restricted Boltzmann Machines,” 2023 KrAIS Summer Workshop, Korea University, Seoul, Korea (2023)",
            "“Extracting Offline Retail Shopping Patterns: Collaborative Filtering with Restricted Boltzmann Machines,” 2023 Global Marketing Conference at Seoul, Seoul, Korea (2023)",
            "“Predicting Mobile Purchases through Social Media App Usage Behavior,” 2023 Korean Marketing Association (KMA) Spring Conference, Sogang University, Seoul, Korea (2023)",
            "“A Collaborative Filtering Model Incorporating Media Promotions and Users’ Variety-Seeking Tendencies in the Digital Music Market,” Feeder Workshop of WITS 2023: AI on Platform Business, Seoul National University, Seoul, Korea (2023).",
            "“Using Restricted Boltzmann Machines to Enhance Collaborative Filtering-based Cross-selling Approach,” KAIST-Brain Korea 21 Workshop, Buyeo, Korea (2023).",
            "“Impact of Movie-watching on Cross-selling Revenue in Shopping Malls,” International Conference of Asian Marketing Associations (ICAMA), Jeju, Korea (2022).",
            "“A Collaborative Filtering Model Incorporating Media Promotions and Users’ Variety-Seeking Tendencies in the Digital Music Market,” KAIST BTM Brown Bag Seminar, Daejeon, Korea (2021), KAIST AI-SSRG Boot Camp, Virtual (2021)."
        ]
    };

    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Publications</h1>
                <p className="text-lg text-slate-500 mb-12">
                    Our recent research contributions to international journals and conferences.
                </p>

                <div className="space-y-16">
                    {/* International Journals */}
                    <section>
                        <div className="flex items-center mb-6">
                            <Globe className="h-6 w-6 text-primary-600 mr-3" />
                            <h2 className="text-2xl font-bold text-slate-900">International Journals</h2>
                        </div>
                        <ul className="space-y-4">
                            {publications.international.map((pub, idx) => (
                                <li key={idx} className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:border-primary-100 transition-colors">
                                    <p className="text-slate-800 leading-relaxed font-serif">{pub}</p>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Domestic Journals */}
                    <section>
                        <div className="flex items-center mb-6">
                            <Book className="h-6 w-6 text-primary-600 mr-3" />
                            <h2 className="text-2xl font-bold text-slate-900">Domestic Journals</h2>
                        </div>
                        <ul className="space-y-4">
                            {publications.domestic.map((pub, idx) => (
                                <li key={idx} className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:border-primary-100 transition-colors">
                                    <p className="text-slate-800 leading-relaxed font-serif">{pub}</p>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Conferences */}
                    <section>
                        <div className="flex items-center mb-6">
                            <Mic className="h-6 w-6 text-primary-600 mr-3" />
                            <h2 className="text-2xl font-bold text-slate-900">Conference Presentations</h2>
                        </div>
                        <ul className="space-y-4">
                            {publications.conferences.map((pub, idx) => (
                                <li key={idx} className="pl-4 border-l-4 border-primary-200 py-1">
                                    <p className="text-slate-700 leading-relaxed text-sm">{pub}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Research;
