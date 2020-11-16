import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import mikroConfig from "./mikro-orm.config"
const main = async () => {
    // Connects to the database
    const orm = await MikroORM.init(mikroConfig);
    // Code version of CLI Command `npx mikro-orm migration:up`
    // Migrates up to latest version
    await orm.getMigrator().up()
    // const post = orm.em.create(Post, {title: "First Post!"});
    // await orm.em.persistAndFlush(post);
        // If you were to have constructors you could create a post like this
        // const post = new Post("First Post!");
    
        // const posts = await orm.em.find(Post, {});
    // console.log(posts)
}
main().catch(err => console.error(err));