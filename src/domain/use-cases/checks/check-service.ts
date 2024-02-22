import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface CheckServiceUseCase {
  execute( url: string ):Promise<boolean>;
}


type SuccesCallback = () => void;
type ErrorCallback = ( error: string ) => void;

export class CheckService implements CheckServiceUseCase {

  constructor(
    private readonly logRepository: LogRepository,
    private readonly succesCallback: SuccesCallback,
    private readonly errorCallback: ErrorCallback,
  ) {}

  public async execute( url: string ): Promise<boolean> {

    try {
      const req = await fetch(url);
      //* si la peticion falla
      if ( !req.ok ) {
        throw new Error(`Error on check service ${ url }`);
      }

      // si todo esta bien podemos grabar el log
      const log = new LogEntity(`Service ${ url } working`, LogSeverityLevel.low);
      this.logRepository.saveLog(log);

      this.succesCallback();
      // console.log(`${url} is ok`)
      return true;

    } catch (error) {

      // console.log(`${error}`);

      // si algo sale mal y no se pudo grabar
      const errorMessage = `${ error }`;
      const log = new LogEntity( errorMessage, LogSeverityLevel.low );
      this.logRepository.saveLog(log);

      this.errorCallback(errorMessage);

      return false;
    }


  }

}
