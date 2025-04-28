# ☁️ GS

A modern and responsive frontend for a cloud file hosting platform, built with Vue 3, Vite, and Vuefinder.
Works seamlessly with a Swift + Vapor backend.

#### ✨ Features

    🔒 User Authentication (Login / Register)

    📤 File Uploads

    📁 File Browser (Powered by Vuefinder)

    📥 Download and Preview Files

    🗑️ Manage Files and Folders (Rename, Move, Delete)

    📱 PWA Support (Installable on Mobile Devices)

    🌐 Responsive Design (Desktop and Mobile Friendly)

#### 🛠 Tech Stack

    Vue 3

    Vite

    Vue Router

    Pinia (for State Management)

    Vuefinder

    TailwindCSS (for Styling)

    Axios (for API requests)

    Vite Plugin PWA (for Progressive Web App features)

#### 🚀 Getting Started
##### Prerequisites

    Node.js 18+

    npm or yarn

    Access to the Swift/Vapor backend API

# Setup

### Clone the repository
    git clone https://github.com/lucasrada/gs-client.git

### Navigate into the project directory
    cd gs-client

### Install dependencies
    npm install

### Start the development server
    npm run dev

### Build for production

    npm run build

# ⚙️ Configuration

Create a .env file in the root directory:

    VITE_API_BASE_URL=http://your-backend-api-url/api
    VITE_APP_NAME=Cloud Storage

    Update src/services/api.js (or wherever you manage Axios) to use VITE_API_BASE_URL.

🧩 Future Improvements

    ✅ OAuth integration (Google, GitHub sign-in)

    ✅ File Sharing (Public Links)

    ✅ User Settings (Profile, Storage Usage)

    ✅ Advanced file previews (PDF, images, audio)

    ✅ Recycle Bin for deleted files

    ✅ Dark Mode

📄 License

This project is licensed under the MIT License.
See the LICENSE file for more details.

📢 Notes

Ensure the backend Vapor API properly handles CORS for frontend requests. Service Worker caching is enabled for offline usage via PWA setup.