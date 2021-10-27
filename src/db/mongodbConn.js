// eslint-disable-next-line @typescript-eslint/no-var-requires
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_CONN;

export const clientMongoDb = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// client.connect((err) => {
//   const userCollection = client.db('axbbasemodel').collection('users');
//   // perform actions on the collection object
//   // client.close();
//   console.log('userCollection', userCollection);
//   console.log('connectioErr', err);
// });

// export const dbUsers = client.db();
