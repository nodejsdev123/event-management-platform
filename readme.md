Here's an updated format for your `README.md` file based on the structure you provided:

```markdown
# Event Management Platform

This project implements an Event Management Platform using Node.js, Express, TypeScript, and MongoDB.

## Live Link: https://event-management-platform-pufg.onrender.com

## Postman Link : https://api.postman.com/collections/17803945-95f89d84-ffe0-41c8-8dca-314487588044?access_key=PMAT-01J1YPSZY563931G19DSKH4WAV

## Project Structure

The project follows a structured layout to maintain separation of concerns:

  ```json
event-management-platform/
│
├── src/
│   ├── controllers/
│   │   ├── eventController.ts # Controllers handling API requests
│   │   └── ...
│   │
│   ├── models/
│   │   ├── Event.ts # Mongoose schema for Event model
│   │   └── ...
│   │
│   ├── routes/
│   │   ├── eventRoutes.ts # API routes configuration
│   │   └── ...
│   │
│   ├── services/
│   │   ├── eventService.ts # Business logic for event operations
│   │   └── ...
│   │
│   ├── db.ts # MongoDB connection setup
│   └── server.ts # Express server setup
│
├── .gitignore # Git ignore file
├── package.json # Node.js dependencies
└── README.md # Project overview and setup guide
```

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nodejsdev123/event-management-platform.git
   cd event-management-platform
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment variables:**

   Create a `.env` file in the root directory with the following variables:

   ```plaintext
   PORT=5000            # Port for the server
   MONGODB_URI=mongodb+srv://your_username:your_password@cluster0.your.mongodb.net/your_database
   ```

## API Endpoints

### Add Event

- **Endpoint:** `POST https://event-management-platform-pufg.onrender.com/api/events`
- **Payload:**

  ```json
  {
    "eventName": "Sample Event",
    "eventDate": "2024-07-10",
    "organizer": "John Doe",
    "email": "john.doe@example.com",
    "phone": "123-456-7890",
    "location": {
      "street": "123 Main St",
      "city": "New York",
      "state": "NY",
      "zip": "10001"
    }
  }
  ```

### Update Event

- **Endpoint:** `PUT https://event-management-platform-pufg.onrender.com/api/events/:id`
- **Payload:**

  ```json
  {
    "eventName": "Updated Event Name"
  }
  ```

### Delete Event

- **Endpoint:** `DELETE https://event-management-platform-pufg.onrender.com/api/events/:id`

### Get Event by ID

- **Endpoint:** `GET https://event-management-platform-pufg.onrender.com/api/events/:id`

### List Events

- **Endpoint:** `GET https://event-management-platform-pufg.onrender.com/api/events`



