MovieMate – Full Stack Movie Discovery Platform
Overview

MovieMate is a full stack movie discovery web application developed using React, Spring Boot, MySQL, and TMDB API.

The application allows users to:

Explore trending movies
Browse movies by language
Search movies
Save favorite movies
Manage a personal watchlist

The project uses JWT Authentication and Protected Routes to provide secure user-specific functionality.

MovieMate follows a complete full stack architecture using:

React frontend
Spring Boot backend
REST APIs
MySQL database
JWT authentication
Features
Authentication System
User Signup
User Login
JWT Token Authentication
Protected Routes
Logout Functionality
Secure Password Encryption using BCrypt
Movie Features
View Trending Movies
Browse Movies by Language
Search Movies
Load More Pagination
Loading States
Empty States
Responsive Movie Grid
Favorites System
Add movies to favorites
Remove movies from favorites
Prevent duplicate favorites
User-specific favorite movies
Watchlist System
Add movies to watchlist
Remove movies from watchlist
Prevent duplicate watchlist movies
User-specific watchlist management
UI/UX Features
Responsive Design
Modern Navbar
Hover Effects
Toast Notifications
Loading Indicators
Clean Movie Card Layout
Search Page UI
Login & Signup UI
Tech Stack
Frontend
React.js
Vite
Axios
React Router DOM
CSS
Backend
Spring Boot
Spring Security
JWT Authentication
Spring Data JPA
Hibernate
Database
MySQL
External API
TMDB API
Architecture
Frontend (React + Vite)
        ↓
Spring Boot REST APIs
        ↓
Spring Security + JWT
        ↓
MySQL Database
        ↓
TMDB External API
Project Structure
MovieMate
│
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   ├── security
│   └── config
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   ├── context
│   ├── styles
│   └── routes
│
└── README.md
Database Tables
users

Stores user account details.

favorites

Stores favorite movies added by users.

watchlist

Stores watchlist movies added by users.

Entity Relationships
One User → Many Favorite Movies
One User → Many Watchlist Movies
API Endpoints
Authentication APIs
Method	Endpoint	Description
POST	/api/auth/signup	Register User
POST	/api/auth/login	Login User
Movie APIs
Method	Endpoint	Description
GET	/api/movies/trending	Get Trending Movies
GET	/api/movies/language	Get Movies by Language
GET	/api/movies/search	Search Movies
Favorite APIs
Method	Endpoint	Description
POST	/api/favorites	Add Favorite Movie
GET	/api/favorites	Get Favorite Movies
DELETE	/api/favorites/{id}	Remove Favorite Movie
Watchlist APIs
Method	Endpoint	Description
POST	/api/watchlist	Add Watchlist Movie
GET	/api/watchlist	Get Watchlist Movies
DELETE	/api/watchlist/{id}	Remove Watchlist Movie
Screenshots
Home Page

(Add Screenshot Here)

Search Page

(Add Screenshot Here)

Favorites Page

(Add Screenshot Here)

Watchlist Page

(Add Screenshot Here)

Login Page

(Add Screenshot Here)

How to Run the Project
1. Clone Repository
git clone https://github.com/YOUR_USERNAME/MovieMate.git
2. Backend Setup

Open backend folder in IntelliJ IDEA.

Create MySQL Database:

CREATE DATABASE moviemate_db;

Update application.properties

spring.datasource.url=jdbc:mysql://localhost:3306/moviemate_db
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

jwt.secret=YOUR_SECRET_KEY

tmdb.api.key=YOUR_TMDB_API_KEY

Run:

MovieMateBackendApplication.java

Backend runs at:

http://localhost:8080
3. Frontend Setup

Open frontend folder in VS Code.

Install dependencies:

npm install

Run frontend:

npm run dev

Frontend runs at:

http://localhost:5173
Future Improvements
Refresh Token Authentication
Movie Trailer Support
Dark Mode
Recommendation System
Infinite Scrolling
Movie Details Page
Deployment using Render & Vercel
Learning Outcomes

This project helped in understanding:

Full Stack Development
JWT Authentication
Protected Routes
REST API Development
Spring Security
React State Management
API Integration
MySQL Relationships
Responsive UI Design
Git & GitHub Workflow
Full Stack Project Architecture
