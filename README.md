# E-Commerce Website Backend 
It provides APIs to support user and admin functionalities, including authentication, 
product management, and user management.

# Features 
## Authentication
### User Login and Registration:
- Secure user authentication using tokens (e.g., JWT).
- Separate access levels for users and admins.
## User Mode
**Shopping Functionality:**
Users can browse products, add them to the cart, and place orders.
## Admin Mode
 **Admins can:**
- **Manage Products:** Add, delete, and update products.
- **Manage Users:** Block or unblock users to control platform access.
- **View and Remove Users:** Admins can see all registered users and take action as necessary.
## Tech Stack
- **Server Framework:** Node.js with Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Environment Variables:** Managed using dotenv

# API Endpoints
## Authentication
- **POST** /api/v1/auth/register - Register as a user or admin.
- **POST** /api/v1/auth/login - Login and receive a token.
- **GET** /api/v1/auth/logout - Logout User and erase token
  
## User Mode
- **GET** api/v1/admin/allproducts/:category - Fetch all products of specific category.
- **POST** /api/v1/cart - Add items to the cart.
- **POST** /api/v1/orders - Place an order.
  
## Admin Mode
- **POST** /api/v1/admin/add - Add a new product.
- **PUT** /api/v1/admin/update/:id - Update a product.
- **DELETE** /api/v1/admin/remove/:id - Delete a product.
- **PUT** /api/admin/block/:email - Block a user.
- **PUT** /api/admin/unblock/:email - Unblock a user.
- **GET** /api/v1/admin/all - Get info of all the users

# Contact
For any inquiries or issues, please reach out to:

- **Name:** Abhishek Kumawat
- **Email:** abhishekkumawat.ak21@gmail.com
- **LinkedIn:** [Abhishek kumawat](https://www.linkedin.com/in/abhishekkumawt/)
