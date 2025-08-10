# ![Jokes Overflow Logo](/Images/logo-removebg-preview.png) Jokes Overflow

**Jokes Overflow** is a fun and interactive web application designed to bring humor to developers and programming enthusiasts. The app provides a dynamic collection of jokes, memes, and gifs related to the world of programming, along with features that allow users to save their favorite jokes, share them, and explore jokes categorized by different programming languages and technologies.

## Features

- **Browse Jokes**: Access a variety of programming-related jokes from the homepage.
- **Favorites**: Users can save their favorite jokes locally in the browser's storage, and easily remove them as well.
- **Share Jokes**: Share jokes from any page directly via external links or social media.
- **Meme Viewer**: View programming-related memes fetched from the Giphy API, displayed in a photo viewer format.
- **Categories**: Explore jokes categorized by different programming languages, including Python, JavaScript, and more.
- **Random Joke Generator**: Generate random single or double-part jokes for a bit of fun.
- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile).

## Screenshots

![Home Page Screenshot](/src/assets/Images/Home.png)  
*Description: Home page featuring jokes, memes, and featured joke of the day.*

![Favorites Page Screenshot](/src/assets/Images/Favorites.png)  
*Description: Favorites page where users can view, remove, or share saved jokes.*

![Categories Page Screenshot](/src/assets/Images/Categories.png)  
*Description: Categories page with jokes sorted by programming languages.*

## Technologies Used

- **Frontend**:  
  - **React.js**: JavaScript library for building dynamic, component-based user interfaces.
  - **TailwindCSS**: Utility-first CSS framework for rapid styling and customization.
  - **DaisyUI**: TailwindCSS component library to speed up UI development with pre-designed components.

- **APIs**:
  - **Giphy API**: Fetches meme images and gifs for the memes section.
  - **Jokes API**: Provides a collection of programming jokes for the Random Joke Generator and Categories pages.

- **Storage**:
  - **localStorage**: Stores users' favorite jokes to persist across sessions.

