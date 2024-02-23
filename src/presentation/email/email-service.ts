import nodemailer from 'nodemailer'
import { envs } from '../../config/plugins/envs.plugin'


interface SendEmailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachments?: Attachment[];
}

interface Attachment {
  filename: string;
  path: string;
}


export class EmailService {

  private transporter = nodemailer.createTransport({
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    }
  });

  async sendEmail(options: SendEmailOptions):Promise<boolean> {
    const { to, subject, htmlBody, attachments = [] } = options;

    try {

      const sentInformation = await this.transporter.sendMail({
        to: to,
        subject: subject,
        html: htmlBody,
        attachments: attachments,
      });

      console.log(sentInformation);

      return true;
    } catch (error) {

      return false;
    }
  }


  async sendEmailWithFileSystemLogs( to: string | string[] ){

    const subject = 'Logs del Servidor';
    const htmlBody = `
      <h3>Logs de Sistema - NOC</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim pharetra enim vel tristique. Curabitur luctus vulputate diam, sed dictum magna scelerisque ut. Donec luctus quis neque quis vulputate. Vestibulum interdum nunc sed tellus venenatis, a aliquet nibh molestie. In hac habitasse platea dictumst. Vivamus sed accumsan nibh. Vestibulum ut efficitur orci, sed varius turpis. Suspendisse sit amet tincidunt tortor. Ut eget odio sit amet lacus sodales mollis sit amet ac purus. Sed a malesuada nisi. Etiam eu molestie enim. Pellentesque nec odio in dui fringilla commodo vel vel metus. Nunc id ligula scelerisque, feugiat lacus nec, venenatis ligula. Duis elementum sodales aliquet. Quisque mi ligula, pharetra eu elementum ut, congue sit amet erat. Maecenas blandit urna a ultricies placerat.</p>
      <p>Ver logs adjuntos</p>
    `;
  const attachments: Attachment[] = [
    { filename: 'logs-all.log', path: './logs/logs-all.log' },
    { filename: 'logs-medium.log', path: './logs/logs-medium.log' },
    { filename: 'logs-high.log', path: './logs/logs-high.log' },
  ];

  return this.sendEmail({to, subject, attachments, htmlBody});

  }


}
