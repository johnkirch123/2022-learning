const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schemas');

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
