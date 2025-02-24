const express = require("express");
const app = express();
const { buildSchema } = require("graphql");
const { createYoga } = require("graphql-yoga");

const schema = buildSchema(`
    type Query {
        description: String,
        price: Float
    }
`);

app.use(
  createYoga({
    schema: schema,
  })
);

app.listen(3000, () => {
  console.log("Running graphql server on port 3000");
});
