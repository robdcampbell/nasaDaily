# NASA Daily : Photo/Video of the day.

## Technologies used:

- React.js
- React Router
- React Styled Components

## Installation:

Clone the repository and run:
`npm install`

Create your own Nasa API key at: [Nasa API](https://api.nasa.gov/)
_Please note: There is a default hourly limit of 1000 requests_

Create a .env file in the root project directory, and insert a generated NASA API key as follows:
REACT_APP_NASA_KEY=exampleGeneratedAPI

Once .env file is created with the API Key, return to the project directory and run:
`npm start`

### Important note if deploying to netlify:

- Additional file in the public directory: \_redirects
- Updated script in package.json: `"build": "CI= react-scripts build"`
