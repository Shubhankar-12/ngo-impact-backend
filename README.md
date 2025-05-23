# NGO Impact Backend

A backend service for tracking and managing NGO activities and impact metrics.

## Live Endpoints

- Backend API: https://ngo-impact-backend.onrender.com/api
- Frontend Application: https://ngo-impact-frontend.onrender.com/

## Project Overview

NGO Impact is a platform designed to help non-governmental organizations record, track, and report their impact metrics. The system enables NGOs to register, submit monthly reports on people helped, events conducted, and funds utilized, and provides aggregated dashboard insights.

## Tech Stack

- **Node.js**: JavaScript runtime
- **Express**: Web framework
- **TypeScript**: Type-safe JavaScript
- **MongoDB**: Database (implied by project structure)
- **Mongoose**: MongoDB Object Modeling for Node.js and Aggregate Framework

## API Endpoints

### NGO Management

#### List NGOs

```
GET /api/ngo/list?skip=0&limit=10&search=
```

**Response Example:**

```json
{
  "result": [
    {
      "name": "Akshaya Patra Foundation",
      "email": "contact@akshayapatra.org",
      "status": "ENABLED",
      "display_id": "EVY68531",
      "registered_on": "2025-04-16T10:19:46.483Z",
      "updated_at": "2025-04-16T10:19:46.487Z",
      "ngo_id": "67ff8442c21f94a2debed43b"
    }
  ],
  "metadata": {
    "totalCount": 1
  }
}
```

#### Create NGO

```
POST /api/ngo/create
```

**Request Body:**

```json
{
  "name": "Helping Hands Trust",
  "email": "info@helping.org",
  "contact_number": "9876543210",
  "address": "123 Charity Lane, Sector 22",
  "state": "Maharashtra",
  "city": "Mumbai",
  "status": "ENABLED"
}
```

**Response Example:**

```json
{
  "ngo_id": "6801cf6946e96e081d29f2b0",
  "display_id": "CKU40661",
  "name": "Helping Hands Trust",
  "email": "info@helping.org",
  "contact_number": "9876543210",
  "address": "123 Charity Lane, Sector 22",
  "state": "Maharashtra",
  "city": "Mumbai",
  "registered_on": "2025-04-18T04:04:57.187Z",
  "status": "ENABLED",
  "created_at": "2025-04-18T04:04:57.197Z",
  "updated_at": "2025-04-18T04:04:57.197Z"
}
```

### Report Management

#### Submit Monthly Report

```
POST /api/report/
```

**Request Body:**

```json
{
  "ngo_id": "6801cf6946e96e081d29f2b0",
  "month": "2024-07",
  "people_helped": "8",
  "events_conducted": "1",
  "funds_utilized": "2500"
}
```

**Response Example:**

```json
{
  "report_id": "6801cfa346e96e081d29f2b3",
  "ngo_id": "6801cf6946e96e081d29f2b0",
  "month": "2024-07",
  "people_helped": 8,
  "events_conducted": 1,
  "funds_utilized": 2500,
  "status": "ENABLED",
  "created_at": "2025-04-18T04:05:55.942Z",
  "updated_at": "2025-04-18T04:05:55.942Z"
}
```

#### Get Dashboard Statistics

```
GET /api/report/dashboard?month=2024-07
```

**Response Example:**

```json
{
  "totalPeopleHelped": 16,
  "totalEventsConducted": 2,
  "totalFundsUtilized": 5000,
  "totalNgosReporting": 2
}
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/Shubhankar-12/ngo-impact-backend.git
   ```

2. Install dependencies:

   ```
   cd ngo-impact-backend
   npm install
   ```

3. Set up environment variables (create a `.env` file based on `.env.example`)

4. Start the development server:
   ```
   npm run dev
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
