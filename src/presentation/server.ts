import { CronService } from "./cron/cron-service";


export class ServerApp {

  public static start() {

    console.log('Server started...');

    CronService.createJob(
      '*/5 * * * * *',
      () => {

      }
    );


  }

}
