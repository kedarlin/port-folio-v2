export const siteConfig = {
    name: "Kedar",
    shortName: "K",

    role: "Mobile Engineer",

    headline:
        "Building performant mobile experiences with Flutter and native technologies.",

    description:
        "1+ years of experience building production Flutter applications, integrating REST APIs, real-time communication, CI/CD pipelines, and exploring native audio systems and SwiftUI.",

    currentlyExploring: [
        "Flutter Internals",
        "Native Audio",
        "SwiftUI",
    ],

    hero: {
        greeting: "Hello, I'm",

        headline:
            "Building performant mobile experiences with Flutter and native technologies.",

        description:
            "Software Engineer with 1+ years of experience building production Flutter applications, integrating REST APIs, real-time communication, CI/CD pipelines, and exploring native audio systems and SwiftUI.",

        technologies: [
            "Flutter",
            "Dart",
            "SwiftUI",
            "Firebase",
            "TypeScript",
        ],
    },

    navigation: [
        {
            label: "About",
            href: "#about",
        },
        {
            label: "Experience",
            href: "#experience",
        },
        {
            label: "Projects",
            href: "#projects",
        },
        {
            label: "Contact",
            href: "#contact",
        },
    ],

    resume: "/resume.pdf",

    socials: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        email: "mailto:your@email.com",
    },

    about: {
        title: "About",

        heading: "Crafting scalable mobile experiences with a focus on performance and clean architecture.",

        description: [
            "I'm a Software Engineer specializing in Flutter with experience building production-ready applications used in real-world environments. My work focuses on creating reliable, maintainable, and user-centric mobile experiences.",

            "Beyond application development, I enjoy exploring Flutter internals, native Android development, SwiftUI, and high-performance audio systems to better understand how software works beneath the surface.",
        ],

        stats: [
            {
                value: "1+",
                label: "Years Experience",
            },
            {
                value: "2+",
                label: "Apps Shipped",
            },
            {
                value: "15+",
                label: "Features Delivered",
            },
            {
                value: "100%",
                label: "Passion for Learning",
            },
        ],
    },

    experience: {
        title: "Experience",

        heading: "Building products used by real users.",

        description:
            "My professional journey developing production-ready mobile applications and collaborating with cross-functional teams.",

        items: [
            {
                company: "RootQuotient",
                role: "Software Developer",
                duration: "Jun 2025 - Present",

                technologies: [
                    "Flutter",
                    "Firebase",
                    "REST API",
                    "BLoC",
                    "Azure DevOps",
                ],

                achievements: [
                    "Developed and shipped production Flutter applications.",
                    "Implemented scalable REST API integrations.",
                    "Built reusable UI components.",
                    "Collaborated with designers and backend developers.",
                ],
            },

            {
                company: "RootQuotient",
                role: "Software Developer Intern",
                duration: "Sep 2024 - May 2025",

                technologies: [
                    "Flutter",
                    "Firebase",
                    "FCM",
                ],

                achievements: [
                    "Built new mobile features.",
                    "Worked on real-time chat.",
                    "Implemented authentication flows.",
                ],
            },
        ],
    },
    projects: {
        title: "Projects",

        heading: "Some things I've built.",

        description:
            "A collection of projects showcasing production applications, personal experiments, and technologies I'm passionate about.",

        items: [
            {
                title: "LoFi - Audio Player",

                description:
                    "Flutter application for playing local audio songs",

                technologies: [
                    "Flutter",
                    "BLoC",
                    "C++",
                    "Kotlin"
                ],

                github: "",

                demo: "",
            },
        ],
    },
    engineeringFocus: {
        title: "Engineering Focus",

        heading:
            "Continuously expanding across the software engineering landscape.",

        description:
            "My professional experience began with Flutter, but my curiosity has pushed me into backend engineering, full-stack development, and understanding how software works beneath the abstractions. I enjoy learning technologies that help me build complete, scalable products.",

        items: [
            {
                title: "Backend Engineering",
                technologies: [
                    "Node.js",
                    "Express",
                    "PostgreSQL",
                    "TypeORM",
                    "JWT",
                ],
                description:
                    "Building secure REST APIs with authentication, authorization, refresh tokens, and scalable backend architecture.",
            },

            {
                title: "Modern Frontend",
                technologies: [
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                ],
                description:
                    "Learning modern frontend architecture while building responsive and performant web applications.",
            },

            {
                title: "Full-Stack Development",
                technologies: [
                    "MongoDB",
                    "Express",
                    "React",
                    "Node.js",
                ],
                description:
                    "Building MERN applications to better understand end-to-end product development.",
            },

            {
                title: "Mobile Engineering",
                technologies: [
                    "Flutter",
                    "Firebase",
                    "BLoC",
                    "REST APIs",
                ],
                description:
                    "Designing maintainable production-ready mobile applications with scalable architecture and native integrations.",
            },

            {
                title: "Software Architecture",
                technologies: [
                    "Authentication",
                    "RBAC",
                    "System Design",
                ],
                description:
                    "Understanding how scalable systems are designed, secured, and maintained.",
            },

            {
                title: "Framework Internals",
                technologies: [
                    "Flutter Engine",
                    "Rendering",
                    "Android",
                    "NDK",
                ],
                description:
                    "Exploring frameworks beyond their APIs to better understand performance and system behavior.",
            },
        ],
    },
};