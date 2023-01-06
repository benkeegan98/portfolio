import { IconName } from "../components/atoms/Icon"

export interface ExternalLinkType {
    type: IconName,
    url: string,
}

export interface ProjectDataType {
    title: string,
    description: string,
    tech: string[],
    externalLinks: ExternalLinkType[],
}

type ProjectDataList = ProjectDataType[]; 

const otherProjectsData: ProjectDataList = [
    {
        title: "gRPC Image Processing Service",
        description: "Command Line Python gRPC service for processing images pixel by pixel, applying rotations and/or mean filters",
        tech: [
            "Python",
            "gRPC",
            "Pillow"
        ],
        externalLinks: [
            {
                type: "github",
                url: "https://github.com/benkeegan98/grpc_image_processor"
            },
        ]
    },
    {
        title: "Duke Marketplace Web Application",
        description: "My first full stack web application, built for college class project. Duke eBay-style marketplace web application where students can list items, search through item directory, and make a 'mock' purchase.",
        tech: [
            "Javascript",
            "React",
            "Python/Flask",
            "MySQL",
            "Stripe API",
            "Cloudinary"
        ],
        externalLinks: [
            {
                type: "github",
                url: "https://github.com/benkeegan98/CS316Marketplace"
            },
        ]
    },
    {
        title: "Spotify Stats Mobile App",
        description: "React Native app I made to explore the Spotify API - view your playlists, top artists, top tracks, recently played tracks, and detailed track information.",
        tech: [
            "Javascript",
            "React Native",
            "Spotify API"
        ],
        externalLinks: [
            {
                type: "github",
                url: "https://github.com/benkeegan98/spotify-app"
            },
        ]
    },
    {
        title: "Football Brickbreaker",
        description: "Champions League style Brickbreaker game, built for Duke class project with Java FX.",
        tech: [
            "Java",
            "JavaFX",
        ],
        externalLinks: [
            {
                type: "github",
                url: "https://github.com/benkeegan98/CS308-Projects/tree/master/1.%20Brickbreaker"
            },
        ]
    },
    {
        title: "Tower Defense Game Engine",
        description: "Large group project built for Duke class. We built a Game Engine for authoring, building, and running interactive Tower Defense games.",
        tech: [
            "Java",
            "JavaFX",
        ],
        externalLinks: [
            {
                type: "github",
                url: "https://github.com/benkeegan98/CS308-Projects/tree/master/4.%20VOOGASalad"
            },
        ]
    },
    {
        title: "Cellular Automata Simulator",
        description: "Cellular Automata Simulator build to run various simulations such as Conway's Game of Life, Fire, Percolation, and Predator Prey",
        tech: [
            "Java",
            "JavaFX",
        ],
        externalLinks: [
            {
                type: "github",
                url: "https://github.com/benkeegan98/CS308-Projects/tree/master/2.%20Simulation"
            },
        ]
    },
    {
        title: "SLogo",
        description: "I built the frontend for Turtle Logo GUI, allowing user to input Logo commands to enable a turtle to draw on screen",
        tech: [
            "Java",
            "JavaFX",
        ],
        externalLinks: [
            {
                type: "github",
                url: "https://github.com/benkeegan98/CS308-Projects/tree/master/3.%20SLogo"
            },
        ]
    },
];

export default otherProjectsData;