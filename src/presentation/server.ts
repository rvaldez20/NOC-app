import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { EmailService } from "./email/email-service";


// instancias del logRepository
const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDataSource(),
);


export class ServerApp {

  public static start() {

    console.log('Server started...');

    // TODO: Send email
    const emailService = new EmailService();
    emailService.sendEmail({
      to: 'rvaldez20@gmail.com',
      subject: 'Logs de sistema',
      htmlBody: `
        <h3>Logs de Sistema - NOC</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim pharetra enim vel tristique. Curabitur luctus vulputate diam, sed dictum magna scelerisque ut. Donec luctus quis neque quis vulputate. Vestibulum interdum nunc sed tellus venenatis, a aliquet nibh molestie. In hac habitasse platea dictumst. Vivamus sed accumsan nibh. Vestibulum ut efficitur orci, sed varius turpis. Suspendisse sit amet tincidunt tortor. Ut eget odio sit amet lacus sodales mollis sit amet ac purus. Sed a malesuada nisi. Etiam eu molestie enim. Pellentesque nec odio in dui fringilla commodo vel vel metus. Nunc id ligula scelerisque, feugiat lacus nec, venenatis ligula. Duis elementum sodales aliquet. Quisque mi ligula, pharetra eu elementum ut, congue sit amet erat. Maecenas blandit urna a ultricies placerat.</p>
        <p>Ver logs adjuntos</p>
      `,
    })


    // CronService.createJob(
    //   '*/5 * * * * *',
    //   () => {
    //     // const url = 'http://google.com';
    //     const url = 'http://localhost:3000';
    //     new CheckService(
    //       fileSystemLogRepository,
    //       () => console.log(`${url} is ok`),
    //       ( error ) => console.log(error),
    //     ).execute(url);
    //     // new CheckService().execute('http://localhost:3000');
    //   }
    // );


  }

}
