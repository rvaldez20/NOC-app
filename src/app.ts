import { envs } from "./config/plugins/envs.plugin";
import { MongoDatabase } from "./data/mongo";
import { ServerApp } from "./presentation/server";

(async() => {
  main();
})();


async function main() {

  // coneccion a mongo
  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  // crear una coleccion=tabla | document=registro
  // const newLog = await LogModel.create({
  //   message: 'Test message desde Mongo 1000',
  //   origin: 'app.ts',
  //   level: 'high',
  // });
  // await newLog.save();
  // console.log(newLog);


  // obtener los logs
  // const logs = await LogModel.find();
  // // console.log(logs);



  // ServerApp.start();
}
