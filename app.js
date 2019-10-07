// получаем модуль Express
const express = require("express");
// создаем приложение
const app = express();

// устанавливаем обработчик для маршрута "/"
app.get("/", function(request, response) {

    //response.send("<h2>Привет Express!</h2>");
    response.sendStatus(200);
});
// начинаем прослушивание подключений на 3000 порту
app.listen(3000);