import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import express from 'express';
import { Firestore } from '@google-cloud/firestore';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const firestore = new Firestore();
firestore.settings({ timestampsInSnapshots: true });
const app = express();

app.get('/', (req, res) => {
  return res.status(200).send({ message: 'Hello World' });
});

app.get('/db', async (req, res) => {
  const test = firestore.collection('test');
  (await test.where('a', '==', 'eiei').get()).forEach(e => {
    console.log(e.data());
  });
  return res.status(200).send({ message: 'GET snapshot' });
});

export const api = functions.https.onRequest(app);
