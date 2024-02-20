import fs from 'fs'
import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";



export class FileSystemDatSource implements LogDataSource {

  private readonly logPath = 'logs/'
  private readonly allLogsPath    = 'logs/logs-all.log';
  private readonly mediumLogsPath = 'logs/logs-medium.log';
  private readonly highLogsPath  = 'logs/logs-high.log';

  constructor() {
    this.createLogsFiles();
  }

  private createLogsFiles = () => {
    if(!fs.existsSync( this.logPath )) {
      fs.mkdirSync( this.logPath );
    }

    // Se barre el array con los difernetes file level, si no existen los crea,
    [
      this.allLogsPath,
      this.mediumLogsPath,
      this.highLogsPath,
    ].forEach( path => {
      if(fs.existsSync( path )) return;
      fs.writeFileSync( path, '' );
    });
  }


  // methods that implements for de abstract class
  async saveLog(newLog: LogEntity): Promise<void> {
    const logAsJson = `${ JSON.stringify(newLog) }\n`;

    fs.appendFileSync(this.allLogsPath, logAsJson);

    if(newLog.level === LogSeverityLevel.low) return;

    if(newLog.level === LogSeverityLevel.medium) {
      fs.appendFileSync(this.mediumLogsPath, logAsJson);
    } else {
      fs.appendFileSync(this.highLogsPath, logAsJson)
    }

  }


  getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    throw new Error("Method not implemented.");
  }

}
