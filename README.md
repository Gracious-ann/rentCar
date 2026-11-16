Rent a Car 🚗

A responsive car rental web application built with Next.js (App Router) and TypeScript. Users can browse the car catalog, filter cars, open detailed car pages and send a rental request.

🔗 Live Demo: https://rent-car-2-ten.vercel.app/

✨ Features
Car catalog with Load More pagination
Filtering by brand, rental price and mileage
Dynamic car details pages (/catalog/[id])
Rental booking form with validation and toast notifications
Loading and error states
Responsive layout for mobile, tablet and desktop
🛠 Tech Stack
Next.js 16 (App Router)
React 19
TypeScript
TanStack Query (React Query) — data fetching and caching
Axios — HTTP requests to the REST API
Formik + Yup — forms and validation
React Hot Toast — notifications
React Icons, React Loader Spinner
CSS Modules, modern-normalize
ESLint
Deployed on Vercel
🔌 API

Data is fetched from the REST API: https://car-rental-api.goit.study

📁 Project Structure
my-app/
├── app/
│   ├── page.tsx            # Home page
│   └── catalog/
│       ├── page.tsx        # Catalog with filters
│       └── [id]/           # Car details page
├── components/             # Reusable UI components
└── lib/                    # API functions and helpers
🚀 Getting Started
bash
git clone https://github.com/Gracious-ann/rentCar.git
cd rentCar/my-app
npm install
npm run dev

Open http://localhost:3000 in your browser.
