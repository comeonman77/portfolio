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
        github: "https://github.com/comeonman77",
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
            endDate: "Apr 2026",
            highlights: [
                "Built in-editor tooling to automate the GameObject generation pipeline by streamlining JSON import and caching, enabling non-developers to use the workflow with minimal effort.",
                "Refactored the codebase to support an updated game-object configuration hierarchy and implemented unique identifiers for reliable object tracking."
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
                "Enhanced existing UI/UX features to align with project requirements, end-user expectations, and real user feedbacks by fixing numerous bugs and issues across the codebase, reducing usability issues across the digital twin application.",
                "Boosted interactivity and configurability of UI features in DT application by leveraging Unity's App UI package alongside UI Toolkit, improving overall user experience.",
                "Designed and implemented custom UI elements using Unity's UI Toolkit in C#, extending core functionalities to support complex project needs.",
                "Implemented backend API integration that binds real-time data to Unity UI elements, enabling dynamic, data-driven interfaces in the digital twin application.",
                "Integrated NATS messaging system to sync Unity UI interfaces in the digital twin application with backend-driven changes in real time.",
                "Migrated the digital twin application to employ a new backend system with latest RESTful API endpoints successfully.",
                "Verified and corrected 3D asset mappings within the digital twin environment, reducing discrepancies in position and location between real-world structures and in-app representations.",
                "Optimized the GameObjects generation and configuration pipeline by automating extraction of data from the JSON-driven contents retrieved from backend in Unity editor."
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
            title: "DWorld",
            subtitle: "Interactive Virtual Spaces",
            description: "Full-stack web application",
            context: "SIT-DigiPen Institute of Technology",
            role: "Full-stack Developer",
            date: "Jul 2025 — Nov 2025",
            highlights: [
                "Architected and deployed a 3D social networking platform, enabling users to create customizable virtual rooms, showcase interests through interactive displays, and discover like-minded users through intelligent matching algorithms.",
                "Built the frontend that aims to give 3D experience as immersive as possible, using React 18, Three.js, and React Three Fiber with orbital camera controls, real-time furniture manipulation (position/rotation/scale), and optimizes WebGL rendering for 60 FPS performance.",
                "Developed the backend architecture that implements RESTful API with Node.js/Express serving 10+ endpoints, implementing JWT authentication, bcrypt password hashing, and Redis-backed session management for secure user authentication.",
                "Deployed scalable AWS architecture with Application Load Balancer distributing traffic across 2 EC2 instances in different service zones (us-east-1 and Singapore).",
                "Implemented comprehensive security measures, including parameterized SQL queries preventing injection attacks, Helmet.js security headers, CORS configuration, and rate limiting (100 requests/15min)."
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
                "Architected end-to-end asset compilation pipeline supporting 10+ asset types (textures, 3D models, audio, shaders, materials, animations, skeletons) with persistent worker process design reducing per-asset compilation overhead.",
                "Implemented GPU-optimized texture compression system using DirectXTex with intelligent auto-selection between BC1/BC3/BC5/BC6H/BC7 formats based on texture usage analysis, achieving 4-8x memory reduction while maintaining visual quality.",
                "Developed intelligent texture classification algorithm using filename pattern matching and pixel-level analysis (grayscale detection, alpha transparency scanning) to automatically assign optimal compression formats without manual tagging.",
                "Implemented hot-reload architecture using event-driven file watching with concurrent queue processing, enabling real-time asset iteration without engine restart.",
                "Built UUID-based resource management system with bidirectional O(log n) lookups, supporting stable asset references across recompiles through UUID history mapping.",
                "Designed descriptor-driven asset configuration system with JSON-based metadata, per-variant settings, and linked dependency tracking for composite assets (cubemaps, prefabs)."
            ]
        },
        {
            id: 4,
            title: "Dead City",
            subtitle: "Custom 2D Game Engine in C++",
            description: "Team of 6",
            context: "SIT-DigiPen Institute of Technology",
            role: "Game Physics Programmer",
            date: "Sep 2023 — Apr 2024",
            highlights: [
                "Architected and implemented full physics simulation system managing 100+ concurrent game objects with delta-time based velocity, acceleration, and force calculations.",
                "Developed high-performance AABB (Axis-Aligned Bounding Box) collision detection supporting both static and dynamic collision scenarios with early-exit optimizations.",
                "Implemented specialized collision logic handling projectile piercing mechanics, entity-to-entity collision filtering, and boundary clamping for game arena constraints.",
                "Integrated performance profiling using GLFW timing to track physics system execution time per frame, ensuring sub-millisecond performance targets.",
                "Implemented sweep-and-prune dynamic collision algorithm with time-of-impact (tFirst) calculations for moving objects, preventing tunneling issues at high velocities.",
                "Implemented AI logics capitalizing on flood-fill and A* algorithms for game objects, such as NPCs and enemies."
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
