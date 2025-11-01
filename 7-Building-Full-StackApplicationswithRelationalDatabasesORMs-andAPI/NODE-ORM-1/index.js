const db = require('./db');
const {usersTable} = require("./drizzle/schema");

async function getAllUsers() {
    const users = await db.select().from(usersTable);
    console.log(`Users in DB`, users);
    return users;
}

async function createUser({id, name, email}){
    await db.insert(usersTable).values({
        id,
        name,
        email,  
    });
}


createUser({id:2, name:"Rajaram", email:"rajaram@example.com", });


getAllUsers();