
# User Registration API

## Introduction

This API allows users to register for an account by providing their email, username, and password.

Installation
Clone the repository.
Install dependencies: `npm install`
Start the server: `npm start`





## Endpoints

- `POST /api/users/register`: Endpoint for user registration.

## Request Payload

```json
{
  "email": "example@example.com",
  "username": "exampleuser",
  "password": "password123"
}



POST /api/users/register
Content-Type: application/json

{
  "email": "example@example.com",
  "username": "exampleuser",
  "password": "password123"
}




## Base URL

Live URL: [https://my-express-app-3yyh.onrender.com](https://my-express-app-3yyh.onrender.com)

## Paths and Usage

### 1. Create a New Post

- **Path:** `/posts`
- **Method:** POST
- **Description:** Creates a new post with the provided title, content, and optionally an image URL.
- **Request Body:**
  ```json
  {
    "title": "New Post Title",
    "content": "Post content goes here",
    "imageUrl": "https://example.com/image.jpg" // optional
  }


  2. Get All Posts
Path: /posts
Method: GET
Description: Retrieves all posts available in the database.
Response: Returns an array of post objects.

3. Get a Specific Post
Path: /posts/:id
Method: GET
Description: Retrieves a specific post by its ID.
Response: Returns the post object matching the provided ID.

4. Update a Post
Path: /posts/:id
Method: PATCH
Description: Updates the specified fields of a post identified by its ID.
Request Body: Include fields to update (title, content, imageUrl).
Response: Returns the updated post object.

5. Delete a Post
Path: /posts/:id
Method: DELETE
Description: Deletes a post identified by its ID.
Response: Returns a success message upon deletion.

6. Like a Post
Path: /posts/:id/like
Method: POST
Description: Increments the like count of a post identified by its ID.
Response: Returns the updated post object with incremented like count.

7. DisLike a Post
Path: /posts/:id/dislike
Method: POST
Description: Increments the dislike count of a post identified by its ID.
Response: Returns the updated post object with incremented like count.

8. Add a Comment to a Post
Path: /posts/:id/comment
Method: POST
Description: Adds a comment to a post identified by its ID.
Request Body:
json
Copy code
{
  "text": "Your comment text goes here"
}
Response: Returns the updated post object with the added comment.