// Portfolio Data - Edit this file to update your portfolio content
// This data is loaded by both index.html and admin.html

const PORTFOLIO_DATA = {
    // Personal Information
    personal: {
        name: "MinJun Choi",
        title: "Full-Stack Developer & Game Engineer",
        email: "minjunchoi9823@gmail.com",
        phone: "+65 93582176",
        linkedin: "https://www.linkedin.com/in/minjun-c-5b96b3111/",
        github: "https://github.com",
        location: "Singapore",
        bio: "Passionate software developer specializing in full-stack web applications, Unity development, and custom game engines. Currently pursuing Computer Science at SIT-DigiPen Institute of Technology.",
        available: true
    },

    // Education
    education: {
        school: "SIT-DigiPen Institute of Technology",
        degree: "Bachelor of Science in Computer Science in Interactive Media and Game Development",
        location: "Singapore",
        startDate: "Sep 2020",
        endDate: "Apr 2026",
        note: "Served national service in Korea from Feb 2022 to Aug 2023"
    },

    // Experience
    experience: [
        {
            id: 1,
            company: "Surbana Technologies Pte Ltd",
            role: "Digital Twin Technology Developer Freelancer",
            location: "Singapore",
            startDate: "Jan 2026",
            endDate: "Current",
            highlights: [
                "Designed and implemented custom UI elements using Unity's UI Toolkit in C#, extending core functionalities to support complex project needs."
            ]
        },
        {
            id: 2,
            company: "Surbana Technologies Pte Ltd",
            role: "Digital Twin Technology Developer Intern",
            location: "Singapore",
            startDate: "May 2025",
            endDate: "Dec 2025",
            highlights: [
                "Designed and implemented custom UI elements using Unity's UI Toolkit in C#, extending core functionalities to support complex project needs.",
                "Boosted interactivity and configurability of UI features in DT application by leveraging Unity's App UI package alongside UI Toolkit, improving overall user experience.",
                "Enhanced existing UI/UX features to align with project requirements, end-user expectations, and real user feedbacks, reducing usability issues across the digital twin application.",
                "Implemented backend API integration that binds real-time data to Unity UI elements, enabling dynamic, data-driven interfaces in the digital twin application.",
                "Integrated NATS messaging system to sync Unity UI interfaces in the digital twin application with backend-driven changes in real time.",
                "Migrated the digital twin application to employ a new backend system with latest RESTful API endpoints successfully.",
                "Verified and corrected 3D asset mappings within the digital twin environment, reducing discrepancies between real-world structures and in-app representations.",
                "Optimized the GameObjects generation and configuration pipeline in C# by automating loading JSON-driven content from backend and extraction of data from the loaded JSON content in Unity editor."
            ]
        }
    ],

    // Projects
    projects: [
        {
            id: 1,
            title: "Clubit",
            subtitle: "Leisure Club Management Mobile App",
            description: "Full-stack, cross-platform mobile application",
            context: "Hackrift Hackathon 2025",
            role: "Full-stack Developer",
            date: "Dec 2025",
            highlights: [
                "Developed full-stack cross-platform mobile application (iOS/Android/Web) using React Native and Expo, featuring club membership management, event coordination, payment tracking, and announcements.",
                "Architected Zustand-based state management with 5 specialized stores utilizing Map data structures for efficient relational data caching across Auth, Clubs, Events, Payments, and Announcements domains.",
                "Integrated Supabase PostgreSQL backend with Row-Level Security policies, custom aggregate views, and complex relational queries across 8 interconnected tables with nested joins.",
                "Implemented secure JWT authentication with cross-platform token persistence (native SecureStore + web localStorage), automatic session refresh, and real-time state synchronization."
            ]
        },
        {
            id: 2,
            title: "3D Social Platform",
            subtitle: "Interactive Virtual Spaces",
            description: "Full-stack web application",
            context: "SIT-DigiPen Institute of Technology",
            role: "Full-stack Engineer",
            date: "Jul 2025 — Nov 2025",
            highlights: [
                "Architected and deployed a production-ready 3D social networking platform, enabling users to create customizable virtual rooms, showcase interests through interactive displays, and discover like-minded users through intelligent matching algorithms.",
                "Built the frontend that aims to give 3D experience as immersive as possible, using React 18, Three.js, and React Three Fiber with orbital camera controls, real-time furniture manipulation, and optimizes WebGL rendering for 60 FPS performance.",
                "Developed the backend architecture that implements RESTful API with Node.js/Express serving 20+ endpoints, implementing JWT authentication, bcrypt password hashing, and Redis-backed session management.",
                "Designed normalized PostgreSQL schema with 8 relational tables, strategic indexing on high-traffic queries, and implemented automated timestamp triggers for data integrity.",
                "Deployed scalable AWS architecture with Application Load Balancer distributing traffic across 2 EC2 instances, integrated with managed RDS PostgreSQL and ElastiCache Redis for high availability.",
                "Implemented comprehensive security measures including parameterized SQL queries preventing injection attacks, Helmet.js security headers, CORS configuration, and rate limiting.",
                "Achieved 80%+ cache hit rate through strategic Redis caching of user profiles, room configurations, and recommendations; implemented connection pooling for database efficiency."
            ]
        },
        {
            id: 3,
            title: "AllThamen",
            subtitle: "Custom 3D Game Engine in C++",
            description: "Team of 10",
            context: "SIT-DigiPen Institute of Technology",
            role: "Asset Engineer",
            date: "Sep 2024 — Apr 2025",
            highlights: [
                "Implemented a pipeline to compile audio assets into easily retrievable binary files using C++ and FMOD libraries in Singleton and RAII design.",
                "Implemented an audio importer in the editor for front-end developer using C++ and ImGui in Event-driven and RAII design.",
                "Implemented a sound system for a 3D game built on ECS architecture using a mix of Singleton, Observer and RAII design."
            ]
        },
        {
            id: 4,
            title: "Dead City",
            subtitle: "Custom 2D Game Engine in C++",
            description: "Team of 6",
            context: "SIT-DigiPen Institute of Technology",
            role: "Game AI Programmer",
            date: "Sep 2023 — Apr 2024",
            highlights: [
                "Implemented AI logics capitalizing on flood-fill and A* algorithms for game objects, such as NPCs and enemies.",
                "Developed a scripting system for AI logic using function pointers in RAII manner.",
                "Developed a game state and scene manager using stack and priority queue data structure for better memory management."
            ]
        },
        {
            id: 5,
            title: "Scavenger",
            subtitle: "2D Platformer, Shooting Game in C++",
            description: "Team of 3",
            context: "SIT-DigiPen Institute of Technology",
            role: "Tool Programmer",
            date: "Jan 2021 — Apr 2021",
            highlights: [
                "Implemented a custom math library to provide APIs for mathematical operations regarding linear algebra and projective geometry.",
                "Implemented various tool functions for input devices, such as mouse and keyboard, in C++."
            ]
        }
    ],

    // Skills
    skills: {
        languages: ["C", "C++", "C#", "JavaScript", "Python"],
        technologies: ["Visual Studio", "Git", "GitHub Actions", "Unity", "AWS Cloud", "Docker", "Node.js", "Three.js", "React", "Supabase"],
        databases: ["PostgreSQL"]
    }
};

// Initialize data from localStorage or use defaults
function initializeData() {
    const storedData = localStorage.getItem('portfolioData');
    if (storedData) {
        try {
            return JSON.parse(storedData);
        } catch (e) {
            console.error('Error parsing stored data:', e);
            return PORTFOLIO_DATA;
        }
    }
    return PORTFOLIO_DATA;
}

// Save data to localStorage
function saveData(data) {
    localStorage.setItem('portfolioData', JSON.stringify(data));
}

// Reset to default data
function resetData() {
    localStorage.removeItem('portfolioData');
    return PORTFOLIO_DATA;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PORTFOLIO_DATA, initializeData, saveData, resetData };
}
