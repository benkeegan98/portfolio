const featuredProjectsData = [
    {
        title: "Pathbreaker Web",
        coverImage: {
            url: "/pb-web-cover2.png",
            height: 340,
            width: 550,
        },
        description: "Web app for building informational travel paths on an interactive map. Represent your journeys with greater granularity - show where you went, what you did there, and how you navigated between places. Build your passport to contextualize your travels, showing important factors that influence how you move.",
        tech: [
            "Javascript",
            "React",
            "Mapbox",
            "Python",
            "Flask",
            "SQLAlchemy",
            "Firebase",
            "Cloudflare"
        ],
        externalLinks: [
            {
                type: "external",
                url: "https://pathbreaker.app"
            },
        ]
    },
    {
        title: "Pathbreaker Mobile",
        description: "iOS and Android mobile platform for building and sharing your travels. Map your journeys as an interactive path, showing where you went, what you did there, and how you navigated between places. Build your passport to contextualize your travels, showing important factors that influence how you move. Share your travels, and see highlights of your friends' favorite trips.",
        coverImage: {
            url: "/pb-web-cover2.png",
            height: 340,
            width: 550,
        },
        tech: [
            "Javascript/Typescript",
            "React Native",
            "Mapbox",
            "Python",
            "Flask",
            "SQLAlchemy",
            "Firebase"
        ],
        externalLinks: [
            {
                type: "appstore",
                url: "https://apps.apple.com/us/app/pathbreaker/id1615717375"
            },
            {
                type: "playstore",
                url: "https://play.google.com/store/apps/details?id=com.pathbreaker.app"
            },
        ]
    },
    {
        title: "Spotemy",
        coverImage: {
            url: "/spotemy-cover.png",
            height: 340,
            width: 550,
        },
        description: "Web app for visualizing personalized Spotify data and generating music recommendations with OpenAI. View your playlists, top artists, top tracks, recently played tracks, and detailed track information. Generate recommendations based on your favorite songs, artists, and albums.",
        tech: [
            "Typescript",
            "React",
            "Next.js",
            "Styled Components",
            "Spotify API",
            "OpenAI"
        ],
        externalLinks: [
            {
                type: "external",
                url: "https://spotemy.vercel.app"
            },
        ]
    },
]

export default featuredProjectsData;