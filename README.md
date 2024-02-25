01. Set up an Express.js application and its related configurations.
02. Install necessary project dependencies based on the fnctionalities required.
03. Create a User model with functions for getting all the users, adding a user, and confirming user login.
04. Create a User controller for interface with the User odel and handle user registration and login.
05. Creare a Post model with functions for creating a new post, retrieving all posts, retreving user posts, getting a post by its id, updating a post and deleting post
06. Create a Post controller to interface with the Post model to retrieve, create, update and delete posts.
07. Create a Comment model with functions for creating a comment, getting all comments on a specific post, updating and deleting a comment.
08. Create a Comment controller to interface with the Comment model to retrieve, create, update and delete comments on a specific post.
09. Create a Like model with functions for adding and removing a like and to get all likes on a specific post.
10. Create a Like controller to interface with the Like model to retrieve and toggle likes on specific post.
11. Create a custome error class and an error handling to send custom error messages.
12. Create a file upload middleware to handle post media.
13. Create a token based middleware for user authentication and to secure all the application routes.
14. Create a loger middleware to log request URL and body for all routes, excluding the user routes.

API STRUCTURE

User routes
/api
  01. POST/signup => Register a new user account
  02. POST/signin => Log in as user

Post routes
/api/posts
  01. GET/all => Retrieve all posts
  02. GET/:id => Retrieve a specific post by ID
  03. GET/ => Retrieve posts based on user credentials
  04. POST/ => Create a new post (Image upload functionality included)
  05. DELETE/:id => Delete a specific post by ID
  06. PUT/:id => Upload a specific post by ID (Image upload functionality included)

/api/comments
  01. GET/:id => Retrieve all comments for a specific post
  02. POST/:id => Add a new comment to a specific post
  03. DELETE/:id => Delete a specific comment by ID
  04. PUT/:id => Update a specific comment by ID

/api/likes
  01. GET/:postId => Retrieve all likes for a specific post
  02. Get/toggle/:postId => Toggle like status for a specific post
  
  
