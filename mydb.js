const { MongoClient } = require('mongodb');

// Replace the URI with your own connection string
const uri = 'mongodb://localhost:27017/myapp';

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB cluster
client.connect(async err => {
  if (err) {
    console.log('Error connecting to MongoDB:', err);
    return;
  }

  // Get the users collection
  const users = client.db('myapp').collection('users');

  // Insert a new user with their username and password
  const result = await users.insertOne({
    username: 'john',
    password: 'password123'
  });

  console.log('Inserted user:', result.insertedId);

  // Close the client
  await client.close();
});
