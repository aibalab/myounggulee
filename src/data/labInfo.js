// 모든 텍스트와 이미지 경로를 여기서 관리합니다.
// 한/영 병기 텍스트는 { ko: '...', en: '...' } 형태로 작성하고 t()로 표시합니다.
// 사진을 바꾸고 싶다면 public 폴더에 사진을 넣고 경로를 수정하세요.

export const labInfo = {
    name: "DAISY Lab",
    fullName: "Data & AI Systems for Business Analytics",
    university: { ko: "건국대학교", en: "Konkuk University" },
    department: { ko: "경영대학", en: "School of Business" },
    location: {
        ko: "(05029) 서울특별시 광진구 능동로 120",
        en: "120 Neungdong-ro, Gwangjin-gu, Seoul 05029, South Korea",
    },
    email: "myounggulee@konkuk.ac.kr",
    googleScholar: "https://scholar.google.com/citations?user=Bq57hwYAAAAJ&hl=ko",
    linkedin: "https://www.linkedin.com/in/myounggu-lee-55736773/",
    univHome: "https://kbs.konkuk.ac.kr/kbs/23961/subview.do",
    cvLink: "https://docs.google.com/document/d/1T1RuPHsVFsxrHhkJid1FIPr-6S6SmdSf/edit?usp=drive_link&ouid=109667819159317009117&rtpof=true&sd=true",

    hero: {
        title: "Data & AI Systems",
        subtitle: "for Business Analytics",
        description: {
            ko: "AI 기술로 고객·플랫폼·데이터의 비즈니스 가치를 혁신합니다. 마케팅 혁신, 전략적 정보시스템, 생성형 AI 응용을 중심으로 연구합니다.",
            en: "We leverage AI technology to transform the value of customers, platforms, and data in business. Our research focuses on Marketing Innovation, Strategic IS, and Generative AI applications.",
        },
    },

    professor: {
        name: "Myounggu Lee",
        nameKr: "이명구",
        title: {
            ko: "경영정보시스템(MIS) 조교수",
            en: "Assistant Professor of MIS",
        },
        photo: "/profile.jpg", // 사진 파일 경로 (예: "/images/professor.jpg")
        bio: [
            {
                ko: "안녕하세요! 건국대학교 경영대학에서 경영정보시스템(MIS)을 담당하고 있는 이명구입니다.",
                en: "Hello! I am Myounggu Lee, an Assistant Professor in Management Information Systems at the School of Business, Konkuk University.",
            },
            {
                ko: "AI 기술을 활용해 다양한 비즈니스 영역의 가치를 혁신하는 연구를 하고 있습니다. 서울시립대학교 강사를 거쳐 삼정KPMG 경제연구원, 커니(Kearney), 딜로이트 안진, 삼성글로벌리서치에서 데이터 분석 업무를 수행했습니다.",
                en: "My research leverages AI technology to transform value across business domains. Previously, I served as a lecturer at the University of Seoul and worked as a data analyst at major firms including KPMG Economic Research Institute, Kearney, Deloitte, and Samsung Global Research.",
            },
            {
                ko: "KAIST에서 기술경영학 박사 학위를 받았습니다.",
                en: "I hold a Ph.D. in Business and Technology Management from KAIST.",
            },
        ],
        education: [
            {
                school: "KAIST",
                degree: { ko: "기술경영학 박사", en: "Ph.D. in Business and Technology Management" },
                period: "2020 - 2023",
                note: { ko: "세부전공: 계량 마케팅", en: "Concentration: Quantitative Marketing" },
            },
            {
                school: "KAIST",
                degree: { ko: "경영공학 석사", en: "M.S. in Management Engineering" },
                period: "2013 - 2015",
            },
            {
                school: "KAIST",
                degree: { ko: "기계공학 학사", en: "B.E. in Mechanical Engineering" },
                period: "2007 - 2013",
            },
        ],
        interests: ['Agentic AI', 'Generative AI', 'Big Data Analytics', 'Digital Marketing', 'Retail Media', 'AI Transformation'],
    },

    researchAreas: [
        {
            title: { ko: "에이전틱 AI", en: "Agentic AI" },
            desc: {
                ko: "자율 AI 에이전트와 비즈니스 프로세스 자동화 응용을 연구합니다.",
                en: "Researching autonomous agents and their applications in business process automation.",
            },
        },
        {
            title: { ko: "비즈니스 생성형 AI", en: "Generative AI for Business" },
            desc: {
                ko: "생성형 AI로 비즈니스 프로세스와 고객 경험을 혁신합니다.",
                en: "Harnessing generative AI to transform business processes and customer engagement.",
            },
        },
        {
            title: { ko: "마케팅 혁신", en: "Marketing Innovation" },
            desc: {
                ko: "AI와 데이터로 고객 행동을 분석하고 마케팅 전략을 최적화합니다.",
                en: "Utilizing AI and data to analyze customer behavior and optimize marketing strategies.",
            },
        },
        {
            title: { ko: "전략적 정보시스템 활용", en: "Strategic Use of IS" },
            desc: {
                ko: "정보시스템을 활용해 디지털 전환을 가속화합니다.",
                en: "Leveraging information systems to accelerate digital transformation.",
            },
        },
        {
            title: { ko: "시계열 예측", en: "Time-series Forecasting" },
            desc: {
                ko: "수요·매출·리스크를 예측해 정교한 계획 수립을 지원합니다.",
                en: "Forecasting demand, revenue, and risk for sophisticated planning.",
            },
        },
        {
            title: { ko: "추천 시스템", en: "Recommender Systems" },
            desc: {
                ko: "개인화 추천 시스템으로 고객 만족을 높입니다.",
                en: "Enhancing satisfaction with personalized recommendation systems.",
            },
        },
        {
            title: { ko: "AI 기반 의사결정", en: "AI-driven Decision Making" },
            desc: {
                ko: "머신러닝과 애널리틱스로 복잡한 비즈니스 의사결정을 자동화합니다.",
                en: "Automating complex business decisions using ML and analytics.",
            },
        },
    ],

    professionalExperience: [
        { title: { ko: "기술 자문", en: "Tech. Advisor" }, org: "Witz.ai", period: "2023" },
        { title: { ko: "강사", en: "Lecturer" }, org: { ko: "서울시립대학교", en: "University of Seoul" }, period: "2023" },
        { title: { ko: "선임연구원", en: "Senior Analyst" }, org: { ko: "삼정KPMG 경제연구원", en: "KPMG Economic Research Institute" }, period: "2019-2020" },
        { title: { ko: "비즈니스 애널리스트", en: "Business Analyst" }, org: { ko: "커니 (Kearney)", en: "Kearney" }, period: "2018" },
        { title: { ko: "퀀트 애널리스트", en: "Quantitative Analyst" }, org: { ko: "딜로이트 안진회계법인", en: "Deloitte Anjin LLC" }, period: "2016-2018" },
        { title: { ko: "리서치 어시스턴트", en: "RA" }, org: { ko: "삼성글로벌리서치", en: "Samsung Global Research" }, period: "2015-2016" },
    ],

    academicService: [
        {
            label: { ko: "편집 활동", en: "Editorial Service" },
            text: {
                ko: "Journal of Global Scholars of Marketing Science ERB, 정보통신정책학회 편집위원, (전) 대한경영학회 편집위원",
                en: "Journal of Global Scholars of Marketing Science ERB, Editorial Board of KATP, former Editorial Board of KABE",
            },
        },
        {
            label: { ko: "심사 활동", en: "Peer Review" },
            text: {
                ko: "Electronic Commerce Research, Journal of Business Research, APJIS 등",
                en: "Electronic Commerce Research, Journal of Business Research, APJIS, etc.",
            },
        },
        {
            label: { ko: "학회 회원", en: "Membership" },
            text: {
                ko: "한국경영정보학회 종신회원, 정보통신정책학회 종신회원",
                en: "Lifetime member of the Korea Society of Management Information Systems and the Korea Association for Telecommunications Policies",
            },
        },
    ],

    teaching: [
        {
            university: { ko: "건국대학교", en: "Konkuk University" },
            period: "2024 ~ 2026",
            courses: [
                {
                    type: "[MBA]",
                    name: { ko: "경영정보시스템", en: "Management Information System" },
                    semester: { ko: "2024 가을; 2026 가을", en: "Fall 2024; Fall 2026" },
                },
                {
                    type: "[MBA]",
                    name: { ko: "AI 비즈니스 애널리틱스", en: "Business Analytics with AI" },
                    semester: { ko: "2026 여름", en: "Summer 2026" },
                },
                {
                    type: { ko: "[학부]", en: "[Undergraduate]" },
                    name: { ko: "경영정보시스템 실무", en: "Management Information Systems in Practice" },
                    semester: { ko: "2024 가을; 2025 가을; 2026 봄", en: "Fall 2024; Fall 2025; Spring 2026" },
                },
                {
                    type: { ko: "[학부]", en: "[Undergraduate]" },
                    name: { ko: "데이터 기반 의사결정", en: "Data-driven Decision Making" },
                    semester: { ko: "2024 봄; 2025 봄; 2026 봄", en: "Spring 2024; Spring 2025; Spring 2026" },
                },
                {
                    type: { ko: "[학부]", en: "[Undergraduate]" },
                    name: { ko: "데이터마이닝", en: "Data Mining" },
                    semester: { ko: "2024 봄; 2025 봄/가을", en: "Spring 2024; Spring/Fall 2025" },
                },
                {
                    type: { ko: "[학부]", en: "[Undergraduate]" },
                    name: { ko: "데이터 분석 프로그래밍 (파이썬)", en: "Programming for Data Analysis (Python)" },
                    semester: { ko: "2024 봄", en: "Spring 2024" },
                },
            ],
        },
        {
            university: { ko: "서울시립대학교", en: "University of Seoul" },
            period: "2023",
            courses: [
                {
                    type: { ko: "[학부]", en: "[Undergraduate]" },
                    name: { ko: "글로벌 브랜드 관리", en: "Global Brand Management" },
                    semester: { ko: "2023 가을", en: "Fall 2023" },
                },
                {
                    type: { ko: "[석·박사]", en: "[M.S. and Ph.D.]" },
                    name: { ko: "글로벌 경영전략", en: "Global Business Strategy" },
                    semester: { ko: "2023 가을", en: "Fall 2023" },
                },
                {
                    type: "[MBA]",
                    name: { ko: "국제마케팅", en: "International Marketing" },
                    semester: { ko: "2023 가을", en: "Fall 2023" },
                },
            ],
        },
    ],
};
