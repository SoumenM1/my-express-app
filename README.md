
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

