"use server"
import {MongoClient} from "mongodb"

const client = new MongoClient("mongodb://allan:375224@ac-4wogabz-shard-00-00.pspwuoh.mongodb.net:27017,ac-4wogabz-shard-00-01.pspwuoh.mongodb.net:27017,ac-4wogabz-shard-00-02.pspwuoh.mongodb.net:27017/?ssl=true&replicaSet=atlas-2ynwz6-shard-0&authSource=admin&appName=tcb")

export default async function userInfo(values){
  try{
    await client.connect()
    const db = client.db('website')
    const collection = db.collection('leads')
    await collection.insertOne({
      timestamp: new Date(),
      ...values
    })
  }catch(err){
    console.log(err)
  } finally{
    await client.close()
  }
}