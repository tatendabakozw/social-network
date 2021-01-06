const Pool = require('pg').Pool

const pool = new Pool({
    host: process.env.host,
    port: process.env.db_port,
    password: process.env.password,
    database:process.env.database,
    user: process.env.user
})

//databse connection with error handling
const connectDB = (err) =>{
    if(err){
        console.log(err)
    }else{
        pool.connect((error)=>{
            if(error){
                console.log(error.message)
            }else{
               console.log("Database Connected Successfully") 
            }
        })
    }
}

//exporting modules to use in other files
module.exports = {
    query:(text, params) => pool.query(text,params),
    connectDB
};
