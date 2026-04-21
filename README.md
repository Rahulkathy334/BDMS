# Blood Donation Management System (BDMS)

This project has been migrated from Supabase to a custom Node.js/Express and MongoDB backend.

## Structure
- `frontend/`: React application (Vite)
- `backend/`: Node.js Express server with MongoDB (Mongoose)

## Prerequisite
- Node.js installed
- MongoDB installed and running (default: `mongodb://localhost:27017/bdms`)

## Getting Started

### 1. Setup Backend
1. Go to backend directory: `cd backend`
2. Install dependencies (already done): `npm install`
3. Start the server: `npm run dev`

### 2. Setup Frontend
1. Go to frontend directory: `cd frontend`
2. Install dependencies (already done): `npm install`
3. Start the development server: `npm run dev`

## Credentials (Testing)
- You can register a new account on the Register page.
- For Admin access, register an account and then manually change its role to 'admin' in MongoDB, or I can create a seed script if needed.

## Key Changes
- Replaced Supabase Client with Axios.
- Implemented JWT authentication (login/register).
- Created Mongoose schemas for Users and BloodRequests.
- Mapped MongoDB `_id` and `createdAt` to original `id` and `created_at` fields to maintain frontend compatibility.
