import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import mikroConfig from "./mikro-orm.config";
import express from "express";
import {ApolloServer} from "apollo-server-express"
import {buildSchema} from "type-graphql"
import {HelloResolver} from "./resolvers/hello"
const main = async () => {
  // Connects to the database
  const orm = await MikroORM.init(mikroConfig);
  // Code version of CLI Command `npx mikro-orm migration:up`
  // Migrates up to latest version
  await orm.getMigrator().up();
  // const post = orm.em.create(Post, {title: "First Post!"});
  // await orm.em.persistAndFlush(post);
  // If you were to have constructors you could create a post like this
  // const post = new Post("First Post!");
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false
    })
  })
apolloServer.applyMiddleware({app})
  app.listen("4000", () => {
    console.log("Server listening on localhost:4000")
  });

  const posts = await orm.em.find(Post, {});
  console.log(posts);
};
main().catch((err) => console.error(err));
