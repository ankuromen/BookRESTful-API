# BookRESTful-API
RESTful API using Node.js for managing books.
#About: RESTful API using Node.js for managing books.

#Basic Requirements:
Node.js is installed on your machine.
MongoDB is installed and running.

#Start: The project was initialized using 'npm install express mongoose body-parser'.

#Root: 'Index.js' is the root file where databases, routes, middleware, and deployment are done.

#Schema: A mongoose schema was created for book details in Models.


#Routes: CRUD routes for books in 'bookRoutes.js'.
There are four endpoints:
1. POST(http://localhost:3000/books)-Create a new book.
2. GET(http://localhost:3000/books)-Get a list of all books.
3. GET(http://localhost:3000/books/*ID*)-Get details of a specific book by ID.
4. PATCH(http://localhost:3000/books/*ID*)-Update a book's details by ID.
5. DELETE(http://localhost:3000/books/*ID*)-Delete a book by ID.

NOTE: Replace ID with ID given by the database for operations.

To start the Server just Write 'npm start' in the terminal. 

