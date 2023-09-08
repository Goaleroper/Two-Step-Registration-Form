# Description
This is a two step registration form which is based on Reactjs and typescript, the first page of the form collects the user's first name, last name, and profile picture and if all inputs are filled and there is no error , user can go to the second page and fill other fields include username and password finally the user submits form.
In this project we use formik and yup for form validation. Also we have used context to satisfy the need for data retrieval, when user go back to the first page, as well as react query for API requests.
We have used json-server as Mock API to handle API calls,too.


# Table of Contents
•	Installation
•	Usage
•	API Mocking
•	Technologies Used
•	Contributing

# Installation
1.	Clone the repository.
2.	Install dependencies using npm install.
3.	Start the development server using npm run dev.
4.	run server using json-server --watch db.json --port 3001

# API Mocking
The project uses a mock API server for testing API calls during development. The mock API server is created using json-server.
To install the server use npm install -g json-server and to start that, run the following command:
json-server --watch db.json --port 3001
This will start the mock API server on port 3001 and use the db.json file as the data source. It watch the db.json which is in the project root as the database.


# Technologies Used
•	React
•	TypeScript
•	React Context API
•	React Query
•	json-server

# Contributing
Contributions are welcome. Please fork the repository and submit a pull request.
