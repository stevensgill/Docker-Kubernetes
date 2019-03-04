const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379 // default port here for clarity
});
client.set('visits', 0)

app.get('/', (req, res) => {
  process.exit(0);
  client.get('visits', (err, visits) => {
    res.send(`<p>Number of visits ${visits}</p>`);
    client.set('visits', parseInt(visits) + 1)
  });
});

app.listen(8081, () => {
  console.log('Visits listening on port 8081');
});

// Restrat policy
// no
// always
// on-failure
// unless-stopped
