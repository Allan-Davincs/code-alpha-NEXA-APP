# Nexa — Mini Social App (Starter)

Small, beginner-friendly social feed app scaffold (frontend + backend).

Quick start
1. Backend
   - Create a `.env` in `backend/` with:
     ```
     MONGO_URI=your_mongodb_uri
     JWT_SECRET=some_long_secret
     PORT=5000
     ```
   - Install & run:
     ```
     cd backend
     npm install
     npm run dev
     ```

2. Frontend
   - In `frontend/`:
     ```
     cd frontend
     npm install
     npm run dev
     ```
   - Update `src/services/api.js` baseURL to point to your backend (e.g. http://localhost:5000/api)

Project layout
- backend/: Express + MongoDB (auth, posts)
- frontend/: Vite + React + Tailwind-ready structure

See individual package.json scripts in each folder.
