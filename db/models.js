const {MongoClient} = require('mongodb')
const MONGO_URL = "mongodb://localhost:27017";
MongoClient.connect(MONGO_URL,(err,client)=>{
    if(err) throw err;
    const mydb=client.db('mydb')
    const doctors = mydb.collection('doctors');
    const appointments = mydb.collection('appointments');
    console.log(doctors.find({}).toArray())
    module.exports = {
        mydb,
        doctors,
        appointments
        
      }
})