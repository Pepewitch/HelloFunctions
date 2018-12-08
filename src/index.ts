import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import express from "express";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

const app = express();

app.get("/", (req, res) => {
  return res.status(200).send({ message: "Hello World" });
});

app.get("/ping", (req, res) => {
  return res.status(200).send({ message: "Pong" });
});

app.post("/ping2", (req, res) => {
  return res.status(200).send({ message: "POST Pong" });
});

export const api = functions.https.onRequest(app);
