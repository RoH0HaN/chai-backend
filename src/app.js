import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Used to set cros origin, like who can access the 'Backend' and 'Backend' allowd the credentials
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Used to set the 'JSON' size limit for the 'Backend' to prevent any crashes caused by large 'JSON'
app.use(
  express.json({
    limit: "20kb",
  })
);

// Used to encode the URL, like Special Charecters
app.use(
  express.urlencoded({
    extended: true,
    limit: "20kb",
  })
);

// Used to give access to a folder for assets storing
app.use(express.static("public"));

// Used to perform CRUD operation on browser cookies
app.use(cookieParser());

export { app };
