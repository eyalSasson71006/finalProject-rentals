# Rent Mate - Frontend

Welcome to **Rent Mate**, the trusted platform designed to connect apartment owners with renters seeking their perfect home. Whether you're listing a modern city loft or looking for the ideal place to call home, Rent Mate makes the process seamless and straightforward. Our mission is to simplify the rental experience for both property owners and renters. The frontend of Rent Mate is built with React, providing users with an intuitive and smooth experience.

## Features

- **User Registration & Login**: Users can sign up as apartment owners or viewers and log in securely.
- **Post Apartments**: Apartment owners can post their properties for rent.
- **Apartment Listings & Search**: Users can browse all available apartments, filter by location, price, and other parameters.
- **Apartment Details & Reviews**: Each apartment includes details and user reviews.
- **Light/Dark Mode**: Users can switch between light and dark modes.
- **Chat App**: Built-in chat functionality allows users to communicate directly with apartment owners.
- **Wishlist & Likes**: Users can like apartments and add them to their wishlists.
- **Admin Capabilities**: Admins can view all users, edit or delete apartments, and manage user statuses.

## Technologies & Dependencies

This project is built with **React** and utilizes **Material-UI** for design. Below are the key dependencies and their purposes:

- **@mui/material** and **@mui/icons-material**: For styling the application with Material-UI components and icons.
- **axios**: To handle HTTP requests to the backend API.
- **react-router-dom**: For routing between different pages of the app.
- **socket.io-client**: To enable real-time communication in the chat app.
- **jwt-decode**: For decoding JWT tokens on the frontend.
- **joi**: For client-side validation of forms.
- **leaflet**: For displaying interactive maps.
- **@emailjs/browser**: To handle email sending functionality.
- **vite**: The project is powered by Vite for fast bundling and development.

## Installation Guide

### Prerequisites
- Node.js installed on your machine

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/eyalSasson71006/finalProject-rentals.git
    ```
2. Navigate to the project folder:
    ```bash
    cd finalProject-rentals
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. **Important**: Add the `.env` file to the root folder. This file contains sensitive data, such as API keys and URLs. Ensure it is properly configured before running the project.
5. Run the development server:
    ```bash
    npm run dev
    ```
6. Open your browser at [http://localhost:5173](http://localhost:5173) to view the application.

## Notes

- The frontend connects to the backend API, so ensure the backend is running and that the `.env` file includes the correct API URL.
- The project includes real-time chat functionality powered by **Socket.IO**. Ensure that the backend is set up with a corresponding Socket.IO server.

---

# Postman API Documentation

You can explore the backend API by visiting the Postman documentation:
- [Users Endpoints](https://documenter.getpostman.com/view/37787079/2sAXxWZooV)
- [Apartments Endpoints](https://documenter.getpostman.com/view/37787079/2sAXxWZojE)
- [Chats Endpoints](https://documenter.getpostman.com/view/37787079/2sAXxWZooW)

The Postman documentation contains all necessary information for interacting with the API, including request parameters, response formats, and example requests.
