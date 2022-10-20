## To Do List App for Binar Mockup Test, Fullstack Web (ReactJs &amp; MongoDB)

---

Website ini adalah website Todolist Multi-User, dilengkapi dengan feature registrasi dan login, dan todolist di dapat diinput ke dalam database, todolist juga dapat didelete, ditambahkan dan juga dapat diupdate.

## Feature CRUD

---

Feature CRUD ini dapat diakses dengan authentikasi token yang akan digenerate ketika user melakukan registrasi dan login menggunakan jsonwebtoken, hal ini juga diperlukan untuk proteksi privasi user, serta password user juga akan dihashed menggunakan bcryptjs.

Token akan terbawa untuk mengidentifikasi TodoList users.

Dokumentasi API Postman dapat ditemukan pada folder Postman

---

## Cara Inisiasi Project:

Add `.env` file in root folder.

```
PORT = your port
MONGO_URI = your mongo_uri
JWT_SECRET = your secret key
```

## Installation Project:

Backend dependencies:

```
take out the .npmrc from folder
npm install
```

Frontend dependencies:

```
take out the .npmrc from folder
npm install
```

## Setting API_URL on Frontend

```
Change the API_URL on AuthService.js, to your Backend Environment API.
```

---

### NOTE:

```
DON'T FORGET TO SET YOUR URL AXIOS AND ALIGN IT TO YOUR ENVIROMENT DATABASE (SERVER)
```
