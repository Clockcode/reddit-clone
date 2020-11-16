import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import mikroConfig from "./mikro-orm.config"
const main = async () => {
    const orm = await MikroORM.init(mikroConfig);
    const post = orm.em.create(Post, {title: "First Post!"});
    // If you were to have constructors you could create a post like this
    // const post = new Post("First Post!");
    await orm.em.persistAndFlush(post);
    console.log("----------SQL2------------")
    await orm.em.nativeInsert(Post,{ title: "My second Post"});
}
main().catch(err => console.error(err));