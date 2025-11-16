# Boolflix

Boolflix is a Netflix-inspired web application for browsing and searching for movies and TV shows. Built with Vue 3 and Vite, it leverages The Movie Database (TMDB) API to fetch and display content in a dynamic and interactive user interface.

## Features

*   **Movie & TV Show Search**: Users can search for content by title through a search bar in the header.
*   **Dynamic Content Display**: On load, the application displays lists of popular movies and TV shows. Search results are organized into separate, horizontally scrollable rows.
*   **Interactive Content Cards**: Hovering over a movie or TV show poster reveals an information card with a flip effect. The card displays:
    *   Title and Original Title
    *   Star rating (converted from TMDB's 1-10 scale to a 1-5 scale)
    *   Synopsis (truncated for brevity)
    *   Original language, represented by a country flag.
*   **Dynamic Background**: The main jumbotron background image updates to the backdrop of the currently hovered movie or TV show, creating an immersive browsing experience.
*   **Genre Filtering**: Users can filter movies by genre using a dropdown menu next to the search bar.

## Technologies Used

*   **Frontend Framework**: Vue 3 (Options API)
*   **Build Tool**: Vite
*   **Styling**: Sass/SCSS with Bootstrap and Font Awesome for icons.
*   **API Client**: Axios for making requests to the TMDB API.
*   **State Management**: A simple reactive `store.js` file for global state.

## Project Setup

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/dunzolo/vite-boolflix.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd vite-boolflix
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173` (or the next available port).

## Project Structure

The project follows a standard Vue + Vite structure:

*   `public/`: Contains static assets that are copied directly to the build output.
*   `src/`: Contains the main application source code.
    *   `assets/`: Stores local static assets like images and fonts.
    *   `components/`: Reusable Vue components that make up the UI (e.g., `AppHeader`, `AppFilm`, `AppMain`).
    *   `styles/`: Global and partial Sass files (`_variables.scss`, `_mixins.scss`).
    *   `App.vue`: The root component of the application.
    *   `main.js`: The entry point of the Vue application.
    *   `store.js`: A simple reactive JavaScript object used for global state management, containing API endpoints and application data.

## API

This project utilizes [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api) to fetch movie and TV show data. The API key is currently hardcoded in `src/store.js`.
