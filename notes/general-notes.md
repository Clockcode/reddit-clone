## TypeScript
    Strong Typed language
        If you have a variable defined as a number you can not assign a string with default configuration
        But you can change it `code let lucky: any = 23;` `code lucky = '23'`
    Tooling
        Catch Bugs Now
    tsc command will compile ts file it to js file
        You can customize compiler
            Create a tsconfig.json to customize
    You can create your own types
        
## DevDependencies

## @types/node

## Postgresql
    sudo su postgres
    sudo service postgresql start|stop|status|restart
    psql 
        \l
        \du
        ALTER USER postgres WITH PASSWORD 'rootpass';
        CREATE USER cagdasm WITH PASSWORD 'Cagdas12!';
        ALTER USER cagdasm WITH SUPERUSER;
        create database redditDB;
## Database Info
- json is stored in its plain text format, while
    - If you only work with the JSON representation in your application, PostgreSQL is only used to store & retrieve this representation, you should use json.
- jsonb is stored in some binary representation
    - If you do a lot of operations on the JSON value in PostgreSQL, or use indexing on some JSON field, you should use jsonb

## Javascript
### Promise
    Async keyword turns return statement into a promise
        Also enables you to use await keyword
     

## Vim
    Go to end of the file esc - shift + g
        
## Database Migrations


## ORM (Object Relational Mapping)
    

