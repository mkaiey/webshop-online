require("dotenv").config();

const mongoose = require("mongoose");

const connectionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@cluster0.j9ijc6u.mongodb.net/webgoshop?retryWrites=true&w=majority`;

mongoose
  .connect(connectionStr, { useNewUrlparser: true })
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  console.log(err);
});
