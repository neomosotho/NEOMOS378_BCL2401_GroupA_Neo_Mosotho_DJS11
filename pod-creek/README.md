

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Netlify Link: https://podcreek.netlify.app


## pod-creek App
Description
The Podcast App is a React-based web application that allows users to explore, search, and manage their favorite podcasts. The app features a dynamic user interface with dark and light themes, a navigation bar, a sidebar for additional options, and routes for different pages like Dashboard, Genres, Shows, Search, and Favorites. It leverages react-router-dom for routing and styled-components for theming and styling.

## Features
Theming: Toggle between dark and light themes.
Responsive Sidebar: Expandable sidebar for additional navigation and settings.
Dynamic Sorting: Sort podcasts based on user-selected criteria.
Routing: Navigate between different pages using React Router.
Favorites Management: Save and manage favorite podcasts.
Search Functionality: Search for podcasts by keywords.

## Technologies Used:
React: Front-end library for building user interfaces.
React Router: Library for routing in React applications.
Styled-components: Library for styling React components.
JavaScript: Programming language for logic implementation.
CSS: Styling the application.

## Folder Structure
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── NavBar.js
│   │   ├── SideBar.js
│   │   ├── Genres.js
│   │   ├── Shows.js
│   │   └── ...
│   ├── pages
│   │   ├── Dashboard.js
│   │   ├── Search.js
│   │   ├── Favorites.js
│   │   └── ...
│   ├── utils
│   │   ├── Themes.js
│   │   └── useFetchPodcasts.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
└── package.json

## Installation
Clone the repository:
git clone https://github.com/neomosotho/NEOMOS378_BCL2401_GroupA_Neo_Mosotho_DJS11.git
cd pod-creek 

Install dependencies:
npm create vite@latest pod-creek -- --template react

Start the development server:
npm run dev
Local: http://localhost:5173/

## Components Overview
App.js
The root component that sets up theming, routing, and the overall layout of the application.

NavBar.js
A navigation bar component that includes buttons for toggling the sidebar and sorting options.

SideBar.js
A sidebar component that provides additional navigation and settings, including theme toggling.

Dashboard.js
A page component that displays the main content of the app, including a list of podcasts, which can be sorted based on user preferences.

Genre.js
A component that displays podcasts based on selected genres.

Shows.js
A component that displays detailed information about a specific podcast.

Search.js
A page component that provides search functionality for finding podcasts.

Favorites.js
A page component that allows users to view and manage their favorite podcasts.

Theming
The app supports light and dark themes using styled-components' ThemeProvider. The themes are defined in Themes.js and applied globally through the ThemeProvider in App.js.

Routing
The app uses react-router-dom to handle routing between different pages. Routes are defined in App.js using the Routes and Route components.

## Usage

Toggle Theme
Click on the theme toggle button in the sidebar to switch between light and dark themes.

Navigate
Use the navigation bar at the top to access different sections of the app, such as Dashboard, Search, and Favorites.

Search Podcasts
Go to the Search page and enter keywords to find specific podcasts.

Manage Favorites
Go to the Favorites page to view and manage your favorite podcasts.

Sort Podcasts
Use the sorting options in the navigation bar to sort podcasts based on your preferred criteria.

## Future Enhancements
User Authentication: Add user authentication for personalized experiences(This is incomplete).
Podcast Playback: Integrate a podcast player for listening to episodes within the app(This is incomplete).

