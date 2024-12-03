const express = require("express");
const app = express();
const PORT = 8080;
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json"); // Importar el archivo JSON

const { dbConnection } = require("./config/config")

app.use(express.json())

app.use("/tasks",require("./routes/tasks"))
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


dbConnection()

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));
console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
