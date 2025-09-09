# Treehouse U6: Static Node.js and Express Site

## Overview

This project is a static portfolio website built with Node.js and Express, designed to showcase a collection of projects. It demonstrates server-side rendering using Express, templated views with Pug, and static asset handling.

## Extra Credit

[X] - Set up package.json file so that running 'npm start' will run the app
[X] - Render Helpful Pug Templates in Error-Handling Middleware
  [X] - 1. Create two new Pug templates in the 'views' folder and name them 'error.pug' and 'page-not-found.pug'. These Pug files extend the layout, are set to block content, and display the error's 'message', 'status', and the 'stack' properties.
  [X] - 2. When that status property is 404, the 'page-not-found.pug' template is rendered. For any other status codes, the 'error.pug' template is rendered.
  [X] - 3. These templates include a link back to the home page
[X] - Customize the Styles
  [X] - 1. Change at least three of the following:
    [X] - Changed the color for the sidebar h5/header/projects-box cell h5 to #2774AE
    [X] - Changed the background color of the sidebar and header to #081823
    [X] - Make the project thumbnails grayscale by default and color them at a rate of 0.3s on hover
  [X] - 2. Document the style changes, right here in the README.md file

## Features

- **Dynamic Project Pages**: Each project has its own page rendered from a JSON data source.
- **Responsive Layout**: Mobile-first design using Flexbox and CSS Grid.
- **Static Asset Management**: Uses Express's static middleware to serve images and other assets.
- **Grayscale Hover Effect**: Project thumbnails start in grayscale and transition to full color on hover.
- **404 Error Handling**: Custom error pages for non-existent routes with special handling for missing static assets.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side scripting.
- **Express**: Web framework for building the application.
- **Pug**: Templating engine for rendering views.
- **CSS**: Styling with Flexbox and Grid for layout.
- **JSON**: Data format for project information.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Treehouse](https://teamtreehouse.com/) for the course material.
- [Express.js](https://expressjs.com/) for the web framework.
- [Pug](https://pugjs.org/) for the templating engine.
- [Node.js](https://nodejs.org/) for the JavaScript runtime.