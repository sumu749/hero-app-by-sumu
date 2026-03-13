# Hero Apps

## Description

Hero Apps is a modern web application built with React that showcases a collection of mobile applications. It provides users with detailed information about various apps including descriptions, ratings, reviews, download counts, and company details. The app features a clean, responsive design with search functionality to help users discover and explore applications.

## Technologies Used

- **Frontend Framework:** React 19.2.0
- **Build Tool:** Vite 7.3.1
- **Styling:** Tailwind CSS 4.2.1, DaisyUI 5.5.19
- **Routing:** React Router 7.13.1
- **HTTP Client:** Axios 1.13.6
- **Icons:** FontAwesome 7.2.0, Lucide React 0.577.0
- **Charts:** Recharts 3.8.0
- **Notifications:** React Toastify 11.0.5
- **Linting:** ESLint 9.39.1
- **Development:** TypeScript types for React components

## Features

- Browse and search through a collection of applications
- View detailed app information including ratings and reviews
- Responsive design that works on all devices
- Modern UI with gradient backgrounds and clean layouts
- Fast loading with Vite's optimized build system

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── Components/
│   ├── Banner/
│   ├── Footer/
│   ├── Header/
│   ├── Hero/
│   ├── Loading/
│   └── MainSection/
├── Pages/
│   ├── AppDetails/
│   ├── Apps/
│   ├── ErrorPage/
│   ├── Home/
│   ├── Installation/
│   └── Root/
├── Routes/
├── Utility/
│   └── appsData.json
└── assets/
```
