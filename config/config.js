const mongoose = require("mongoose");

const { MONGO_URI } = require("./keys");

const dbConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Base de datos conectada con éxito");
  } catch (error) {
    console.error(error);
    throw new Error("Error a la hora de iniciar la base de datos");
  }
};

module.exports = {
  dbConnection,
};