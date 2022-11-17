// імпортуємо express
const express = require("express");
// створюємо об’єкт додатка
const app = express();
// визначаємо обробник для маршруту "/"
app.get("/", (request, response) => {    
    // відправляємо відповідь
    response.send("<h2>Hello World!</h2>");
});
// починаємо прослуховувати підключення по 3000 порту
app.listen(3000);


