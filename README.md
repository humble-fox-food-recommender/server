# server (food-recommender)
Server Side using Express.js, MongoDB, Mongoose, 3rd Party API (Zomato, Google Maps, Open Currency Exchange) 

## REST API Documentation

### List of basic routes:

| **Route** | **HTTP** | **Header(s)** | **Body** | **Description**                    |
| --------- | -------- | ------------- | -------- | ---------------------------------- |
| `/`       | GET      | `none`        | `none`   | Connected to Food Recommender App! |

### List of zomato routes:

| **Route**                         | **HTTP** | **Header(s)** | **Body** | **Description**                       |
| --------------------------------- | -------- | ------------- | -------- | ------------------------------------- |
| `/zomato/search/:parameter/:page` | GET      | `token`       | `none`   | Get all restaurants data by parameter |
| `/zomato/:id`                     | GET      | `token`       | `none`   | Get restaurant info's based on id     |


### List of currency routes:

| **Route**   | **HTTP** | **Header(s)** | **Body** | **Description**                                          |
| ----------- | -------- | ------------- | -------- | -------------------------------------------------------- |
| `/currency` | GET      | `token`       | `none`   | Get the list of currency name                            |
| `/currency` | POST     | `token`       | `none`   | Post a value with currency name & return converted value |


### List of users routes:

| **Route**      | **HTTP** | **Header(s)** | **Body** | **Description**              |
| -------------- | -------- | ------------- | -------- | ---------------------------- |
| `/users/login` | GET      | `token`       | `none`   | Sign in using Google Account |


## Usage

Make sure you have Node.js and npm installed in your computer, and then run these commands:

```
$ npm install
$ npm run dev
```

## Link

Access the API via http://localhost:3000/