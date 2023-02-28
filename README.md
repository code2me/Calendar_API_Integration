## Google Calendar API Integration

This is a simple web application that integrates with the Google Calendar API to fetch the user's upcoming events and display them in a list. The application uses React for the frontend and Node.js with Express for the backend.

Getting Started
To get started with this application, you will need to follow these steps:

Clone the repository to your local machine.
Create a new project in the Google Developers Console.
Enable the Google Calendar API for the project.
Create OAuth2 credentials for the project and set the authorized redirect URI to <http://localhost:3000>.
Add the client ID and secret to your environment variables with the names GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET.
Install the dependencies by running npm install in the root directory of the project.
Start the development server by running npm start.
How to Use
Once the development server is running, open the application in your web browser at <http://localhost:3000>. Click on the "Sign in with Google" button to authorize the application to access your Google Calendar. You will be redirected to a Google sign-in page where you will need to enter your Google account credentials.

After signing in, the application will fetch your upcoming events from the Google Calendar API and display them in a list on the page. You can log out by clicking on the "LOGOUT" button.

Technologies Used
This project uses the following technologies:

React
Node.js
Express
Axios
Google Calendar API
styled-components
@react-oauth/google

Acknowledgements
This project was created as part of a backend assignment and is solely for educational purposes. 
It is not intended to be used as a production-ready application.
# Calendar_API_Integration
