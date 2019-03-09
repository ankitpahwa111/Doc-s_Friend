//const doctors=require('../db/models').doctors;
//console.log(doctors.find({}).toArray())

let arr=[];
    let getDoctors=function(radiusLimit,Docspecialism,done){
        console.log(Docspecialism)
        const {MongoClient} = require('mongodb')
        const MONGO_URL = "mongodb://localhost:27017";
        
        MongoClient.connect(MONGO_URL,(err,client)=>{
            if(err) throw err;
            const mydb=client.db('mydb')
            const doctors = mydb.collection('doctors');
            const appointments = mydb.collection('appointments');
            //console.log(doctors.find({}).toArray())
            //return new Promise((resolve,reject)=>{
                
            doctors.find({
           $and: [{
               radius: {
                   $lt: Number(radiusLimit)
               }
             }, {
               specialism: { $eq : Docspecialism}
            //    specialism : {
            //     "$text" : { "$search" : 'Allergist' }
            //    }
                 
               
             }]
        }).toArray((err,arr)=>{
            if(err) throw err;
             
            // arr=results
            //console.log(arr)
            done(arr);
            return ;
            
        })
           // })
            
        //console.log(arr)
        
       })
       
        }
        
        let getDoctorbyID=function(Docid,done){
            console.log(Docid);
            const {MongoClient} = require('mongodb')
            const MONGO_URL = "mongodb://localhost:27017";
            MongoClient.connect(MONGO_URL,(err,client)=>{
                if(err) throw err;
                const mydb=client.db('mydb')
                const doctors = mydb.collection('doctors');
                const appointments = mydb.collection('appointments');
                let arr=[];
                doctors.find({
                
                id: Number(Docid)
            }).toArray((err,results)=>{
                if(err) throw err;
                console.log(results)
                done(results)
                //return results;
            });
            
        
        })
    }
        module.exports={
            
            getDoctors,
            getDoctorbyID,
            
        }
