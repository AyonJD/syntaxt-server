
# Syntax Solution
### Live Site Link : [Syntax Solution](https://syntax-solution-26bed.web.app/)
### Server API Link : [Syntax Solution Server](https://syntaxt-server.up.railway.app)

## Technologies

* Node JS.
* Express JS.
* MongoDB.
* Mongoose.
* Cors.
* JWT.
* BodyParser.

## API Overview

### User API

#### Get All User
* https://syntaxt-server.up.railway.app/api/v1/auth/user

#### Login
* https://syntaxt-server.up.railway.app/api/v1/auth/user/Login
* It receives(Post method) the users User Name / Email and Password in the body.

#### Sign up
* https://syntaxt-server.up.railway.app/api/v1/auth/user/signup
* It receives (Post method) the users User Name, Email, Password and user role in the body.

#### Get Logged In User
* https://syntaxt-server.up.railway.app/api/v1/auth/user/:id
* It receives(Get method) the users ID as parameter and returns the logged in users full info exclude password(For security).

#### Update User role
* https://syntaxt-server.up.railway.app/api/v1/auth/user/update/:id
* It receives(Post method) the users role as body and updates the users role. It will work if the logged in user is an admin.

### Product API

#### Get all Product
* https://syntaxt-server.up.railway.app/api/v1/product
* It will return all the products added by admin.

#### Add Product
* https://syntaxt-server.up.railway.app/api/v1/product/add
* It receives The users role, Image, Label and Details of the product. If the user role is not admin then It will return "Unauthorized". And if admin, it will return the added Product.
