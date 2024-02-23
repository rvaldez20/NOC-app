import { ServerApp } from "./presentation/server";
import { envs } from './config/plugins/envs.plugin';

(async() => {
  main();
})();


function main() {
  ServerApp.start();

  // try {
  //   console.log( envs );

  // } catch (error) {
  //   console.log(error)
  // }
}
