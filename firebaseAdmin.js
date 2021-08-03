const admin = require("firebase-admin");
const serviceAccount = require("./shopping-cart-192db-firebase-adminsdk-9ii4p-8df67db3c8.json");

export const verifyIdToken = (token) => {
  if (admin.apps.length)
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: process.env.REACT_APP_DATABASE_URL,
    });
  return admin
    .auth()
    .verifyIdToken(token)
    .catch((error) => {
      throw error;
    });
};
