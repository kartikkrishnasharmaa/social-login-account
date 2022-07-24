
const session = require('express-session')
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const app = express();

app.use(
  session({ name: "session", secret:"krishna", keys: ["kartik"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);
const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV === "development"){
  app.use(express.static("client/build"));
}


app.listen("5000", () => {
  console.log("Server is running!");
});
