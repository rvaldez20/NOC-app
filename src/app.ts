import { envs } from "./config/plugins/envs.plugin";
import { MongoDatabase } from "./data/mongo";
import { ServerApp } from "./presentation/server";
import { PrismaClient } from '@prisma/client'

(async() => {
  main();
})();


async function main() {
  ServerApp.start();
}






























/*
//! coneccion a mongo
  // await MongoDatabase.connect({
  //   mongoUrl: envs.MONGO_URL,
  //   dbName: envs.MONGO_DB_NAME,
  // });

  //! crear una coleccion=tabla | document=registro
  // const newLog = await LogModel.create({
  //   message: 'Test message desde Mongo 1000',
  //   origin: 'app.ts',
  //   level: 'high',
  // });
  // await newLog.save();
  // console.log(newLog);

  //! obtener los logs
  // const logs = await LogModel.find();
  // // console.log(logs);


  //* instaciamos prisma (coneccion a postgres)
  // const prisma = new PrismaClient();

  //* insertamos prisma
  // const newLog = await prisma.logModel.create({
  //   data: {
  //     level: 'HIGH',
  //     message: 'Test message from prisma',
  //     origin: 'app.ts'
  //   }
  // })
  // console.log(newLog)

  //* insertamos prisma
  // const logs = await prisma.logModel.findMany()
  // console.log(logs)
 */
