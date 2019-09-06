# server (food-recommender)
Server Side using Express.js, MongoDB, Mongoose, 3rd Party API (Zomato, Google Maps, Open Currency Exchange) 

## REST API Documentation

### List of basic routes:

| **Route** | **HTTP** | **Header(s)** | **Codes** | **Result**            | **Description**                    |
| --------- | -------- | ------------- | --------- | --------------------- | ---------------------------------- |
| `/`       | GET      | `none`        | `200`     | OK                    | Connected to Food Recommender App! |
|           |          |               | `500`     | Internal Server Error | Failed on server side              |

### List of zomato routes:

| **Route**                         | **HTTP** | **Header(s)** | **Codes** | **Result**            | **Description**                       |
| --------------------------------- | -------- | ------------- | --------- | --------------------- | ------------------------------------- |
| `/zomato/search/:parameter/:page` | GET      | `token`       | `200`     | OK                    | Get all restaurants data by parameter |
|                                   |          |               | `500`     | Internal Server Error | Failed on server side                 |
| `/zomato/:id`                     | GET      | `token`       | `200`     | OK                    | Get restaurant info's based on id     |
|                                   |          |               | `500`     | Internal Server Error | Failed on server side                 |


### List of currency routes:

| **Route**   | **HTTP** | **Header(s)** | **Codes** | **Result**            | **Description**                                          |
| ----------- | -------- | ------------- | --------- | --------------------- | -------------------------------------------------------- |
| `/currency` | GET      | `token`       | `200`     | OK                    | Get the list of currency name                            |
|             |          |               | `500`     | Internal Server Error | Failed on server side                                    |
| `/currency` | POST     | `token`       | `200`     | OK                    | Post a value with currency name & return converted value |
|             |          |               | `500`     | Internal Server Error | Failed on server side                                    |


### List of users routes:

| **Route**      | **HTTP** | **Header(s)** | **Codes** | **Result**            | **Description**              |
| -------------- | -------- | ------------- | --------- | --------------------- |
| `/users/login` | GET      | `token`       | `200`     | OK                    | Sign in using Google Account |
|                |          |               | `500`     | Internal Server Error | Failed on server side        |


## Usage

Make sure you have Node.js and npm installed in your computer, and then run these commands:

```
$ npm install
$ npm run dev
$ live-server --host=localhost --port=8080
```

## Link

Access the API via http://localhost:3000/