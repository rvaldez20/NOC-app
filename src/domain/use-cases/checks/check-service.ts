
interface CheckServiceUseCase {
  execute( url: string ):Promise<boolean>;
}


type SuccesCallback = () => void;
type ErrorCallback = ( error: string ) => void;

export class CheckService implements CheckServiceUseCase {

  constructor(
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

      this.succesCallback();
      // console.log(`${url} is ok`)
      return true;

    } catch (error) {

      console.log(`${error}`);
      this.errorCallback(`${error}`)

      return false;
    }


  }

}
