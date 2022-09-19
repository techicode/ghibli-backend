# ghibli-backend
# REST API studio ghibli movie information

This a simple API REST app with basic information about movies from studio ghibli.

### Built With

- [Node JS](https://nodejs.org/en/)
- [Express JS](https://expressjs.com/)
- [Postgres](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)

# 🚀 Instalation and running process
## Install

    npm install

## Configure postgres database

    make a copy of .env-example and rename it to .env
    change the options using your username and password

## Run the app

    npm run dev



## End points

| METHOD          | END POINTS     |  Response     |
| ----------------- | ---------- | ---------- |
| GET | /movies/ |
| GET             | /movies/id/    | array of movies |
| GET             | /movies/id/?page?=2    | array of movies of page 2 |
| GET            | /producers/    | array of all producers |
| GET           | /producers/id/ | details of a single producer|
| GET           | /producers/id/movies | array of all movies of a single producer |
| GET            | /directors/    | array of all directors
| GET           | /directors/id/ | details of a single director |
| GET           | /directors/id/movies | array of all movies of a single director |


# REST API DOCUMENTATION

## Allowed methods.
    only GET

### Request

`GET /movies/`

    return an array with the first 5 movies

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Content-Type: application/json

    [
        {
          "id": 2,
          "title": "Castle in the Sky",
          "summary": "A young boy and a girl with a magic crystal must race against pirates and foreign agents in a search for a legendary floating castle. A young boy stumbles into a mysterious girl who floats down from the sky. The girl, Sheeta, was chased by pirates, army and government secret agents.",
          "release_date": "1986-08-02T00:00:00.000Z",
          "duration": 124,
          "ranking": 96,
          "cover_img": "",
          "director_id": 1,
          "producer_id": 1,
          "director": {
            "name": "Isao Takahata"
          },
          "producer": {
            "name": "Hayao Miyazaki"
          }
    },
    {... 4 more movies}
    ]

## GET MORE PAGES

### Request

`GET /movies/?page=2`

    If you need more results, you can use ?page=2 params

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Content-Type: application/json

    [
        {
      "id": 9,
      "title": "Porco Rosso",
      "summary": "In Italy in the 1930s, sky pirates in biplanes terrorize wealthy cruise ships as they sail the Adriatic Sea. The only pilot brave enough to stop the scourge is the mysterious Porco Rosso (Shuichiro Moriyama), a former World War I flying ace who was somehow turned into a pig during the war. As he prepares to battle the pirate crew's American ace, Porco Rosso enlists the help of spunky girl mechanic Fio Piccolo (Akemi Okamura) and his longtime friend Madame Gina (Tokiko Kato).",
      "release_date": "1992-07-18T13:33:47.000Z",
      "duration": 102,
      "ranking": 95,
      "cover_img": null,
      "director_id": 2,
      "producer_id": 3,
      "director": {
        "name": "Hayao Miyazaki"
      },
      "producer": {
        "name": "Toshio Suzuki"
      }
    }, 
    {... 4 more movies}
    ]
  

## Get a specific movie

### Request

`GET /movie/id`

    details from a specific movie using /movie/id/ example get /movie/2/

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Content-Type: application/json

    {
      "id": 2,
      "title": "Castle in the Sky",
      "summary": "A young boy and a girl with a magic crystal must race against pirates and foreign agents in a search for a legendary floating castle. A young boy stumbles into a mysterious girl who floats down from the sky. The girl, Sheeta, was chased by pirates, army and government secret agents.",
      "release_date": "1986-08-02T00:00:00.000Z",
      "duration": 124,
      "ranking": 96,
      "cover_img": "",
      "director_id": 1,
      "producer_id": 1,
      "director": {
        "name": "Isao Takahata"
      },
      "producer": {
        "name": "Hayao Miyazaki"
      }
    }

## Get a non-existent Movie

### Request

`GET /movie/id`

    when an valid id is used but the movie is not in the database, the server will response with a 404 code status and an error message

### Response

    HTTP/1.1 404 Not Found
    Status: 404 Not Found
    Content-Type: application/json
    

    {"error": "Movie not found"}

## Get a invalid Movie

### Request

`GET /movie/id`

    when an invalid id is used (get /movie/asdff/), the server will response with a 400 code status and an error message

### Response

    HTTP/1.1 404 Not Found
    Status: 404 Not Found
    Content-Type: application/json
    

    {"error": "Invalid input"}


## TO DO
- [ ] Improve documentation  
- [ ] Add to the github repo the database script with all the data
- [ ] Implement a image server in the same server for movies/producers/director pictures
- [ ] More 🤓
