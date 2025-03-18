import { Event } from "../../../types/types";
const eventData: Event[] = [
  {
    event_id: 1,
    title: "Nottingham Tech Conference 2025",
    description:
      "A conference discussing the latest trends in technology and software development, with industry leaders sharing their expertise.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address:
      "Nottingham Trent University, 50 Shakespeare St, Nottingham, NG1 4FQ, UK",
    created_by: 2,
    start_time: 1755277200000,
    end_time: 1755306000000,
  },
  {
    event_id: 2,
    title: "Nottingham Coding Bootcamp 2025",
    description:
      "An immersive bootcamp for aspiring developers, covering web development, algorithms, and data structures.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address:
      "Nottingham Trent University, 50 Shakespeare St, Nottingham, NG1 4FQ, UK",
    created_by: 3,
    start_time: 1755280800000,
    end_time: 1755302400000,
  },
  {
    event_id: 3,
    title: "Nottingham Startup Expo 2025",
    description:
      "A networking event for entrepreneurs and startups, showcasing innovative businesses and investment opportunities.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address:
      "Motorpoint Arena Nottingham, 44 Ormston St, Nottingham, NG1 5AA, UK",
    created_by: 4,
    start_time: 1755310800000,
    end_time: 1755332400000,
  },
  {
    event_id: 4,
    title: "Artificial Intelligence Workshop - Nottingham",
    description:
      "A hands-on workshop for AI enthusiasts, covering the basics of machine learning and its real-world applications.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address:
      "The National Videogame Museum, 22-26 Hockley, Nottingham, NG1 1FP, UK",
    created_by: 5,
    start_time: 1755354000000,
    end_time: 1755375600000,
  },
  {
    event_id: 5,
    title: "Nottingham Web Development Meetup",
    description:
      "A casual meetup for web developers to share ideas, talk about trends, and collaborate on new projects.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "The Old Library, 28-30 St James's St, Nottingham, NG1 6FG, UK",
    created_by: 6,
    start_time: 1755386400000,
    end_time: 1755408000000,
  },
  {
    event_id: 6,
    title: "Nottingham Cybersecurity Conference 2025",
    description:
      "A conference focusing on the latest cybersecurity threats and solutions, with industry experts sharing their insights.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address:
      "Crowne Plaza Nottingham, 17-31 Wollaton St, Nottingham, NG1 5RH, UK",
    created_by: 7,
    start_time: 1755417600000,
    end_time: 1755439200000,
  },
  {
    event_id: 7,
    title: "Nottingham Game Developers Meetup",
    description:
      "A monthly meetup for game developers to discuss new tools, trends, and showcase their work.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address:
      "The Mechanics Institute, 3-5 St James's St, Nottingham, NG1 6FG, UK",
    created_by: 8,
    start_time: 1755450000000,
    end_time: 1755471600000,
  },
  {
    event_id: 8,
    title: "Nottingham Blockchain Summit 2025",
    description:
      "A conference bringing together blockchain enthusiasts and professionals to explore the latest trends in decentralized technologies.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "Nottingham Conference Centre, Burton St, Nottingham, NG1 4BU, UK",
    created_by: 9,
    start_time: 1755482400000,
    end_time: 1755504000000,
  },
  {
    event_id: 9,
    title: "Nottingham AI & Robotics Expo",
    description:
      "A global exhibition of the latest advancements in AI and robotics, featuring workshops, demos, and industry leaders.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address:
      "University of Nottingham, University Park, Nottingham, NG7 2RD, UK",
    created_by: 10,
    start_time: 1755516000000,
    end_time: 1755537600000,
  },
  {
    event_id: 10,
    title: "Nottingham Digital Marketing Conference",
    description:
      "An event for marketers to explore the future of digital marketing, with sessions on SEO, content, and social media strategies.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "Nottingham Belfry Hotel, Mellor's Way, Nottingham, NG8 6PY, UK",
    created_by: 11,
    start_time: 1755554400000,
    end_time: 1755576000000,
  },
  {
    event_id: 11,
    title: "Nottingham Tech Job Fair 2025",
    description:
      "A job fair focused on the technology sector, bringing top companies together to meet potential candidates for various roles.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "Nottingham Castle, Castle Rd, Nottingham, NG1 6EL, UK",
    created_by: 12,
    start_time: 1755597600000,
    end_time: 1755619200000,
  },
  {
    event_id: 12,
    title: "Nottingham JavaScript Developers Meetup",
    description:
      "Join fellow JavaScript developers to learn new frameworks, tools, and best practices for the modern web.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "The Roundhouse, Nottingham, NG1 4GB, UK",
    created_by: 13,
    start_time: 1755624000000,
    end_time: 1755645600000,
  },
  {
    event_id: 13,
    title: "Nottingham Startup Accelerator Pitch Day",
    description:
      "An event for startups in the region to pitch their businesses to a panel of investors and industry professionals.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "The Studio, 4 Fletcher Gate, Nottingham, NG1 1QD, UK",
    created_by: 14,
    start_time: 1755657600000,
    end_time: 1755679200000,
  },
  {
    event_id: 14,
    title: "Nottingham UX/UI Design Workshop",
    description:
      "A hands-on workshop for UX/UI designers to learn the latest techniques in design thinking and user-centered design.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "Broadway Cinema, 14-18 Broad Street, Nottingham, NG1 3AL, UK",
    created_by: 15,
    start_time: 1755690000000,
    end_time: 1755711600000,
  },
  {
    event_id: 15,
    title: "Nottingham Python Programming Meetup",
    description:
      "A meetup for Python developers to discuss new libraries, frameworks, and tips for writing efficient Python code.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "Nottingham Contemporary, Weekday Cross, Nottingham, NG1 2GB, UK",
    created_by: 1,
    start_time: 1755734400000,
    end_time: 1755756000000,
  },
  {
    event_id: 16,
    title: "Nottingham Cloud Computing Conference",
    description:
      "A conference focusing on cloud technology, with sessions on cloud infrastructure, DevOps, and distributed systems.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "The Hilton Hotel, Milton St, Nottingham, NG1 3PZ, UK",
    created_by: 2,
    start_time: 1755768000000,
    end_time: 1755789600000,
  },
  {
    event_id: 17,
    title: "Nottingham Tech Innovations Summit",
    description:
      "A summit dedicated to exploring the latest tech innovations, from AI to smart cities, featuring talks from top innovators.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address:
      "Nottingham Science Park, University Blvd, Nottingham, NG7 2TU, UK",
    created_by: 3,
    start_time: 1755801600000,
    end_time: 1755823200000,
  },
  {
    event_id: 18,
    title: "Nottingham Digital Art Exhibition 2025",
    description:
      "An exhibition showcasing the intersection of digital technology and art, featuring local and international digital artists.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "New Art Exchange, 39-41 Gregory Blvd, Nottingham, NG7 6BE, UK",
    created_by: 4,
    start_time: 1755835200000,
    end_time: 1755856800000,
  },
  {
    event_id: 19,
    title: "Nottingham Data Science Conference",
    description:
      "A conference for data scientists and analysts to discuss the future of data analysis, machine learning, and predictive analytics.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address:
      "The Conference Centre, 3-5 St. James's Street, Nottingham, NG1 6FG, UK",
    created_by: 5,
    start_time: 1755868800000,
    end_time: 1755890400000,
  },
  {
    event_id: 20,
    title: "Nottingham Data Engineering Meetup",
    description:
      "A meetup for data engineers to share their experiences, tools, and methodologies for managing large-scale data systems.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "The Exchange, 2 Fletcher Gate, Nottingham, NG1 1QQ, UK",
    created_by: 6,
    start_time: 1755902400000,
    end_time: 1755924000000,
  },
  {
    event_id: 21,
    title: "Nottingham Digital Design Hackathon",
    description:
      "A 24-hour event where designers and developers come together to create innovative digital projects.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "Nottingham Arts Theatre, 3 George St, Nottingham, NG1 3BH, UK",
    created_by: 7,
    start_time: 1755936000000,
    end_time: 1755957600000,
  },
  {
    event_id: 22,
    title: "Nottingham Mobile App Development Workshop",
    description:
      "A workshop teaching the fundamentals of mobile app development, covering both Android and iOS platforms.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "The Hive, 6-8 Castle Gate, Nottingham, NG1 7AQ, UK",
    created_by: 8,
    start_time: 1755981600000,
    end_time: 1756003200000,
  },
  {
    event_id: 23,
    title: "Nottingham eSports Tournament 2025",
    description:
      "An exciting eSports tournament bringing competitive gaming to Nottingham with cash prizes and a live audience.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "The Arena, Nottingham, NG1 5AA, UK",
    created_by: 9,
    start_time: 1756032000000,
    end_time: 1756053600000,
  },
  {
    event_id: 24,
    title: "Nottingham Tech For Good Conference",
    description:
      "A conference dedicated to using technology for social impact, featuring talks on tech for education, healthcare, and sustainability.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "Nottingham University, Nottingham, NG7 2RD, UK",
    created_by: 10,
    start_time: 1756080000000,
    end_time: 1756101600000,
  },
  {
    event_id: 25,
    title: "Nottingham Digital Transformation Summit",
    description:
      "A summit focused on how businesses can implement digital transformation to optimize processes and customer engagement.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "The Conference Centre, Nottingham, NG1 6FG, UK",
    created_by: 11,
    start_time: 1756125600000,
    end_time: 1756147200000,
  },
  {
    event_id: 26,
    title: "Nottingham Data Visualization Workshop",
    description:
      "A hands-on workshop focused on creating impactful data visualizations, from charts to interactive dashboards.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "Broadway Cinema, Nottingham, NG1 3AL, UK",
    created_by: 12,
    start_time: 1756173600000,
    end_time: 1756195200000,
  },
  {
    event_id: 27,
    title: "Nottingham Social Media Marketing Summit",
    description:
      "An event for businesses and marketers to learn about social media strategies, influencer marketing, and content creation.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "Crowne Plaza Nottingham, Nottingham, NG1 5RH, UK",
    created_by: 13,
    start_time: 1756216800000,
    end_time: 1756238400000,
  },
  {
    event_id: 28,
    title: "Nottingham Digital Product Design Expo",
    description:
      "An exhibition showcasing the latest trends in product design, from UI/UX to industrial design, with interactive demos.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "Nottingham Trent University, Nottingham, NG1 4FQ, UK",
    created_by: 14,
    start_time: 1756252800000,
    end_time: 1756274400000,
  },
  {
    event_id: 29,
    title: "Nottingham Developer & Designer Mixer",
    description:
      "A networking event for developers and designers to meet, collaborate, and create new ideas and projects together.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "The Studio, 4 Fletcher Gate, Nottingham, NG1 1QD, UK",
    created_by: 15,
    start_time: 1756296000000,
    end_time: 1756317600000,
  },
  {
    event_id: 30,
    title: "Nottingham Virtual Reality Conference",
    description:
      "A conference exploring the future of virtual reality, from gaming to healthcare applications, with live demonstrations.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "University of Nottingham, Nottingham, NG7 2RD, UK",
    created_by: 1,
    start_time: 1756344000000,
    end_time: 1756365600000,
  },
  {
    event_id: 31,
    title: "Nottingham Digital Content Summit",
    description:
      "A summit for digital content creators to discuss trends in video production, blogging, and social media content.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "The Mechanics Institute, Nottingham, NG1 6FG, UK",
    created_by: 2,
    start_time: 1756392000000,
    end_time: 1756413600000,
  },
  {
    event_id: 32,
    title: "Nottingham IoT Expo 2025",
    description:
      "An exhibition showcasing Internet of Things technologies, with solutions for smart homes, cities, and industrial automation.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "Nottingham Conference Centre, Nottingham, NG1 4BU, UK",
    created_by: 3,
    start_time: 1756435200000,
    end_time: 1756456800000,
  },
  {
    event_id: 33,
    title: "Nottingham Digital Journalism Summit",
    description:
      "A summit for journalists to explore digital journalism trends, including storytelling, multimedia, and audience engagement.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "Broadway Cinema, Nottingham, NG1 3AL, UK",
    created_by: 4,
    start_time: 1756478400000,
    end_time: 1756500000000,
  },
  {
    event_id: 34,
    title: "Nottingham Tech and Innovation Awards 2025",
    description:
      "A prestigious awards ceremony honoring the best of Nottingham's tech and innovation scene, from startups to industry giants.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "The Ritz, Nottingham, NG1 3BT, UK",
    created_by: 5,
    start_time: 1756516800000,
    end_time: 1756538400000,
  },
  {
    event_id: 35,
    title: "Nottingham Digital Film Festival",
    description:
      "A film festival showcasing digital films and video projects, with screenings, Q&As, and workshops for filmmakers.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "Nottingham Contemporary, Nottingham, NG1 2GB, UK",
    created_by: 6,
    start_time: 1756555200000,
    end_time: 1756576800000,
  },
  {
    event_id: 36,
    title: "Nottingham Tech Industry Networking Event",
    description:
      "A networking event for tech professionals, offering the chance to meet with industry leaders and discuss business trends.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "The Exchange, Nottingham, NG1 1QQ, UK",
    created_by: 7,
    start_time: 1756603200000,
    end_time: 1756624800000,
  },
  {
    event_id: 37,
    title: "Nottingham IoT Developer Meetup",
    description:
      "A meetup for developers working on Internet of Things projects, sharing ideas, experiences, and innovations in IoT technology.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "The Roundhouse, Nottingham, NG1 4GB, UK",
    created_by: 8,
    start_time: 1756646400000,
    end_time: 1756668000000,
  },
  {
    event_id: 38,
    title: "Nottingham Social Innovation Summit",
    description:
      "A summit that brings together social innovators to discuss the future of socially-driven tech solutions.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "Nottingham University, Nottingham, NG7 2RD, UK",
    created_by: 9,
    start_time: 1756692000000,
    end_time: 1756713600000,
  },
  {
    event_id: 39,
    title: "Nottingham Code for Good Hackathon",
    description:
      "A hackathon where developers come together to build technology solutions for social good.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "Nottingham Trent University, Nottingham, NG1 4FQ, UK",
    created_by: 4,
    start_time: 1756740000000,
    end_time: 1756761600000,
  },
  {
    event_id: 40,
    title: "Nottingham Digital Innovation Forum",
    description:
      "A forum for discussing how digital innovations are shaping various industries, from healthcare to education.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "The Hilton Hotel, Nottingham, NG1 3PZ, UK",
    created_by: 1,
    start_time: 1756780800000,
    end_time: 1756802400000,
  },
  {
    event_id: 41,
    title: "Nottingham Digital Marketing Bootcamp",
    description:
      "A bootcamp for digital marketers to learn new skills in SEO, PPC, social media, and more.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "The Studio, Nottingham, NG1 1QD, UK",
    created_by: 2,
    start_time: 1756824000000,
    end_time: 1756845600000,
  },
  {
    event_id: 42,
    title: "Nottingham Digital Architecture Expo",
    description:
      "An expo focused on digital architecture, showcasing the latest tools, techniques, and projects in architectural technology.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "The Mechanics Institute, Nottingham, NG1 6FG, UK",
    created_by: 3,
    start_time: 1756867200000,
    end_time: 1756888800000,
  },
  {
    event_id: 43,
    title: "Nottingham Startup Showcase",
    description:
      "A showcase event for local startups to pitch their ideas to investors and fellow entrepreneurs.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "The Exchange, Nottingham, NG1 1QQ, UK",
    created_by: 4,
    start_time: 1756910400000,
    end_time: 1756932000000,
  },
  {
    event_id: 44,
    title: "Nottingham Emerging Tech Forum",
    description:
      "A forum that highlights emerging technologies such as AR, VR, and AI, with talks from industry pioneers.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "Nottingham University, Nottingham, NG7 2RD, UK",
    created_by: 5,
    start_time: 1756953600000,
    end_time: 1756975200000,
  },
  {
    event_id: 45,
    title: "Nottingham IoT Product Demo Day",
    description:
      "A demo day where IoT companies showcase their products and solutions to investors and potential customers.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "The Studio, Nottingham, NG1 1QD, UK",
    created_by: 6,
    start_time: 1756996800000,
    end_time: 1757018400000,
  },
  {
    event_id: 46,
    title: "Nottingham Tech Meetup for Women in Tech",
    description:
      "A meetup focused on empowering women in the tech industry with networking and career-building opportunities.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "Nottingham Contemporary, Nottingham, NG1 2GB, UK",
    created_by: 7,
    start_time: 1757040000000,
    end_time: 1757061600000,
  },
  {
    event_id: 47,
    title: "Nottingham Smart Cities Summit",
    description:
      "A summit discussing the future of smart cities, with a focus on technology-driven urban planning and sustainability.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "Nottingham Conference Centre, Nottingham, NG1 4BU, UK",
    created_by: 8,
    start_time: 1757083200000,
    end_time: 1757104800000,
  },
  {
    event_id: 48,
    title: "Nottingham Blockchain Developer Meetup",
    description:
      "A meetup for blockchain developers to discuss new blockchain frameworks, use cases, and development techniques.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "The Roundhouse, Nottingham, NG1 4GB, UK",
    created_by: 9,
    start_time: 1757126400000,
    end_time: 1757148000000,
  },
  {
    event_id: 49,
    title: "Nottingham Machine Learning Meetup",
    description:
      "A meetup for machine learning practitioners to share their knowledge, projects, and research in AI and data science.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "The Exchange, Nottingham, NG1 1QQ, UK",
    created_by: 5,
    start_time: 1757179200000,
    end_time: 1757200800000,
  },
  {
    event_id: 50,
    title: "Nottingham Quantum Computing Conference",
    description:
      "A conference focusing on the latest breakthroughs in quantum computing, with talks from leading researchers and scientists.",
    event_type: "Tech",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "The Hilton Hotel, Nottingham, NG1 3PZ, UK",
    created_by: 1,
    start_time: 1757232000000,
    end_time: 1757253600000,
  },
  {
    event_id: 51,
    title: "Nottingham Art & Sculpture Exhibition",
    description:
      "An exhibition featuring contemporary and classical artworks from local and international artists.",
    event_type: "Culture",
    details:
      "Experience a captivating display of paintings, sculptures, and installations from emerging and renowned artists. Interactive sessions and artist talks included.",
    location: { latitude: 52.9536, longitude: -1.1505 },
    address: "Nottingham Contemporary, Weekday Cross, Nottingham NG1 2GB, UK",
    created_by: 7,
    start_time: 1756782000000,
    end_time: 1756803600000,
  },
  {
    event_id: 52,
    title: "Shakespeare in the Park",
    description:
      "A live outdoor performance of Shakespeare's classic plays with modern twists.",
    event_type: "Culture",
    details:
      "Bring a picnic and enjoy an evening of classic theatre under the stars. Performances by local and national theatre groups.",
    location: { latitude: 52.95, longitude: -1.155 },
    address: "Wollaton Park, Nottingham NG8 2AE, UK",
    created_by: 12,
    start_time: 1756935600000,
    end_time: 1756957200000,
  },
  {
    event_id: 53,
    title: "Nottingham Jazz & Blues Festival",
    description:
      "A celebration of jazz and blues with performances by talented musicians.",
    event_type: "Culture",
    details:
      "Live music, food stalls, and a vibrant atmosphere. Featuring both local and international jazz artists.",
    location: { latitude: 52.9574, longitude: -1.151 },
    address: "The Rescue Rooms, Goldsmith St, Nottingham NG1 5GG, UK",
    created_by: 3,
    start_time: 1757126400000,
    end_time: 1757155200000,
  },
  {
    event_id: 54,
    title: "Cultural Food & Drink Fair",
    description:
      "A showcase of cuisines from around the world, with food tastings and cultural performances.",
    event_type: "Culture",
    details:
      "Sample delicacies, watch live cooking demos, and enjoy traditional music and dance performances.",
    location: { latitude: 52.9542, longitude: -1.1489 },
    address: "Old Market Square, Nottingham NG1 2DT, UK",
    created_by: 11,
    start_time: 1757302800000,
    end_time: 1757324400000,
  },
  {
    event_id: 55,
    title: "Nottingham Film Screening: Indie Shorts",
    description:
      "A screening of award-winning short films by indie filmmakers.",
    event_type: "Culture",
    details:
      "Meet the filmmakers, participate in Q&A sessions, and explore the art of short filmmaking.",
    location: { latitude: 52.9535, longitude: -1.151 },
    address: "Broadway Cinema, 14-18 Broad St, Nottingham NG1 3AL, UK",
    created_by: 9,
    start_time: 1757475600000,
    end_time: 1757493600000,
  },
  {
    event_id: 56,
    title: "Poetry Night: Voices of Nottingham",
    description: "An evening of poetry recitals by local and national poets.",
    event_type: "Culture",
    details:
      "Experience moving performances from spoken word artists and poets, covering themes of life, love, and social issues.",
    location: { latitude: 52.954, longitude: -1.1495 },
    address: "The Bookcase, 50 Main St, Nottingham NG12 5AD, UK",
    created_by: 5,
    start_time: 1757652000000,
    end_time: 1757670000000,
  },
  {
    event_id: 57,
    title: "Nottingham Folk Music Evening",
    description:
      "An evening of folk music celebrating local and regional heritage.",
    event_type: "Culture",
    details:
      "Enjoy live performances by talented folk bands and solo artists, along with traditional dance displays.",
    location: { latitude: 52.9517, longitude: -1.1473 },
    address: "Jam Cafe, 12 Heathcoat St, Nottingham NG1 3AA, UK",
    created_by: 14,
    start_time: 1757824800000,
    end_time: 1757846400000,
  },
  {
    event_id: 58,
    title: "Nottingham History Walk",
    description: "A guided tour through Nottingham's historical landmarks.",
    event_type: "Culture",
    details:
      "Learn about the city's rich history, from Robin Hood legends to the industrial revolution.",
    location: { latitude: 52.951, longitude: -1.1498 },
    address: "Nottingham Castle, Lenton Rd, Nottingham NG1 6EL, UK",
    created_by: 2,
    start_time: 1757997600000,
    end_time: 1758012000000,
  },
  {
    event_id: 59,
    title: "Theatre Workshop: Improvisation Skills",
    description: "A hands-on workshop for actors and drama enthusiasts.",
    event_type: "Culture",
    details:
      "Learn the art of improv through fun exercises and creative games, led by experienced theatre professionals.",
    location: { latitude: 52.957, longitude: -1.1519 },
    address: "Lakeside Arts, University of Nottingham, Nottingham NG7 2RD, UK",
    created_by: 10,
    start_time: 1758181200000,
    end_time: 1758202800000,
  },
  {
    event_id: 60,
    title: "Creative Writing Workshop",
    description:
      "A workshop for aspiring writers to hone their storytelling skills.",
    event_type: "Culture",
    details:
      "Engage in creative writing exercises, receive feedback, and develop your writing craft.",
    location: { latitude: 52.9555, longitude: -1.1522 },
    address: "Nottingham Writers' Studio, 25 Hockley, Nottingham NG1 1FP, UK",
    created_by: 13,
    start_time: 1758364800000,
    end_time: 1758386400000,
  },

  {
    event_id: 61,
    title: "Nottingham Classical Music Evening",
    description:
      "An enchanting evening of classical music performances in a historic venue.",
    event_type: "Culture",
    details:
      "Enjoy a selection of symphonies and chamber music by renowned orchestras, set in a beautifully restored venue. Experience the magic of classical music under expert conductors.",
    location: { latitude: 52.953, longitude: -1.1575 },
    address:
      "Nottingham Royal Concert Hall, Convent St, Nottingham NG1 3LN, UK",
    created_by: 8,
    start_time: 1758537600000,
    end_time: 1758559200000,
  },
  {
    event_id: 62,
    title: "Nottingham Street Art Festival",
    description:
      "A vibrant festival celebrating street art and graffiti in the heart of Nottingham.",
    event_type: "Culture",
    details:
      "Join local artists for a weekend of murals, live graffiti, and interactive art installations across the city's urban spaces.",
    location: { latitude: 52.956, longitude: -1.157 },
    address: "Nottingham City Centre, Nottingham NG1 2AA, UK",
    created_by: 3,
    start_time: 1758724800000,
    end_time: 1758746400000,
  },
  {
    event_id: 63,
    title: "Nottingham Dance & Theatre Night",
    description:
      "A night celebrating dance and theatrical performances in a contemporary setting.",
    event_type: "Culture",
    details:
      "Watch a series of short performances ranging from modern dance to theatrical monologues, engaging the audience in a unique cultural experience.",
    location: { latitude: 52.9538, longitude: -1.1552 },
    address: "Nottingham Playhouse, 22 Drury Ln, Nottingham NG1 3ET, UK",
    created_by: 11,
    start_time: 1758912000000,
    end_time: 1758933600000,
  },
  {
    event_id: 64,
    title: "Nottingham Literature Festival",
    description:
      "A festival dedicated to literature, featuring author readings, discussions, and book signings.",
    event_type: "Culture",
    details:
      "Meet your favorite authors, participate in panel discussions, and explore a diverse range of literary genres in this engaging festival.",
    location: { latitude: 52.955, longitude: -1.1525 },
    address: "Nottingham Literature Centre, 5 Friar Ln, Nottingham NG1 3BA, UK",
    created_by: 6,
    start_time: 1759099200000,
    end_time: 1759120800000,
  },
  {
    event_id: 65,
    title: "Nottingham Cultural Heritage Day",
    description:
      "A day dedicated to exploring the rich cultural heritage of Nottingham.",
    event_type: "Culture",
    details:
      "Enjoy guided tours, exhibitions, and interactive sessions that delve into Nottingham's history and cultural evolution.",
    location: { latitude: 52.959, longitude: -1.15 },
    address: "Nottingham Museum, Lenton, Nottingham NG1 3TW, UK",
    created_by: 10,
    start_time: 1759286400000,
    end_time: 1759308000000,
  },
  {
    event_id: 66,
    title: "Nottingham Folk Tales Evening",
    description:
      "An evening of storytelling and folk tales from local legends.",
    event_type: "Culture",
    details:
      "Listen to captivating stories and folklore shared by expert storytellers, preserving the oral traditions of Nottingham.",
    location: { latitude: 52.9543, longitude: -1.1567 },
    address: "Nottingham Central Library, Angel Row, Nottingham NG1 2HF, UK",
    created_by: 4,
    start_time: 1759473600000,
    end_time: 1759495200000,
  },
  {
    event_id: 67,
    title: "Nottingham Cultural Parade",
    description:
      "A vibrant parade showcasing Nottingham's diverse cultural communities.",
    event_type: "Culture",
    details:
      "Participate or watch as local communities come together in a colourful display of traditional costumes, music, and dance.",
    location: { latitude: 52.952, longitude: -1.155 },
    address: "Nottingham City Centre, High Pavement, Nottingham NG1 2BF, UK",
    created_by: 13,
    start_time: 1759660800000,
    end_time: 1759682400000,
  },
  {
    event_id: 68,
    title: "Nottingham International Film Festival",
    description:
      "A film festival featuring international films with cultural significance.",
    event_type: "Culture",
    details:
      "Screenings, director talks, and panel discussions with filmmakers from around the world in a culturally immersive setting.",
    location: { latitude: 52.9531, longitude: -1.1528 },
    address: "Nottingham Film Centre, 20 South Parade, Nottingham NG1 5AD, UK",
    created_by: 9,
    start_time: 1759848000000,
    end_time: 1759872000000,
  },
  {
    event_id: 69,
    title: "Nottingham Craft & Artisan Market",
    description:
      "A market celebrating local craftsmanship and artisan products.",
    event_type: "Culture",
    details:
      "Discover handmade crafts, local produce, and traditional artisan goods. Engage with vendors and learn about their craft.",
    location: { latitude: 52.9542, longitude: -1.1489 },
    address: "Nottingham Market Square, Nottingham NG1 2DT, UK",
    created_by: 15,
    start_time: 1760035200000,
    end_time: 1760056800000,
  },
  {
    event_id: 70,
    title: "Nottingham Cultural Open Mic Night",
    description:
      "A night for local talent to showcase their creative expressions in music, poetry, and art.",
    event_type: "Culture",
    details:
      "Join local artists, poets, and musicians in a supportive open mic environment, encouraging creativity and community engagement.",
    location: { latitude: 52.9525, longitude: -1.16 },
    address: "Nottingham Arts Club, 18 Derby Rd, Nottingham NG7 3ER, UK",
    created_by: 7,
    start_time: 1760222400000,
    end_time: 1760244000000,
  },
  {
    event_id: 71,
    title: "Nottingham Football Skills Challenge",
    description:
      "A competitive event focusing on football drills, techniques and skills challenges.",
    event_type: "Sport",
    details:
      "Participate in various football challenges, skill drills, and mini-tournaments designed for players of all levels.",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address: "Trent Bridge, Nottingham, NG2 3XX, UK",
    created_by: 5,
    start_time: 1760395200000,
    end_time: 1760416800000,
  },
  {
    event_id: 72,
    title: "Nottingham Running Festival",
    description:
      "Join this exciting running festival featuring various race categories for all ages.",
    event_type: "Sport",
    details:
      "The festival includes 5k, 10k races, and fun runs, with routes covering scenic areas of Nottingham.",
    location: { latitude: 52.9533, longitude: -1.155 },
    address: "Nottingham Racecourse, Nottingham, NG3 1AB, UK",
    created_by: 12,
    start_time: 1760568000000,
    end_time: 1760589600000,
  },
  {
    event_id: 73,
    title: "Nottingham Cycle Marathon",
    description:
      "A cycling marathon event designed for enthusiasts of all skill levels.",
    event_type: "Sport",
    details:
      "Test your endurance and cycling skills on a marathon route that winds through the picturesque streets of Nottingham.",
    location: { latitude: 52.955, longitude: -1.16 },
    address: "Cycle Hub Nottingham, Nottingham, NG4 2CD, UK",
    created_by: 8,
    start_time: 1760740800000,
    end_time: 1760762400000,
  },
  {
    event_id: 74,
    title: "Nottingham Basketball Tournament",
    description:
      "A local basketball tournament inviting teams from across the city.",
    event_type: "Sport",
    details:
      "Teams compete in a fast-paced tournament, showcasing athleticism and teamwork in a friendly competitive environment.",
    location: { latitude: 52.954, longitude: -1.157 },
    address: "Nottingham Sports Arena, Nottingham, NG1 4BZ, UK",
    created_by: 14,
    start_time: 1760913600000,
    end_time: 1760935200000,
  },
  {
    event_id: 75,
    title: "Nottingham Cricket Open Day",
    description:
      "Experience the spirit of cricket at Nottingham's premier cricket ground.",
    event_type: "Sport",
    details:
      "Join a day full of cricket matches, skill demonstrations, and meet-and-greet sessions with local cricket stars.",
    location: { latitude: 52.952, longitude: -1.159 },
    address: "Nottingham Cricket Club, Nottingham, NG5 6FG, UK",
    created_by: 7,
    start_time: 1761086400000,
    end_time: 1761108000000,
  },
  {
    event_id: 76,
    title: "Nottingham Rugby Friendly",
    description: "A friendly rugby match between local teams.",
    event_type: "Sport",
    details:
      "Watch or participate in a thrilling rugby match that promises high energy and community spirit.",
    location: { latitude: 52.9565, longitude: -1.1605 },
    address: "Nottingham Rugby Park, Nottingham, NG6 7HI, UK",
    created_by: 11,
    start_time: 1761259200000,
    end_time: 1761280800000,
  },
  {
    event_id: 77,
    title: "Nottingham Swimming Gala",
    description:
      "A competitive swimming event open to amateur and professional swimmers.",
    event_type: "Sport",
    details:
      "Compete in various swimming races and relays, and enjoy water sports activities throughout the day.",
    location: { latitude: 52.957, longitude: -1.158 },
    address: "Nottingham Aquatic Centre, Nottingham, NG7 8JK, UK",
    created_by: 3,
    start_time: 1761432000000,
    end_time: 1761453600000,
  },
  {
    event_id: 78,
    title: "Nottingham Tennis Open",
    description:
      "A tennis tournament for players of all levels, from amateurs to pros.",
    event_type: "Sport",
    details:
      "Participate in singles and doubles matches, with professional coaching sessions available throughout the tournament.",
    location: { latitude: 52.9545, longitude: -1.1575 },
    address: "Nottingham Lawn Tennis Club, Nottingham, NG8 9LM, UK",
    created_by: 10,
    start_time: 1761604800000,
    end_time: 1761626400000,
  },
  {
    event_id: 79,
    title: "Nottingham Golf Classic",
    description:
      "A classic golf tournament held at one of Nottingham's premier courses.",
    event_type: "Sport",
    details:
      "Enjoy a day of competitive golf, networking, and relaxation at a top-notch golf course in the city.",
    location: { latitude: 52.9538, longitude: -1.156 },
    address: "Nottingham Golf Club, Nottingham, NG9 1OP, UK",
    created_by: 6,
    start_time: 1761777600000,
    end_time: 1761799200000,
  },
  {
    event_id: 80,
    title: "Nottingham Badminton Championship",
    description: "Compete in Nottingham's annual badminton championship event.",
    event_type: "Sport",
    details:
      "Challenge yourself in singles and doubles matches in this fast-paced badminton competition, open to players of all levels.",
    location: { latitude: 52.9555, longitude: -1.1545 },
    address: "Nottingham Badminton Arena, Nottingham, NG10 2QR, UK",
    created_by: 9,
    start_time: 1761950400000,
    end_time: 1761972000000,
  },
  {
    event_id: 81,
    title: "Nottingham Ultimate Frisbee Tournament",
    description:
      "A fast-paced ultimate frisbee tournament open to teams across the city.",
    event_type: "Sport",
    details:
      "Compete in a dynamic frisbee tournament that tests your agility and teamwork. Open registration for all skill levels.",
    location: { latitude: 52.9565, longitude: -1.1585 },
    address: "Nottingham Sports Field, Nottingham, NG1 6AX, UK",
    created_by: 2,
    start_time: 1762136800000,
    end_time: 1762158400000,
  },
  {
    event_id: 82,
    title: "Nottingham Martial Arts Workshop",
    description:
      "A workshop focusing on martial arts techniques and self-defense.",
    event_type: "Sport",
    details:
      "Learn essential martial arts skills with expert trainers. A great event for beginners and advanced practitioners alike.",
    location: { latitude: 52.957, longitude: -1.159 },
    address:
      "Nottingham Martial Arts Centre, 24 High Rd, Nottingham, NG2 3LR, UK",
    created_by: 11,
    start_time: 1762303200000,
    end_time: 1762324800000,
  },
  {
    event_id: 83,
    title: "Nottingham Swimming Relay Challenge",
    description:
      "A team-based swimming relay event designed for fun and fitness.",
    event_type: "Sport",
    details:
      "Form a team and compete in a relay race at one of Nottingham's premier aquatic centers. Prizes for top teams.",
    location: { latitude: 52.9575, longitude: -1.1582 },
    address: "Nottingham Aquatic Centre, Nottingham, NG7 8JK, UK",
    created_by: 6,
    start_time: 1762476000000,
    end_time: 1762497600000,
  },
  {
    event_id: 84,
    title: "Nottingham Parkour Challenge",
    description:
      "Test your agility and creativity in a parkour challenge across urban obstacles.",
    event_type: "Sport",
    details:
      "Join a group of parkour enthusiasts for a day of obstacle challenges, workshops, and freestyle competitions.",
    location: { latitude: 52.955, longitude: -1.1565 },
    address: "Nottingham Urban Park, Nottingham, NG1 2BD, UK",
    created_by: 8,
    start_time: 1762652400000,
    end_time: 1762674000000,
  },
  {
    event_id: 85,
    title: "Nottingham Archery Contest",
    description: "An archery contest for all ages and skill levels.",
    event_type: "Sport",
    details:
      "Practice your aim and compete in various archery challenges at a historic site in Nottingham.",
    location: { latitude: 52.954, longitude: -1.1578 },
    address: "Nottingham Archery Range, 7 Bow Rd, Nottingham, NG1 5EZ, UK",
    created_by: 14,
    start_time: 1762825200000,
    end_time: 1762846800000,
  },
  {
    event_id: 86,
    title: "Nottingham Cycling Time Trial",
    description:
      "A time trial cycling event for competitive cyclists in Nottingham.",
    event_type: "Sport",
    details:
      "Race against the clock on a specially designed cycling route. Registration required in advance.",
    location: { latitude: 52.956, longitude: -1.1572 },
    address: "Nottingham Cycle Route, Nottingham, NG3 4AA, UK",
    created_by: 3,
    start_time: 1763001600000,
    end_time: 1763023200000,
  },
  {
    event_id: 87,
    title: "Nottingham Rowing Competition",
    description: "Competitive rowing event held on Nottingham's waterways.",
    event_type: "Sport",
    details:
      "Compete in singles or team rowing races, with various categories based on age and skill level.",
    location: { latitude: 52.9548, longitude: -1.1592 },
    address: "Nottingham Rowing Club, Nottingham, NG4 1XY, UK",
    created_by: 7,
    start_time: 1763174400000,
    end_time: 1763196000000,
  },
  {
    event_id: 88,
    title: "Nottingham Volleyball Tournament",
    description:
      "A volleyball tournament featuring indoor and beach volleyball matches.",
    event_type: "Sport",
    details:
      "Form a team and join the competition in a fast-paced volleyball tournament. All skill levels welcome.",
    location: { latitude: 52.9555, longitude: -1.156 },
    address: "Nottingham Volleyball Arena, Nottingham, NG5 2TR, UK",
    created_by: 10,
    start_time: 1763347200000,
    end_time: 1763368800000,
  },
  {
    event_id: 89,
    title: "Nottingham Boxing Night",
    description:
      "An exhilarating boxing event featuring local fighters and exhibitions.",
    event_type: "Sport",
    details:
      "Watch professional boxing matches and enjoy training demonstrations in a thrilling combat sports environment.",
    location: { latitude: 52.9565, longitude: -1.1578 },
    address: "Nottingham Boxing Club, Nottingham, NG6 3UW, UK",
    created_by: 5,
    start_time: 1763516400000,
    end_time: 1763538000000,
  },
  {
    event_id: 90,
    title: "Nottingham Fitness Bootcamp",
    description:
      "A high-intensity fitness bootcamp event in an outdoor setting.",
    event_type: "Sport",
    details:
      "Join professional trainers for a day of high-energy workouts, fitness challenges, and team exercises.",
    location: { latitude: 52.9543, longitude: -1.1589 },
    address: "Nottingham Fitness Park, Nottingham, NG1 1XX, UK",
    created_by: 12,
    start_time: 1763692800000,
    end_time: 1763714400000,
  },
];

export default eventData;
