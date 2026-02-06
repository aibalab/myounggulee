// 모든 텍스트와 이미지 경로를 여기서 관리합니다.
// 사진을 바꾸고 싶다면 public 폴더에 사진을 넣고 경로를 수정하세요.

export const labInfo = {
    name: "AIBA Lab",
    fullName: "AI & Machine Learning for Business Analytics",
    university: "Konkuk University",
    department: "School of Business",
    location: "120 Neungdong-ro, Gwangjin-gu, Seoul 05029, South Korea",
    email: "myounggulee@konkuk.ac.kr",
    googleScholar: "https://scholar.google.com/citations?user=Bq57hwYAAAAJ&hl=ko",
    univHome: "https://kbs.konkuk.ac.kr/kbs/23961/subview.do",
    cvLink: "https://docs.google.com/document/d/1T1RuPHsVFsxrHhkJid1FIPr-6S6SmdSf/edit?usp=drive_link&ouid=109667819159317009117&rtpof=true&sd=true",

    hero: {
        title: "AI & Machine Learning",
        subtitle: "for Business Analytics",
        description: "We leverage AI technology to transform the value of customers, platforms, and data in business. Our research focuses on Marketing Innovation, Strategic IS, and Generative AI applications.",
        bgImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop", // Agentic AI & Robotics theme (Round eyes robot)
    },

    professor: {
        name: "Myounggu Lee",
        nameKr: "이명구",
        title: "Assistant Professor | Data Scientist",
        photo: "/profile.jpg", // 사진 파일 경로 (예: "/images/professor.jpg")
        bio: [
            "Hello! I am Myounggu Lee, an Assistant Professor in Management Information Systems at the School of Business, Konkuk University.",
            "My research leverages AI technology to transform value across business domains. Previously, I served as a lecturer at the University of Seoul and worked as a data analyst at major firms including KPMG, Kearney, Deloitte, and Samsung Global Research.",
            "I hold a Ph.D. in Business and Technology Management from KAIST."
        ],
        education: [
            { school: "KAIST", degree: "Ph.D. in Business and Technology Management", period: "2020 - 2023", note: "Concentration: Quantitative Marketing" },
            { school: "KAIST", degree: "M.S. in Management Engineering", period: "2013 - 2015" },
            { school: "KAIST", degree: "B.E. in Mechanical Engineering", period: "2007 - 2013" },
        ],
        interests: ['Agentic AI', 'Generative AI', 'Big Data Analytics', 'Digital Marketing', 'Retail Media', 'AI Transformation']
    },

    researchAreas: [
        { title: 'Agentic AI', desc: 'Researching autonomous agents and their applications in business process automation.' },
        { title: 'Generative AI for Business', desc: 'Harnessing generative AI to transform business processes and customer engagement.' },
        { title: 'Marketing Innovation', desc: 'Utilizing AI and data to analyze customer behavior and optimize marketing strategies.' },
        { title: 'Strategic Use of IS', desc: 'Leveraging information systems to accelerate digital transformation.' },
        { title: 'Time-series Forecasting', desc: 'Forecasting demand, revenue, and risk for sophisticated planning.' },
        { title: 'Recommender Systems', desc: 'Enhancing satisfaction with personalized recommendation systems.' },
        { title: 'AI-driven Decision Making', desc: 'Automating complex business decisions using ML and analytics.' }
    ],

    professionalExperience: [
        { title: 'Tech. Advisor', org: 'Witz.ai', period: '2023' },
        { title: 'Lecturer', org: 'University of Seoul', period: '2023' },
        { title: 'Senior Analyst', org: 'KPMG', period: '2019-2020' },
        { title: 'Business Analyst', org: 'Kearney', period: '2018' },
        { title: 'Quantitative Analyst', org: 'Deloitte Anjin LLC', period: '2016-2018' },
        { title: 'RA', org: 'Samsung Global Research', period: '2015-2016' },
    ],

    teaching: [
        {
            university: 'Konkuk University',
            period: '2024 ~ 2026',
            courses: [
                { type: '[MBA]', name: 'Management Information System', semester: 'Fall 2024' },
                { type: '[Undergraduate]', name: 'Management Information Systems in Practice', semester: 'Fall 2024; Fall 2025; Spring 2026' },
                { type: '[Undergraduate]', name: 'Data-driven Decision Making', semester: 'Spring 2024; Spring 2025; Spring 2026' },
                { type: '[Undergraduate]', name: 'Data Mining', semester: 'Spring 2024; Spring/Fall 2025' },
                { type: '[Undergraduate]', name: 'Programming for Data Analysis (Python)', semester: 'Spring 2024' },
            ]
        },
        {
            university: 'University of Seoul',
            period: '2023',
            courses: [
                { type: '[Undergraduate]', name: 'Global Brand Management', semester: 'Fall 2023' },
                { type: '[M.S. and Ph.D.]', name: 'Global Business Strategy', semester: 'Fall 2023' },
                { type: '[MBA]', name: 'International Marketing', semester: 'Fall 2023' },
            ]
        }
    ]
};
