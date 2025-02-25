const express = require("express");

const { createYoga } = require("graphql-yoga");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const typesArray = loadFilesSync("**/*", {
  extensions: ["graphql"],
});

const resolversArray = loadFilesSync("**/*", {
  extensions: ["resolvers.js"],
});
const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray,
});

const app = express();

app.use(
  createYoga({
    schema: schema,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Running graphql server on port 3000");
});
