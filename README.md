# SPY Project

![](./client/src/assets/Logos/logo.webp)

(Note: This website does not have the paid API key. Some components are limited)

Demo URL: https://spyproject.netlify.app/

## Main Stack - M.E.R.N

### Frontend

- React as framework
- React Router for navigation
- Formik + yup for form validation
- Redux Toolkit for statemanagement
- Redux with Persistent for local storage
- React Bootstrap for video
- Tailwind/MUI for Design and CSS

### Backend (Coming up)

- NodeJS for run time
- ExpressJS for backend framework
- MongoDB for database
- JSON Web Token for authentication
- Multer for file upload

## How to Generate Working Website on your localhost

- Create `.env.local` file inside client
- Fill in the followings
- VITE_RAPID_API_KEY = https://rapidapi.com/tipsters/api/shazam-core/ <-- Go to this link and Sign Up, then you should see X-RapidAPI-Key inside Code Snippets. Copy it without the ""
- VITE_UNSPLASH_ACCESS_KEY = https://unsplash.com/@developer/ <-- Go to this link Sign Up, then create a project and they will give you API Key. Copy it without the ""

ex)

- VITE_RAPID_API_KEY = KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA


### Installation

You can install the latest version using npm:
cd to client folder then

`npm install`
`npm run dev`

