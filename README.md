# Law Firm Website

A modern, responsive website for a law firm specializing in immigration law and debt relief services. Built with Next.js and deployed on Firebase.

## Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI component library built on Radix UI
- **Lucide React** - Icon library
- **Next Themes** - Theme management
- **Vercel Analytics** - Performance monitoring

### Backend & Database
- **Firebase** - Backend-as-a-Service
- **Firestore** - NoSQL database
- **Firebase Functions** - Serverless functions
- **Firebase Hosting** - Static site hosting

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Modern UI Components** - Built with shadcn/ui and Radix UI primitives
- **Contact Form** - Integrated with Firebase for message collection
- **SEO Optimized** - Meta tags and structured data
- **Performance Optimized** - Static export with Next.js
- **Analytics** - Vercel Analytics integration
- **Type Safety** - Full TypeScript implementation

## Project Structure

```
├── app/                    # Next.js App Router pages
├── components/             # React components
│   ├── ui/                # Reusable UI components
│   └── ...                # Page-specific components
├── lib/                    # Utility functions and configurations
│   ├── firebase/          # Firebase configuration and functions
│   └── types/             # TypeScript type definitions
├── public/                 # Static assets
├── scripts/               # Build and deployment scripts
└── ...                    # Configuration files
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase CLI (for deployment)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project
   - Add your Firebase configuration to `lib/firebase/firebase.ts`
   - Update `firebase.json` with your project settings

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `out` directory, ready for static hosting.

### Deployment

The project is configured for Firebase Hosting:

```bash
firebase deploy
```

## Configuration

- **Firebase**: Configure in `lib/firebase/firebase.ts`
- **UI Components**: Configure in `components.json`
- **Tailwind**: Configure in `tailwind.config.js`
- **Next.js**: Configure in `next.config.js`

## License

Private project - All rights reserved.