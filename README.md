<<<<<<< HEAD
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
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> 7564a9d96c12998cc3f4d7ed167b9251dc319199
