"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eventData = [
    {
        event_id: 1,
        title: "Nottingham Tech Conference 2025",
        description: "A conference discussing the latest trends in technology and software development, with industry leaders sharing their expertise.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "Nottingham Trent University, 50 Shakespeare St, Nottingham, NG1 4FQ, UK",
        created_by: 2,
        start_time: 1755277200000,
        end_time: 1755306000000,
    },
    {
        event_id: 2,
        title: "Nottingham Coding Bootcamp 2025",
        description: "An immersive bootcamp for aspiring developers, covering web development, algorithms, and data structures.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "Nottingham Trent University, 50 Shakespeare St, Nottingham, NG1 4FQ, UK",
        created_by: 3,
        start_time: 1755280800000,
        end_time: 1755302400000,
    },
    {
        event_id: 3,
        title: "Nottingham Startup Expo 2025",
        description: "A networking event for entrepreneurs and startups, showcasing innovative businesses and investment opportunities.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "Motorpoint Arena Nottingham, 44 Ormston St, Nottingham, NG1 5AA, UK",
        created_by: 4,
        start_time: 1755310800000,
        end_time: 1755332400000,
    },
    {
        event_id: 4,
        title: "Artificial Intelligence Workshop - Nottingham",
        description: "A hands-on workshop for AI enthusiasts, covering the basics of machine learning and its real-world applications.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "The National Videogame Museum, 22-26 Hockley, Nottingham, NG1 1FP, UK",
        created_by: 5,
        start_time: 1755354000000,
        end_time: 1755375600000,
    },
    {
        event_id: 5,
        title: "Nottingham Web Development Meetup",
        description: "A casual meetup for web developers to share ideas, talk about trends, and collaborate on new projects.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "The Old Library, 28-30 St James's St, Nottingham, NG1 6FG, UK",
        created_by: 6,
        start_time: 1755386400000,
        end_time: 1755408000000,
    },
    {
        event_id: 6,
        title: "Nottingham Cybersecurity Conference 2025",
        description: "A conference focusing on the latest cybersecurity threats and solutions, with industry experts sharing their insights.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "Crowne Plaza Nottingham, 17-31 Wollaton St, Nottingham, NG1 5RH, UK",
        created_by: 7,
        start_time: 1755417600000,
        end_time: 1755439200000,
    },
    {
        event_id: 7,
        title: "Nottingham Game Developers Meetup",
        description: "A monthly meetup for game developers to discuss new tools, trends, and showcase their work.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "The Mechanics Institute, 3-5 St James's St, Nottingham, NG1 6FG, UK",
        created_by: 8,
        start_time: 1755450000000,
        end_time: 1755471600000,
    },
    {
        event_id: 8,
        title: "Nottingham Blockchain Summit 2025",
        description: "A conference bringing together blockchain enthusiasts and professionals to explore the latest trends in decentralized technologies.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "Nottingham Conference Centre, Burton St, Nottingham, NG1 4BU, UK",
        created_by: 9,
        start_time: 1755482400000,
        end_time: 1755504000000,
    },
    {
        event_id: 9,
        title: "Nottingham AI & Robotics Expo",
        description: "A global exhibition of the latest advancements in AI and robotics, featuring workshops, demos, and industry leaders.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "University of Nottingham, University Park, Nottingham, NG7 2RD, UK",
        created_by: 10,
        start_time: 1755516000000,
        end_time: 1755537600000,
    },
    {
        event_id: 10,
        title: "Nottingham Digital Marketing Conference",
        description: "An event for marketers to explore the future of digital marketing, with sessions on SEO, content, and social media strategies.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "Nottingham Belfry Hotel, Mellor's Way, Nottingham, NG8 6PY, UK",
        created_by: 11,
        start_time: 1755554400000,
        end_time: 1755576000000,
    },
    {
        event_id: 11,
        title: "Nottingham Tech Job Fair 2025",
        description: "A job fair focused on the technology sector, bringing top companies together to meet potential candidates for various roles.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "Nottingham Castle, Castle Rd, Nottingham, NG1 6EL, UK",
        created_by: 12,
        start_time: 1755597600000,
        end_time: 1755619200000,
    },
    {
        event_id: 12,
        title: "Nottingham JavaScript Developers Meetup",
        description: "Join fellow JavaScript developers to learn new frameworks, tools, and best practices for the modern web.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "The Roundhouse, Nottingham, NG1 4GB, UK",
        created_by: 13,
        start_time: 1755624000000,
        end_time: 1755645600000,
    },
    {
        event_id: 13,
        title: "Nottingham Startup Accelerator Pitch Day",
        description: "An event for startups in the region to pitch their businesses to a panel of investors and industry professionals.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "The Studio, 4 Fletcher Gate, Nottingham, NG1 1QD, UK",
        created_by: 14,
        start_time: 1755657600000,
        end_time: 1755679200000,
    },
    {
        event_id: 14,
        title: "Nottingham UX/UI Design Workshop",
        description: "A hands-on workshop for UX/UI designers to learn the latest techniques in design thinking and user-centered design.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "Broadway Cinema, 14-18 Broad Street, Nottingham, NG1 3AL, UK",
        created_by: 15,
        start_time: 1755690000000,
        end_time: 1755711600000,
    },
    {
        event_id: 15,
        title: "Nottingham Python Programming Meetup",
        description: "A meetup for Python developers to discuss new libraries, frameworks, and tips for writing efficient Python code.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "Nottingham Contemporary, Weekday Cross, Nottingham, NG1 2GB, UK",
        created_by: 1,
        start_time: 1755734400000,
        end_time: 1755756000000,
    },
    {
        event_id: 16,
        title: "Nottingham Cloud Computing Conference",
        description: "A conference focusing on cloud technology, with sessions on cloud infrastructure, DevOps, and distributed systems.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "The Hilton Hotel, Milton St, Nottingham, NG1 3PZ, UK",
        created_by: 2,
        start_time: 1755768000000,
        end_time: 1755789600000,
    },
    {
        event_id: 17,
        title: "Nottingham Tech Innovations Summit",
        description: "A summit dedicated to exploring the latest tech innovations, from AI to smart cities, featuring talks from top innovators.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "Nottingham Science Park, University Blvd, Nottingham, NG7 2TU, UK",
        created_by: 3,
        start_time: 1755801600000,
        end_time: 1755823200000,
    },
    {
        event_id: 18,
        title: "Nottingham Digital Art Exhibition 2025",
        description: "An exhibition showcasing the intersection of digital technology and art, featuring local and international digital artists.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "New Art Exchange, 39-41 Gregory Blvd, Nottingham, NG7 6BE, UK",
        created_by: 4,
        start_time: 1755835200000,
        end_time: 1755856800000,
    },
    {
        event_id: 19,
        title: "Nottingham Data Science Conference",
        description: "A conference for data scientists and analysts to discuss the future of data analysis, machine learning, and predictive analytics.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "The Conference Centre, 3-5 St. James's Street, Nottingham, NG1 6FG, UK",
        created_by: 5,
        start_time: 1755868800000,
        end_time: 1755890400000,
    },
    {
        event_id: 20,
        title: "Nottingham Data Engineering Meetup",
        description: "A meetup for data engineers to share their experiences, tools, and methodologies for managing large-scale data systems.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "The Exchange, 2 Fletcher Gate, Nottingham, NG1 1QQ, UK",
        created_by: 6,
        start_time: 1755902400000,
        end_time: 1755924000000,
    },
    {
        event_id: 21,
        title: "Nottingham Digital Design Hackathon",
        description: "A 24-hour event where designers and developers come together to create innovative digital projects.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "Nottingham Arts Theatre, 3 George St, Nottingham, NG1 3BH, UK",
        created_by: 7,
        start_time: 1755936000000,
        end_time: 1755957600000,
    },
    {
        event_id: 22,
        title: "Nottingham Mobile App Development Workshop",
        description: "A workshop teaching the fundamentals of mobile app development, covering both Android and iOS platforms.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "The Hive, 6-8 Castle Gate, Nottingham, NG1 7AQ, UK",
        created_by: 8,
        start_time: 1755981600000,
        end_time: 1756003200000,
    },
    {
        event_id: 23,
        title: "Nottingham eSports Tournament 2025",
        description: "An exciting eSports tournament bringing competitive gaming to Nottingham with cash prizes and a live audience.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "The Arena, Nottingham, NG1 5AA, UK",
        created_by: 9,
        start_time: 1756032000000,
        end_time: 1756053600000,
    },
    {
        event_id: 24,
        title: "Nottingham Tech For Good Conference",
        description: "A conference dedicated to using technology for social impact, featuring talks on tech for education, healthcare, and sustainability.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "Nottingham University, Nottingham, NG7 2RD, UK",
        created_by: 10,
        start_time: 1756080000000,
        end_time: 1756101600000,
    },
    {
        event_id: 25,
        title: "Nottingham Digital Transformation Summit",
        description: "A summit focused on how businesses can implement digital transformation to optimize processes and customer engagement.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "The Conference Centre, Nottingham, NG1 6FG, UK",
        created_by: 11,
        start_time: 1756125600000,
        end_time: 1756147200000,
    },
    {
        event_id: 26,
        title: "Nottingham Data Visualization Workshop",
        description: "A hands-on workshop focused on creating impactful data visualizations, from charts to interactive dashboards.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "Broadway Cinema, Nottingham, NG1 3AL, UK",
        created_by: 12,
        start_time: 1756173600000,
        end_time: 1756195200000,
    },
    {
        event_id: 27,
        title: "Nottingham Social Media Marketing Summit",
        description: "An event for businesses and marketers to learn about social media strategies, influencer marketing, and content creation.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "Crowne Plaza Nottingham, Nottingham, NG1 5RH, UK",
        created_by: 13,
        start_time: 1756216800000,
        end_time: 1756238400000,
    },
    {
        event_id: 28,
        title: "Nottingham Digital Product Design Expo",
        description: "An exhibition showcasing the latest trends in product design, from UI/UX to industrial design, with interactive demos.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "Nottingham Trent University, Nottingham, NG1 4FQ, UK",
        created_by: 14,
        start_time: 1756252800000,
        end_time: 1756274400000,
    },
    {
        event_id: 29,
        title: "Nottingham Developer & Designer Mixer",
        description: "A networking event for developers and designers to meet, collaborate, and create new ideas and projects together.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "The Studio, 4 Fletcher Gate, Nottingham, NG1 1QD, UK",
        created_by: 15,
        start_time: 1756296000000,
        end_time: 1756317600000,
    },
    {
        event_id: 30,
        title: "Nottingham Virtual Reality Conference",
        description: "A conference exploring the future of virtual reality, from gaming to healthcare applications, with live demonstrations.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "University of Nottingham, Nottingham, NG7 2RD, UK",
        created_by: 1,
        start_time: 1756344000000,
        end_time: 1756365600000,
    },
    {
        event_id: 31,
        title: "Nottingham Digital Content Summit",
        description: "A summit for digital content creators to discuss trends in video production, blogging, and social media content.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "The Mechanics Institute, Nottingham, NG1 6FG, UK",
        created_by: 2,
        start_time: 1756392000000,
        end_time: 1756413600000,
    },
    {
        event_id: 32,
        title: "Nottingham IoT Expo 2025",
        description: "An exhibition showcasing Internet of Things technologies, with solutions for smart homes, cities, and industrial automation.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "Nottingham Conference Centre, Nottingham, NG1 4BU, UK",
        created_by: 3,
        start_time: 1756435200000,
        end_time: 1756456800000,
    },
    {
        event_id: 33,
        title: "Nottingham Digital Journalism Summit",
        description: "A summit for journalists to explore digital journalism trends, including storytelling, multimedia, and audience engagement.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "Broadway Cinema, Nottingham, NG1 3AL, UK",
        created_by: 4,
        start_time: 1756478400000,
        end_time: 1756500000000,
    },
    {
        event_id: 34,
        title: "Nottingham Tech and Innovation Awards 2025",
        description: "A prestigious awards ceremony honoring the best of Nottingham's tech and innovation scene, from startups to industry giants.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "The Ritz, Nottingham, NG1 3BT, UK",
        created_by: 5,
        start_time: 1756516800000,
        end_time: 1756538400000,
    },
    {
        event_id: 35,
        title: "Nottingham Digital Film Festival",
        description: "A film festival showcasing digital films and video projects, with screenings, Q&As, and workshops for filmmakers.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "Nottingham Contemporary, Nottingham, NG1 2GB, UK",
        created_by: 6,
        start_time: 1756555200000,
        end_time: 1756576800000,
    },
    {
        event_id: 36,
        title: "Nottingham Tech Industry Networking Event",
        description: "A networking event for tech professionals, offering the chance to meet with industry leaders and discuss business trends.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "The Exchange, Nottingham, NG1 1QQ, UK",
        created_by: 7,
        start_time: 1756603200000,
        end_time: 1756624800000,
    },
    {
        event_id: 37,
        title: "Nottingham IoT Developer Meetup",
        description: "A meetup for developers working on Internet of Things projects, sharing ideas, experiences, and innovations in IoT technology.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "The Roundhouse, Nottingham, NG1 4GB, UK",
        created_by: 8,
        start_time: 1756646400000,
        end_time: 1756668000000,
    },
    {
        event_id: 38,
        title: "Nottingham Social Innovation Summit",
        description: "A summit that brings together social innovators to discuss the future of socially-driven tech solutions.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "Nottingham University, Nottingham, NG7 2RD, UK",
        created_by: 9,
        start_time: 1756692000000,
        end_time: 1756713600000,
    },
    {
        event_id: 39,
        title: "Nottingham Code for Good Hackathon",
        description: "A hackathon where developers come together to build technology solutions for social good.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "Nottingham Trent University, Nottingham, NG1 4FQ, UK",
        created_by: 4,
        start_time: 1756740000000,
        end_time: 1756761600000,
    },
    {
        event_id: 40,
        title: "Nottingham Digital Innovation Forum",
        description: "A forum for discussing how digital innovations are shaping various industries, from healthcare to education.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "The Hilton Hotel, Nottingham, NG1 3PZ, UK",
        created_by: 1,
        start_time: 1756780800000,
        end_time: 1756802400000,
    },
    {
        event_id: 41,
        title: "Nottingham Digital Marketing Bootcamp",
        description: "A bootcamp for digital marketers to learn new skills in SEO, PPC, social media, and more.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "The Studio, Nottingham, NG1 1QD, UK",
        created_by: 2,
        start_time: 1756824000000,
        end_time: 1756845600000,
    },
    {
        event_id: 42,
        title: "Nottingham Digital Architecture Expo",
        description: "An expo focused on digital architecture, showcasing the latest tools, techniques, and projects in architectural technology.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "The Mechanics Institute, Nottingham, NG1 6FG, UK",
        created_by: 3,
        start_time: 1756867200000,
        end_time: 1756888800000,
    },
    {
        event_id: 43,
        title: "Nottingham Startup Showcase",
        description: "A showcase event for local startups to pitch their ideas to investors and fellow entrepreneurs.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "The Exchange, Nottingham, NG1 1QQ, UK",
        created_by: 4,
        start_time: 1756910400000,
        end_time: 1756932000000,
    },
    {
        event_id: 44,
        title: "Nottingham Emerging Tech Forum",
        description: "A forum that highlights emerging technologies such as AR, VR, and AI, with talks from industry pioneers.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "Nottingham University, Nottingham, NG7 2RD, UK",
        created_by: 5,
        start_time: 1756953600000,
        end_time: 1756975200000,
    },
    {
        event_id: 45,
        title: "Nottingham IoT Product Demo Day",
        description: "A demo day where IoT companies showcase their products and solutions to investors and potential customers.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "The Studio, Nottingham, NG1 1QD, UK",
        created_by: 6,
        start_time: 1756996800000,
        end_time: 1757018400000,
    },
    {
        event_id: 46,
        title: "Nottingham Tech Meetup for Women in Tech",
        description: "A meetup focused on empowering women in the tech industry with networking and career-building opportunities.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "Nottingham Contemporary, Nottingham, NG1 2GB, UK",
        created_by: 7,
        start_time: 1757040000000,
        end_time: 1757061600000,
    },
    {
        event_id: 47,
        title: "Nottingham Smart Cities Summit",
        description: "A summit discussing the future of smart cities, with a focus on technology-driven urban planning and sustainability.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "Nottingham Conference Centre, Nottingham, NG1 4BU, UK",
        created_by: 8,
        start_time: 1757083200000,
        end_time: 1757104800000,
    },
    {
        event_id: 48,
        title: "Nottingham Blockchain Developer Meetup",
        description: "A meetup for blockchain developers to discuss new blockchain frameworks, use cases, and development techniques.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "The Roundhouse, Nottingham, NG1 4GB, UK",
        created_by: 9,
        start_time: 1757126400000,
        end_time: 1757148000000,
    },
    {
        event_id: 49,
        title: "Nottingham Machine Learning Meetup",
        description: "A meetup for machine learning practitioners to share their knowledge, projects, and research in AI and data science.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "The Exchange, Nottingham, NG1 1QQ, UK",
        created_by: 5,
        start_time: 1757179200000,
        end_time: 1757200800000,
    },
    {
        event_id: 50,
        title: "Nottingham Quantum Computing Conference",
        description: "A conference focusing on the latest breakthroughs in quantum computing, with talks from leading researchers and scientists.",
        location: { latitude: 52.9548, longitude: -1.1581 },
        address: "The Hilton Hotel, Nottingham, NG1 3PZ, UK",
        created_by: 1,
        start_time: 1757232000000,
        end_time: 1757253600000,
    },
];
exports.default = eventData;
