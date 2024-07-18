const express = require('express');
const app=express()
const { open } = require("sqlite");
const sqlite3 = require('sqlite3');
const path=require("path")

let db=null
//creating DB
let dbpath=path.join(__dirname,"details.db")
console.log(dbpath)
let initialize=async()=>{
    try{
        db =new sqlite3.Database(dbpath)
        console.log("db initialized")
        }


    catch(e){
        console.log(`DB error:${e.message}`)
        process.exit(1)
    }
}
initialize()



const creatingtable=async()=>{
    try{
        await db.run(`CREATE TABLE IF NOT EXISTS details (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text not null,
            email TEXT NOT NULL,
            password TEXT NOT NULL
        )`);
       console.log("table created")
    }
    catch(e){
        console.log(`table creation error:${e.message}`)
        } 
}

const creatingNote=async()=>{
    try{
        await db.run(`CREATE TABLE IF NOT EXISTS noteDetails (
            SlNo INTEGER PRIMARY KEY ,
            NoteTitle TEXT ,
            Note TEXT ,
            Tags TEXT,
            BackgroundColor TEXT 
        )`)
       console.log("Note table created")
    }
    catch(e){
        console.log(`Note creation error:${e.message}`)
        } 
}






creatingtable()
creatingNote()
module.exports=db