const {MongoClient} = require('mongodb')
const MONGO_URL = "mongodb://localhost:27017";
MongoClient.connect(MONGO_URL,(err,client)=>{
    if(err) throw err;
    const mydb=client.db('mydb')
    const doctors = mydb.collection('doctors');
    const appointments = mydb.collection('appointments');
    doctors.insertMany([
        {
          name: "Dr. Aslam Islam1",
          specialism: 'Cardiologist',
          id:1,
          radius:2,
          rating:50,
          hospital: "MAHARAJA AGRASEN"
        }, {
            name: "Dr. Aslam Islam2",
          specialism: 'Cardiologist',
          id:2,
          radius: 3,
          rating:55,
          hospital: "MAHARAJA AGRASEN"
    
        }, {
            name: "Dr. Aslam Islam3",
            specialism: 'Allergist',
            id:3,
            radius: 8,
            rating:60,
            hospital: "MAHARAJA AGRASEN"
        }, {
            name: "Dr. Aslam Islam4",
            specialism: 'Allergist',
            id: 4,
            radius: 10,
            rating:70,
            hospital: "MAHARAJA AGRASEN"
        }
      ], (err, result) => {
        if (err) {
          throw err;
        }
        console.log("DATA INSERTED")
      })
})