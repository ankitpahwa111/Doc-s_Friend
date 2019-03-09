
    let getAppoinments=function(done){
        const {MongoClient} = require('mongodb')
        const MONGO_URL = "mongodb://localhost:27017";
        MongoClient.connect(MONGO_URL,(err,client)=>{
        if(err) throw err;
        const mydb=client.db('mydb')
        const doctors = mydb.collection('doctors');
        const appointments = mydb.collection('appointments');
        let arr=[];
        appointments.find({}).toArray((err,results)=>{
            if(err) throw err;
            console.log(results)
            done(results)
            return;
        });
        })
        
       }
       let getAppbyID=function(Appid,done){
        const {MongoClient} = require('mongodb')
        const MONGO_URL = "mongodb://localhost:27017";
        MongoClient.connect(MONGO_URL,(err,client)=>{
            if(err) throw err;
            const mydb=client.db('mydb')
            const doctors = mydb.collection('doctors');
            const appointments = mydb.collection('appointments');
           let arr=[];
           appointments.find({
               id:Number(Appid)
           }).toArray((err,results)=>{
               if(err) throw err;
               console.log(results)
               done(results)
               return
           });
        })
           
       }
       let  putApp=function(Appid,Id,Patient,done){
        const {MongoClient} = require('mongodb')
        const MONGO_URL = "mongodb://localhost:27017";
        MongoClient.connect(MONGO_URL,(err,client)=>{
            if(err) throw err;
            const mydb=client.db('mydb')
            const doctors = mydb.collection('doctors');
            const appointments = mydb.collection('appointments');
            appointments.insertOne(
               {
                   id:Number(Appid),
                   doctorsId:Number(Id),
                   patientName:Patient.valueOf()
       
               }
              
           )
           console.log('App inserted')
           Appid++;
           done()
           
           
           return ;
            })
       }
       module.exports={
            getAppoinments,
            getAppbyID,
            putApp
       }
