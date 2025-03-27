import { Event } from "../../../types/types";
const eventData: Event[] = [
  {
    event_id: 1,
    title: "Nottingham Tech Conference 2025",
    description:
      "A major conference discussing the latest trends in technology and software development, featuring industry leaders and breakout sessions.",
    event_type: "Tech",
    details:
      "Join us for a full day of tech insights, keynote speeches, panel discussions, and networking opportunities. Discover innovations in software development and the future of technology.",
    location: { latitude: 52.9548, longitude: -1.1581 },
    address:
      "Nottingham Trent University, 50 Shakespeare St, Nottingham, NG1 4FQ, UK",
    created_by: 2,
    start_time: 1740291600000,
    end_time: 1740316800000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743086931/conference_gxj9aq.jpg",
  },
  {
    event_id: 2,
    title: "Innovate @ Uni: Tech Symposium",
    description:
      "A symposium hosted by Nottingham University to showcase cutting‐edge research and student projects in technology.",
    event_type: "Tech",
    details:
      "The event will feature interactive sessions, live demonstrations, and opportunities for collaboration between academia and industry. Bring your innovative ideas!",
    location: { latitude: 52.953, longitude: -1.1749 },
    address:
      "University of Nottingham, University Park, Nottingham, NG7 2RD, UK",
    created_by: 3,
    start_time: 1741303200000,
    end_time: 1741322400000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743086960/conference-2_avymdl.jpg",
  },
  {
    event_id: 3,
    title: "Digital Art & Tech Fusion",
    description:
      "A unique event that blends digital art with cutting‐edge technology to explore the intersection of creativity and code.",
    event_type: "Tech",
    details:
      "Artists and tech enthusiasts will gather for interactive installations, live demos, and creative workshops that reveal how digital tools transform art.",
    location: { latitude: 52.9485, longitude: -1.161 },
    address: "Nottingham Contemporary, Lenton, Nottingham, NG7 2AE, UK",
    created_by: 4,
    start_time: 1741909200000,
    end_time: 1741928400000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743086923/digital-art_ldeevh.jpg",
  },
  {
    event_id: 4,
    title: "Enterprise Tech Forum",
    description:
      "A forum for business leaders and tech experts discussing enterprise technology solutions and digital transformation.",
    event_type: "Tech",
    details:
      "This one-day event covers cybersecurity, cloud computing, and AI applications in the enterprise. Enjoy keynote sessions and networking over lunch.",
    location: { latitude: 52.952, longitude: -1.15 },
    address: "Albert Hall, Bridlesmith Gate, Nottingham, NG1 2AH, UK",
    created_by: 5,
    start_time: 1745051400000,
    end_time: 1745070600000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743086918/enterprise_a2j1lr.jpg",
  },
  {
    event_id: 5,
    title: "Future of Software Development Summit",
    description:
      "A summit dedicated to exploring emerging trends and practices in software development.",
    event_type: "Tech",
    details:
      "Join thought leaders as they explore agile methodologies, microservices, and next-generation programming techniques through hands-on workshops and case studies.",
    location: { latitude: 52.954, longitude: -1.151 },
    address:
      "Trent Conference Centre, 24-30 Upper Parliament Street, Nottingham, NG1 3JY, UK",
    created_by: 2,
    start_time: 1748235600000,
    end_time: 1748254800000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743086931/conference_gxj9aq.jpg",
  },
  {
    event_id: 6,
    title: "Local Coders Meetup",
    description:
      "An informal meetup for local programmers to network, share ideas, and collaborate over a pint.",
    event_type: "Tech",
    details:
      "Casual discussions, spontaneous code challenges, and community bonding in a relaxed pub atmosphere. All coding enthusiasts welcome!",
    location: { latitude: 52.9535, longitude: -1.152 },
    address: "Canal House, Convent St, Nottingham, NG1 3EH, UK",
    created_by: 6,
    start_time: 1740568800000,
    end_time: 1740579600000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743084316/computer_dpyyif.jpg",
  },
  {
    event_id: 7,
    title: "Tech & Tonic Social",
    description:
      "A social evening for tech enthusiasts to unwind and network after a busy day.",
    event_type: "Tech",
    details:
      "Enjoy delicious food, creative drinks, and relaxed conversations about the latest in tech innovations. Perfect for professionals looking to connect.",
    location: { latitude: 52.9545, longitude: -1.156 },
    address:
      "The Embankment Pub and Kitchen, Queens Walk, Nottingham, NG1 3BG, UK",
    created_by: 7,
    start_time: 1741007400000,
    end_time: 1741018200000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743086954/tech-pub-quiz_wq0ato.jpg",
  },
  {
    event_id: 8,
    title: "Women in Tech Gala",
    description:
      "A formal gala celebrating the achievements and leadership of women in technology.",
    event_type: "Tech",
    details:
      "Featuring inspirational keynote speakers, networking sessions, and awards for outstanding contributions in tech. Formal attire is requested.",
    location: { latitude: 52.957, longitude: -1.156 },
    address: "Lace Market Hotel, 10 Shambles, Nottingham, NG1 1ES, UK",
    created_by: 8,
    start_time: 1749799200000,
    end_time: 1749817200000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743086950/women-tech_nlzwck.jpg",
  },
  {
    event_id: 9,
    title: "Cybersecurity Workshop",
    description:
      "A hands-on workshop on cybersecurity best practices and threat mitigation techniques.",
    event_type: "Tech",
    details:
      "Learn from experts about securing digital infrastructures, protecting data, and countering cyber threats through interactive exercises and Q&A sessions.",
    location: { latitude: 52.953, longitude: -1.1565 },
    address: "National Justice Museum, 2 Friar's Lane, Nottingham, NG1 1PF, UK",
    created_by: 3,
    start_time: 1742724000000,
    end_time: 1742743200000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743084264/data_drdgv9.jpg",
  },
  {
    event_id: 10,
    title: "AR/VR Innovation Lab",
    description:
      "An immersive event exploring the latest in augmented and virtual reality technologies.",
    event_type: "Tech",
    details:
      "Experience live AR/VR demos, take part in interactive sessions, and discuss the future of immersive tech with developers and enthusiasts.",
    location: { latitude: 52.9538, longitude: -1.1525 },
    address:
      "The New Art Exchange, 1 Upper Parliament Street, Nottingham, NG1 3JY, UK",
    created_by: 9,
    start_time: 1744260600000,
    end_time: 1744279800000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743086922/VR_bw71km.jpg",
  },
  {
    event_id: 11,
    title: "AI & Ethics Roundtable",
    description:
      "A roundtable discussion on the ethical implications of artificial intelligence.",
    event_type: "Tech",
    details:
      "Industry experts, academics, and policymakers debate the social impact of AI and discuss strategies for responsible innovation in technology.",
    location: { latitude: 52.948, longitude: -1.177 },
    address: "Strelley Hall, 1 Strelley Road, Nottingham, NG7 2BY, UK",
    created_by: 4,
    start_time: 1747572000000,
    end_time: 1747586400000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743084279/artifical-intelligence_gmc3qt.jpg",
  },
  {
    event_id: 12,
    title: "Startup Pitch Night",
    description:
      "A competitive event for local startups to pitch their tech innovations to investors and mentors.",
    event_type: "Tech",
    details:
      "Watch live pitch competitions, network with potential investors, and enjoy feedback sessions designed to help entrepreneurs take their ideas to the next level.",
    location: { latitude: 52.9575, longitude: -1.155 },
    address: "Jam Cafe, 25 Trent Rd, Nottingham, NG1 5GZ, UK",
    created_by: 5,
    start_time: 1741252800000,
    end_time: 1741263600000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743086918/startup-pitch_od1st9.jpg",
  },
  {
    event_id: 13,
    title: "Coding Bootcamp Meetup",
    description:
      "An informal gathering for coding bootcamp graduates and tech learners to share experiences.",
    event_type: "Tech",
    details:
      "Discuss career tips, share coding tricks, and learn from one another in a friendly setting with light snacks and beverages.",
    location: { latitude: 52.9532, longitude: -1.1512 },
    address:
      "The Cross Keys, 45 Upper Parliament Street, Nottingham, NG1 3JY, UK",
    created_by: 6,
    start_time: 1741201200000,
    end_time: 1741212000000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743086960/conference-2_avymdl.jpg",
  },
  {
    event_id: 14,
    title: "Tech Startup Workshop",
    description:
      "A workshop for budding tech entrepreneurs focusing on business planning and product development.",
    event_type: "Tech",
    details:
      "Gain insights on funding strategies, market validation, and product design through interactive sessions led by experienced industry professionals.",
    location: { latitude: 52.9578, longitude: -1.1522 },
    address: "Metronome, 10 Hockley Street, Nottingham, NG1 1UJ, UK",
    created_by: 7,
    start_time: 1742661000000,
    end_time: 1742677800000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743086932/code-and-coffee_hw4nzn.jpg",
  },
  {
    event_id: 15,
    title: "Nottingham Code & Coffee",
    description:
      "A relaxed morning meetup for developers to exchange coding tips and ideas over a cup of coffee.",
    event_type: "Tech",
    details:
      "Meet local developers at Canal House Pub for an informal session featuring coding challenges and collaborative problem-solving in a friendly atmosphere.",
    location: { latitude: 52.9535, longitude: -1.152 },
    address: "Canal House, Convent St, Nottingham, NG1 3EH, UK",
    created_by: 8,
    start_time: 1745325600000,
    end_time: 1745332800000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743086932/code-and-coffee_hw4nzn.jpg",
  },
  {
    event_id: 16,
    title: "Tech Meets Art: Interactive Installations",
    description:
      "An event exploring how technology and art combine to create interactive installations.",
    event_type: "Tech",
    details:
      "Collaborate with artists and technologists in hands-on workshops and live demos that highlight the creative potential of digital tools.",
    location: { latitude: 52.9485, longitude: -1.161 },
    address: "Nottingham Contemporary, Lenton, Nottingham, NG7 2AE, UK",
    created_by: 9,
    start_time: 1746198000000,
    end_time: 1746213600000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743086926/digital-art-3_soj8bx.jpg",
  },
  {
    event_id: 17,
    title: "Cyber Innovations Expo",
    description:
      "An expo showcasing the latest innovations in cybersecurity and digital defense.",
    event_type: "Tech",
    details:
      "Explore exhibits from top tech companies, attend keynote sessions, and join panel discussions focused on protecting data and systems in today’s digital age.",
    location: { latitude: 52.952, longitude: -1.15 },
    address: "Albert Hall, Bridlesmith Gate, Nottingham, NG1 2AH, UK",
    created_by: 2,
    start_time: 1749802800000,
    end_time: 1749822000000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743086931/conference_gxj9aq.jpg",
  },
  {
    event_id: 18,
    title: "Tech Trivia & Tap Night",
    description:
      "A fun evening of tech trivia paired with great food and local drinks.",
    event_type: "Tech",
    details:
      "Test your tech knowledge with multiple trivia rounds while enjoying a relaxed atmosphere and plenty of opportunities to network with fellow tech enthusiasts.",
    location: { latitude: 52.9545, longitude: -1.156 },
    address:
      "The Embankment Pub and Kitchen, Queens Walk, Nottingham, NG1 3BG, UK",
    created_by: 3,
    start_time: 1741596000000,
    end_time: 1741606800000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743086954/tech-pub-quiz_wq0ato.jpg",
  },
  {
    event_id: 19,
    title: "Tech Leaders Retreat",
    description:
      "An exclusive retreat for senior tech industry leaders to strategize and innovate.",
    event_type: "Tech",
    details:
      "Over a full day, engage in leadership workshops, strategic planning sessions, and networking events designed to inspire the future of technology.",
    location: { latitude: 52.948, longitude: -1.177 },
    address: "Strelley Hall, 1 Strelley Road, Nottingham, NG7 2BY, UK",
    created_by: 4,
    start_time: 1751826000000,
    end_time: 1751841600000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743086960/conference-2_avymdl.jpg",
  },
  {
    event_id: 20,
    title: "Evening Hack & Learn",
    description:
      "A study group for tech enthusiasts to work on coding projects and learn new programming skills together.",
    event_type: "Tech",
    details:
      "Join fellow developers in a collaborative environment to work on open-source projects, share insights, and receive peer feedback, with light refreshments provided.",
    location: { latitude: 52.9532, longitude: -1.1512 },
    address:
      "The Cross Keys, 45 Upper Parliament Street, Nottingham, NG1 3JY, UK",
    created_by: 5,
    start_time: 1748946600000,
    end_time: 1748957400000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743086918/enterprise_a2j1lr.jpg",
  },
  {
    event_id: 21,
    title: "Nottingham Cultural Festival 2025",
    description:
      "A vibrant celebration of local arts, music, and cultural heritage.",
    event_type: "Culture",
    details:
      "Experience a day filled with live performances, art installations, and interactive workshops that showcase Nottingham's diverse cultural scene. Join community artists, musicians, and performers in celebrating tradition and innovation.",
    location: { latitude: 52.953, longitude: -1.1749 },
    address:
      "University of Nottingham, University Park, Nottingham, NG7 2RD, UK",
    created_by: 2,
    start_time: 1741018800000,
    end_time: 1741033200000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743087879/culture-festival_wpj9gl.jpg",
  },
  {
    event_id: 22,
    title: "Contemporary Art Extravaganza",
    description:
      "An exhibition showcasing cutting-edge contemporary art and multimedia installations.",
    event_type: "Culture",
    details:
      "Held at Nottingham Contemporary, this event brings together local and international artists to explore modern expressions in visual art. Enjoy guided tours, artist talks, and live demonstrations.",
    location: { latitude: 52.9485, longitude: -1.161 },
    address: "Nottingham Contemporary, Lenton, Nottingham, NG7 2AE, UK",
    created_by: 3,
    start_time: 1741653600000,
    end_time: 1741664400000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743087901/contemporary-art_dxwq3p.jpg",
  },
  {
    event_id: 23,
    title: "Heritage & History Forum",
    description:
      "A discussion forum exploring Nottingham's rich historical tapestry and cultural heritage.",
    event_type: "Culture",
    details:
      "Join historians, local experts, and community leaders as they delve into the stories and legacies that have shaped Nottingham. The forum includes keynote speeches, panel discussions, and interactive Q&A sessions.",
    location: { latitude: 52.952, longitude: -1.15 },
    address: "Albert Hall, Bridlesmith Gate, Nottingham, NG1 2AH, UK",
    created_by: 4,
    start_time: 1742288400000,
    end_time: 1742302800000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743087874/heritage_o8ij7c.jpg",
  },
  {
    event_id: 24,
    title: "International Folk Dance Evening",
    description:
      "A lively evening celebrating traditional dance from around the world.",
    event_type: "Culture",
    details:
      "Held at Trent Conference Centre, enjoy performances by folk dance troupes and learn the steps of traditional dances. The event is open to all ages and skill levels, encouraging community participation.",
    location: { latitude: 52.954, longitude: -1.151 },
    address:
      "Trent Conference Centre, 24-30 Upper Parliament Street, Nottingham, NG1 3JY, UK",
    created_by: 5,
    start_time: 1742923200000,
    end_time: 1742930400000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743087895/folk-dance_kg2jtb.jpg",
  },
  {
    event_id: 25,
    title: "Poetry & Prose Night",
    description:
      "An intimate evening of spoken word, poetry readings, and storytelling.",
    event_type: "Culture",
    details:
      "Hosted at Canal House Pub, this event invites local poets and storytellers to share their work in a relaxed, pub atmosphere. Enjoy an evening of creative expression accompanied by live acoustic music.",
    location: { latitude: 52.9535, longitude: -1.152 },
    address: "Canal House, Convent St, Nottingham, NG1 3EH, UK",
    created_by: 6,
    start_time: 1743558000000,
    end_time: 1743565200000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743087896/poetry_rz9khm.jpg",
  },
  {
    event_id: 26,
    title: "Acoustic Cultural Evening",
    description:
      "A night of live acoustic performances blending traditional and modern sounds.",
    event_type: "Culture",
    details:
      "Set in the inviting space of The Embankment Pub and Kitchen, enjoy live music from local bands and solo artists. The event focuses on acoustic renditions of cultural classics and contemporary hits.",
    location: { latitude: 52.9545, longitude: -1.156 },
    address:
      "The Embankment Pub and Kitchen, Queens Walk, Nottingham, NG1 3BG, UK",
    created_by: 7,
    start_time: 1744192800000,
    end_time: 1744200000000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743087879/jazz-blues_rrhkkj.jpg",
  },
  {
    event_id: 27,
    title: "Historical Reenactment Showcase",
    description:
      "An immersive experience bringing historical events and figures to life.",
    event_type: "Culture",
    details:
      "At Lace Market Hotel, watch reenactments of key moments in Nottingham’s history performed by talented local actors. The showcase includes interactive segments where audience members can participate.",
    location: { latitude: 52.957, longitude: -1.156 },
    address: "Lace Market Hotel, 10 Shambles, Nottingham, NG1 1ES, UK",
    created_by: 8,
    start_time: 1744827600000,
    end_time: 1744842000000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743087911/reenactment_rbkiw4.jpg",
  },
  {
    event_id: 28,
    title: "Local History Exhibition",
    description:
      "An exhibition exploring the milestones of Nottingham’s local history.",
    event_type: "Culture",
    details:
      "Hosted by the National Justice Museum, this exhibition features artifacts, archival photographs, and interactive displays detailing the city's evolution from medieval times to the modern era.",
    location: { latitude: 52.953, longitude: -1.1565 },
    address: "National Justice Museum, 2 Friar's Lane, Nottingham, NG1 1PF, UK",
    created_by: 3,
    start_time: 1745462400000,
    end_time: 1745473200000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743087934/history-stones_rdhlnt.jpg",
  },
  {
    event_id: 29,
    title: "Interactive Cultural Workshop",
    description:
      "A hands-on workshop exploring traditional crafts and modern cultural expressions.",
    event_type: "Culture",
    details:
      "Held at The New Art Exchange, participants can engage in interactive sessions covering topics from digital storytelling to classic handicrafts, led by experienced cultural practitioners.",
    location: { latitude: 52.9538, longitude: -1.1525 },
    address:
      "The New Art Exchange, 1 Upper Parliament Street, Nottingham, NG1 3JY, UK",
    created_by: 9,
    start_time: 1746097200000,
    end_time: 1746111600000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743087930/modern-art_nnrcb7.jpg",
  },
  {
    event_id: 30,
    title: "Heritage Gala Dinner",
    description:
      "A formal evening celebrating Nottingham’s cultural heritage with fine dining and performances.",
    event_type: "Culture",
    details:
      "Set in the elegant surroundings of Strelley Hall, enjoy a curated dinner menu, classical music performances, and a keynote address on preserving local traditions.",
    location: { latitude: 52.948, longitude: -1.177 },
    address: "Strelley Hall, 1 Strelley Road, Nottingham, NG7 2BY, UK",
    created_by: 4,
    start_time: 1746732000000,
    end_time: 1746746400000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743087892/culinary-culture_mzeade.jpg",
  },
  {
    event_id: 31,
    title: "Culinary Culture Brunch",
    description:
      "A brunch event celebrating the fusion of culinary traditions and cultural diversity.",
    event_type: "Culture",
    details:
      "At Jam Cafe, sample a variety of dishes inspired by global cuisines while enjoying live music and cultural performances. This brunch is designed to delight food enthusiasts and cultural explorers alike.",
    location: { latitude: 52.9575, longitude: -1.155 },
    address: "Jam Cafe, 25 Trent Rd, Nottingham, NG1 5GZ, UK",
    created_by: 5,
    start_time: 1747366800000,
    end_time: 1747374000000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743087892/culinary-culture_mzeade.jpg",
  },
  {
    event_id: 32,
    title: "Literary Salon & Storytelling",
    description:
      "A cozy evening of literature, storytelling, and discussion of classic works.",
    event_type: "Culture",
    details:
      "Hosted at The Cross Keys, this event invites authors, poets, and storytellers to share narratives that span generations. Engage in lively discussions and literary debates in an intimate setting.",
    location: { latitude: 52.9532, longitude: -1.1512 },
    address:
      "The Cross Keys, 45 Upper Parliament Street, Nottingham, NG1 3JY, UK",
    created_by: 6,
    start_time: 1748001600000,
    end_time: 1748008800000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743087878/literary-culture_zncine.jpg",
  },
  {
    event_id: 33,
    title: "Avant-Garde Theatre Night",
    description:
      "An experimental theatre performance that challenges traditional narratives.",
    event_type: "Culture",
    details:
      "Set at Metronome, this theatre night features avant-garde performances, innovative stage designs, and immersive storytelling that redefines contemporary drama.",
    location: { latitude: 52.9578, longitude: -1.1522 },
    address: "Metronome, 10 Hockley Street, Nottingham, NG1 1UJ, UK",
    created_by: 7,
    start_time: 1748636400000,
    end_time: 1748650800000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743087872/avant-garde_fjbmtm.jpg",
  },
  {
    event_id: 34,
    title: "Modern Art & Folk Fusion",
    description:
      "A fusion event blending modern art exhibitions with traditional folk performances.",
    event_type: "Culture",
    details:
      "Returning to Nottingham Contemporary, enjoy a day of creative displays that merge digital art with live folk music, celebrating the evolution of artistic expression.",
    location: { latitude: 52.9485, longitude: -1.161 },
    address: "Nottingham Contemporary, Lenton, Nottingham, NG7 2AE, UK",
    created_by: 8,
    start_time: 1749271200000,
    end_time: 1749282000000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743087930/modern-art_nnrcb7.jpg",
  },
  {
    event_id: 35,
    title: "Campus Culture Fair",
    description:
      "A lively fair showcasing student art, music, and cultural projects.",
    event_type: "Culture",
    details:
      "Hosted by Nottingham University, this event features pop-up art galleries, live music, and creative workshops organized by students and local artists, promoting campus diversity and talent.",
    location: { latitude: 52.953, longitude: -1.1749 },
    address:
      "University of Nottingham, University Park, Nottingham, NG7 2RD, UK",
    created_by: 9,
    start_time: 1749906000000,
    end_time: 1749920400000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743087879/culture-festival_wpj9gl.jpg",
  },
  {
    event_id: 36,
    title: "World Cinema Showcase",
    description:
      "A screening event featuring international films that highlight diverse cultural narratives.",
    event_type: "Culture",
    details:
      "Taking place at Albert Hall Conference Centre, the showcase includes film screenings, director Q&A sessions, and discussions on global storytelling traditions.",
    location: { latitude: 52.952, longitude: -1.15 },
    address: "Albert Hall, Bridlesmith Gate, Nottingham, NG1 2AH, UK",
    created_by: 2,
    start_time: 1750540800000,
    end_time: 1750555200000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743087890/cinema_l2xqu6.jpg",
  },
  {
    event_id: 37,
    title: "Folklore & Legends Forum",
    description:
      "A forum dedicated to exploring the myths, legends, and folklore of Nottingham and beyond.",
    event_type: "Culture",
    details:
      "Held at Trent Conference Centre, this event brings together folklorists, authors, and cultural historians to discuss and reenact age-old tales and traditions.",
    location: { latitude: 52.954, longitude: -1.151 },
    address:
      "Trent Conference Centre, 24-30 Upper Parliament Street, Nottingham, NG1 3JY, UK",
    created_by: 3,
    start_time: 1751175600000,
    end_time: 1751190000000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743087916/folklore_q3ikva.jpg",
  },
  {
    event_id: 38,
    title: "Jazz & Blues Cultural Night",
    description:
      "An evening dedicated to the soulful sounds of jazz and blues.",
    event_type: "Culture",
    details:
      "Hosted at The Embankment Pub and Kitchen, enjoy live performances by local jazz and blues bands in an atmosphere that celebrates musical heritage and cultural diversity.",
    location: { latitude: 52.9545, longitude: -1.156 },
    address:
      "The Embankment Pub and Kitchen, Queens Walk, Nottingham, NG1 3BG, UK",
    created_by: 4,
    start_time: 1751810400000,
    end_time: 1751821200000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743087879/jazz-blues_rrhkkj.jpg",
  },
  {
    event_id: 39,
    title: "Cultural Heritage Lecture",
    description:
      "A lecture series exploring the significance of cultural preservation and heritage.",
    event_type: "Culture",
    details:
      "Presented by experts at the National Justice Museum, this lecture dives into the role of cultural heritage in shaping modern society and preserving historical narratives for future generations.",
    location: { latitude: 52.953, longitude: -1.1565 },
    address: "National Justice Museum, 2 Friar's Lane, Nottingham, NG1 1PF, UK",
    created_by: 5,
    start_time: 1752445200000,
    end_time: 1752456000000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743086960/conference-2_avymdl.jpg",
  },
  {
    event_id: 40,
    title: "Multi-Cultural Food Festival",
    description:
      "A festival celebrating global cuisines and cultural culinary traditions.",
    event_type: "Culture",
    details:
      "Hosted at Lace Market Hotel, sample an array of dishes from around the world, enjoy cooking demonstrations, and experience live cultural performances that highlight Nottingham's vibrant food scene.",
    location: { latitude: 52.957, longitude: -1.156 },
    address: "Lace Market Hotel, 10 Shambles, Nottingham, NG1 1ES, UK",
    created_by: 6,
    start_time: 1753080000000,
    end_time: 1753090800000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743087892/culinary-culture_mzeade.jpg",
  },
  {
    event_id: 41,
    title: "Green Line Challenge",
    description:
      "A community fun run and cycling challenge across Green Line West Bridgeford.",
    event_type: "Sport",
    details:
      "Join local sports enthusiasts for a day of running and cycling. This informal event encourages participation from all fitness levels, with refreshments and prizes along the route.",
    location: { latitude: 52.9525, longitude: -1.1575 },
    address: "Green Line West Bridgeford, Nottingham, NG1 2XY, UK",
    created_by: 2,
    start_time: 1740116400000,
    end_time: 1740127200000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743089406/run-6_dyaq8v.jpg",
  },
  {
    event_id: 42,
    title: "Notts County Fan Day",
    description:
      "A lively fan event at Meadow Lane Stadium featuring mini-games and meet-and-greets.",
    event_type: "Sport",
    details:
      "Experience the thrill of football with interactive activities, player appearances, and behind-the-scenes tours at Notts County’s Meadow Lane. Perfect for families and fans of all ages.",
    location: { latitude: 52.9531, longitude: -1.1504 },
    address: "Meadow Lane, Nottingham, NG1 3QN, UK",
    created_by: 3,
    start_time: 1740202800000,
    end_time: 1740217200000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743089389/notss-county_ueyznq.jpg",
  },
  {
    event_id: 43,
    title: "City Ground Premier Match",
    description:
      "A high-stakes football match at Nottingham Forest's iconic City Ground.",
    event_type: "Sport",
    details:
      "Watch top-tier football action live at The City Ground. Enjoy a formal match experience with professional commentary, refreshments, and dedicated fan zones.",
    location: { latitude: 52.9351, longitude: -1.142 },
    address: "The City Ground, Nottingham, NG2 3AA, UK",
    created_by: 4,
    start_time: 1740300000000,
    end_time: 1740310800000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743089387/nott-forest_pkaqlz.jpg",
  },
  {
    event_id: 44,
    title: "Arboretum Fitness Fun Run",
    description:
      "An energizing fun run through the scenic Nottingham Arboretum.",
    event_type: "Sport",
    details:
      "Enjoy a morning run in one of Nottingham's most beautiful green spaces. This community event encourages all ages to join and celebrate fitness in nature.",
    location: { latitude: 52.9565, longitude: -1.152 },
    address: "Nottingham Arboretum, Nottingham, NG1 5AJ, UK",
    created_by: 5,
    start_time: 1740405600000,
    end_time: 1740412800000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743089407/run-5_knmatl.jpg",
  },
  {
    event_id: 45,
    title: "Bunny Wood Trail Run",
    description:
      "A trail running event through the rustic paths of Bunny Wood.",
    event_type: "Sport",
    details:
      "Test your endurance on this trail run designed for both beginners and experienced runners. Refreshments and hydration stations will be available along the route.",
    location: { latitude: 52.955, longitude: -1.16 },
    address: "Bunny Wood, 1 Bunny Wood Lane, Nottingham, NG3 6AX, UK",
    created_by: 6,
    start_time: 1740502000000,
    end_time: 1740509200000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743089406/run-6_dyaq8v.jpg",
  },
  {
    event_id: 46,
    title: "Attenborough Reserve Yoga Session",
    description: "A morning outdoor yoga session at The Attenborough Reserve.",
    event_type: "Sport",
    details:
      "Start your day with a calming yoga session in the serene surroundings of The Attenborough Reserve. Suitable for all levels, this event focuses on mindfulness and well-being.",
    location: { latitude: 52.947, longitude: -1.144 },
    address:
      "The Attenborough Reserve, 5 Attenborough Way, Nottingham, NG7 4AA, UK",
    created_by: 7,
    start_time: 1740598400000,
    end_time: 1740603800000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743089407/nature-yoga_hyvblz.jpg",
  },
  {
    event_id: 47,
    title: "Motorpoint Arena eSports Tournament",
    description:
      "An indoor eSports tournament at the renowned Motorpoint Arena.",
    event_type: "Sport",
    details:
      "Compete or cheer on local gamers in this professional eSports tournament. Enjoy live streaming, expert commentary, and interactive fan experiences.",
    location: { latitude: 52.954, longitude: -1.152 },
    address: "Motorpoint Arena, Nottingham, NG1 3NG, UK",
    created_by: 8,
    start_time: 1740694800000,
    end_time: 1740712800000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743089397/eSports_vnk00n.jpg",
  },
  {
    event_id: 48,
    title: "Nottingham Racecourse Equestrian Day",
    description: "A formal equestrian event held at Nottingham Racecourse.",
    event_type: "Sport",
    details:
      "Witness thrilling equestrian competitions and enjoy formal hospitality at Nottingham Racecourse. The event features strict dress codes and exclusive seating arrangements for a premium experience.",
    location: { latitude: 52.948, longitude: -1.164 },
    address: "Nottingham Racecourse, Nottingham, NG7 3EZ, UK",
    created_by: 9,
    start_time: 1740781200000,
    end_time: 1740795600000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743089381/horse-riding_jju3dt.jpg",
  },
  {
    event_id: 49,
    title: "Watersports Extravaganza",
    description:
      "A day-long event of water-based sports at Holme Pierrepont National Watersports Centre.",
    event_type: "Sport",
    details:
      "Experience adrenaline-pumping activities like kayaking, canoeing, and paddleboarding. Suitable for all ages, this event includes coaching sessions and comprehensive safety briefings.",
    location: { latitude: 52.941, longitude: -1.162 },
    address:
      "Holme Pierrepont National Watersports Centre, Nottingham, NG9 2BR, UK",
    created_by: 2,
    start_time: 1740867600000,
    end_time: 1740882000000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743089403/watersports_cgwbok.jpg",
  },
  {
    event_id: 50,
    title: "David Ross Sports Challenge",
    description:
      "A multi-sport challenge event hosted at David Ross Sports Village.",
    event_type: "Sport",
    details:
      "Participate in a range of sports challenges including relay races, obstacle courses, and team games. This event is perfect for both competitive athletes and those looking for a fun day out.",
    location: { latitude: 52.953, longitude: -1.16 },
    address: "David Ross Sports Village, Nottingham, NG7 2BQ, UK",
    created_by: 3,
    start_time: 1740954000000,
    end_time: 1740968400000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743089387/mixed-sport_tjurgi.jpg",
  },
  {
    event_id: 51,
    title: "Hockey Skills Workshop",
    description:
      "A hands-on workshop to improve your hockey skills at Nottingham Hockey Centre.",
    event_type: "Sport",
    details:
      "Learn from experienced coaches in an interactive session covering stick handling, passing techniques, and game strategies. All necessary equipment will be provided.",
    location: { latitude: 52.939, longitude: -1.138 },
    address:
      "Nottingham Hockey Centre, 74 Clifton Lane, Nottingham, NG2 3LR, UK",
    created_by: 4,
    start_time: 1741040400000,
    end_time: 1741051200000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743089380/hockey_kfht8g.jpg",
  },
  {
    event_id: 52,
    title: "Greyhound Racing Night",
    description:
      "An exciting greyhound racing event at Nottingham Greyhound Stadium.",
    event_type: "Sport",
    details:
      "Experience the thrill of live greyhound racing in a vibrant atmosphere. Enjoy betting opportunities, live commentary, and a festive environment ideal for a fun night out.",
    location: { latitude: 52.9535, longitude: -1.166 },
    address:
      "Nottingham Greyhound Stadium, Coventry Road, Nottingham, NG3 6QH, UK",
    created_by: 5,
    start_time: 1741126800000,
    end_time: 1741137600000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743089444/greyhond_kixt8g.jpg",
  },
  {
    event_id: 53,
    title: "Wollaton Park Classic Cricket Tournament",
    description:
      "A traditional cricket tournament set in the historic Wollaton Hall and Park.",
    event_type: "Sport",
    details:
      "Enjoy a full day of cricket matches in a formal tournament setting. Teams from across the region will compete in a friendly yet competitive atmosphere amidst stunning parkland.",
    location: { latitude: 52.953, longitude: -1.229 },
    address: "Wollaton Hall, Wollaton Park, Nottingham, NG8 2AE, UK",
    created_by: 6,
    start_time: 1741213200000,
    end_time: 1741234800000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743089381/cricket_vqvs3v.jpg",
  },
  {
    event_id: 54,
    title: "Forest Recreation Ground Community Football",
    description:
      "A casual football match for local teams at Forest Recreation Ground.",
    event_type: "Sport",
    details:
      "Bring your friends and join in for an informal game of football. This community event encourages participation, healthy competition, and social fun in a relaxed setting.",
    location: { latitude: 52.954, longitude: -1.157 },
    address: "Forest Recreation Ground, Nottingham, NG1 3DS, UK",
    created_by: 7,
    start_time: 1741299600000,
    end_time: 1741310400000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743089387/nott-forest_pkaqlz.jpg",
  },
  {
    event_id: 55,
    title: "Victoria Embankment Urban Run",
    description: "A city run event along the scenic Victoria Embankment.",
    event_type: "Sport",
    details:
      "Join this urban run that takes you along Nottingham’s historic riverfront. Open to all ages, the event promotes urban fitness and community spirit in a vibrant atmosphere.",
    location: { latitude: 52.955, longitude: -1.155 },
    address: "Victoria Embankment, Nottingham, NG1 1DQ, UK",
    created_by: 8,
    start_time: 1741386000000,
    end_time: 1741393200000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743089418/urban-run_addtcz.jpg",
  },
  {
    event_id: 56,
    title: "Notts County Legends Match",
    description:
      "A special match featuring legends of Notts County in a friendly yet competitive game.",
    event_type: "Sport",
    details:
      "Former players and club legends come together for an exhibition match at Meadow Lane. Enjoy a formal, nostalgic atmosphere celebrating the rich history of Notts County.",
    location: { latitude: 52.9531, longitude: -1.1504 },
    address: "Meadow Lane, Nottingham, NG1 3QN, UK",
    created_by: 9,
    start_time: 1741472400000,
    end_time: 1741483200000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743089389/notss-county_ueyznq.jpg",
  },
  {
    event_id: 57,
    title: "City Ground Charity Match",
    description:
      "A charity football match hosted at Nottingham Forest's City Ground.",
    event_type: "Sport",
    details:
      "Watch top players and local heroes compete in a match that supports local charities. This formal event includes VIP areas, refreshments, and community engagement activities.",
    location: { latitude: 52.9351, longitude: -1.142 },
    address: "The City Ground, Nottingham, NG2 3AA, UK",
    created_by: 2,
    start_time: 1741558800000,
    end_time: 1741573200000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743089387/nott-forest_pkaqlz.jpg",
  },
  {
    event_id: 58,
    title: "Watersports Junior Camp",
    description:
      "A fun and educational watersports camp for young enthusiasts.",
    event_type: "Sport",
    details:
      "Designed for juniors, this camp at Holme Pierrepont offers lessons in kayaking, canoeing, and paddleboarding with certified instructors and all safety gear provided.",
    location: { latitude: 52.941, longitude: -1.162 },
    address:
      "Holme Pierrepont National Watersports Centre, Nottingham, NG9 2BR, UK",
    created_by: 3,
    start_time: 1741645200000,
    end_time: 1741652400000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743089403/watersports_cgwbok.jpg",
  },
  {
    event_id: 59,
    title: "Hockey Tournament Finals",
    description:
      "The grand finale of the local hockey tournament at Nottingham Hockey Centre.",
    event_type: "Sport",
    details:
      "Witness the climax of an intense hockey tournament as top teams battle for the championship title. This formal event features awards ceremonies and post-match celebrations.",
    location: { latitude: 52.939, longitude: -1.138 },
    address:
      "Nottingham Hockey Centre, 74 Clifton Lane, Nottingham, NG2 3LR, UK",
    created_by: 4,
    start_time: 1741731600000,
    end_time: 1741742400000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743089380/hockey_kfht8g.jpg",
  },
  {
    event_id: 60,
    title: "Wollaton Park Outdoor Fitness Festival",
    description:
      "A fitness festival featuring outdoor workouts and wellness activities in Wollaton Park.",
    event_type: "Sport",
    details:
      "Celebrate health and fitness with a variety of outdoor activities ranging from boot camps to yoga sessions. Enjoy interactive workshops, live demos, and a community vibe in a relaxed, informal setting.",
    location: { latitude: 52.953, longitude: -1.229 },
    address: "Wollaton Hall, Wollaton Park, Nottingham, NG8 2AE, UK",
    created_by: 5,
    start_time: 1741818000000,
    end_time: 1741832400000,
    image:
      "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743089446/run-3_ngmygc.jpg",
  },
];

export default eventData;
