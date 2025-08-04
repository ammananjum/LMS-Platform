# LMS Platform

A full-stack Learning Management System (LMS) web application built with React, Node.js, and MongoDB. This platform allows users to register, enroll in courses, take quizzes, and manage their learning dashboard.

## Features

- User Registration and Login (Token-based authentication)
- Course Listing by Categories
- Course Enrollment System
- Dashboard to View Enrolled Courses
- Quiz System for Each Course
- Responsive UI with Mobile Navigation
- Backend API built using Express.js
- Protected Routes for Authenticated Users

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- CORS & Body-Parser

## API Endpoints

### Auth
- POST `/api/register`
- POST `/api/login`

### Courses
- GET `/api/courses`
- GET `/api/courses/:id`
- GET `/api/categories`

### Enrollment
- POST `/api/enroll`
- GET `/api/enrolled-courses`

### Quizzes
- GET `/api/quizzes/:courseId`


## License

This project is open-source and available under the [MIT License](LICENSE).
