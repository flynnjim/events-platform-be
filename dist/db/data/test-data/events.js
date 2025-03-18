"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eventData = [
    {
        event_id: 1,
        title: "Tech Conference 2025",
        description: "A conference discussing the latest trends in technology and software development.",
        event_type: "Tech",
        details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        location: { latitude: 37.7749, longitude: -122.4194 },
        address: "Moscone Center, 747 Howard St, San Francisco, CA 94103, USA",
        created_by: 2,
        start_time: 1755277200000,
        end_time: 1755306000000,
    },
    {
        event_id: 2,
        title: "Data Science Bootcamp",
        description: "An intensive 3-day bootcamp covering machine learning, AI, and big data analysis.",
        event_type: "Tech",
        details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        location: { latitude: 40.7128, longitude: -74.006 },
        address: "IBM Watson Building, 51 Astor Pl, New York, NY 10003, USA",
        created_by: 4,
        start_time: 1757421600000,
        end_time: 1757596800000,
    },
    {
        event_id: 3,
        title: "Cybersecurity Awareness Workshop",
        description: "A workshop focused on cybersecurity best practices and threat mitigation.",
        event_type: "Tech",
        details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        location: { latitude: 34.0522, longitude: -118.2437 },
        address: "Los Angeles Convention Center, 1201 S Figueroa St, Los Angeles, CA 90015, USA",
        created_by: 2,
        start_time: 1759711200000,
        end_time: 1759725600000,
    },
    {
        event_id: 4,
        title: "AI in Healthcare Seminar",
        description: "A seminar exploring the applications of AI in the healthcare industry.",
        event_type: "Tech",
        details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        location: { latitude: 51.5074, longitude: -0.1278 },
        address: "The Royal Society, 6-9 Carlton House Terrace, London SW1Y 5AG, UK",
        created_by: 4,
        start_time: 1763665800000,
        end_time: 1763694600000,
    },
    {
        event_id: 5,
        title: "Cloud Computing Workshop",
        description: "Hands-on workshop for building cloud-based applications and services.",
        event_type: "Tech",
        details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        location: { latitude: 48.8566, longitude: 2.3522 },
        address: "CNAM, 292 Rue Saint-Martin, 75003 Paris, France",
        created_by: 2,
        start_time: 1764618000000,
        end_time: 1764646800000,
    },
];
exports.default = eventData;
