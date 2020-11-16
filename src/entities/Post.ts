import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

// Entity is a database table
@Entity()
export class Post {
  // Field
  @PrimaryKey()
  id!: number;
  
  // Field
  @Property({type: "date"})
  createdAt = new Date();
  
  // Field
  @Property({type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
  
  // Field
  @Property({type: "text"})
  title!: string;
}