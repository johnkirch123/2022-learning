const express = require('express');
const app = express();
const userData = require('./MOCK_DATA.json');
const graphql = require('graphql');
const { graphqlHTTP } = require('express-graphql');

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
