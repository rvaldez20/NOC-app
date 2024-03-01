
export enum LogSeverityLevel {
  low    = 'low',
  medium = 'medium',
  high   = 'high',
}

export interface LogEntityOptions {
  message: string;
  level: LogSeverityLevel;
  origin: string;
  createAt?: Date;
}


export class LogEntity {

  public level: LogSeverityLevel;  //Enum
  public message: string;
  public createAt: Date;
  public origin: string;

  //message: string, level: LogSeverityLevel, origin: string
  constructor( options:LogEntityOptions ) {
    const {message, level, origin, createAt = new Date()} = options;
    this.message = message;
    this.level = level;
    this.createAt = createAt;
    this.origin = origin;
  }

  static fromJson = (json: string):LogEntity => {
    const {message, level, createAt, origin} = JSON.parse(json);

    const log = new LogEntity({
      message: message,
      level: level,
      createAt: createAt,
      origin: origin,
      // origin: 'log.entity.ts',
    });
    // log.createAt = new Date(createAt);

    return log;
  }


  static fromObject = ( object: {[key: string]: any} ):LogEntity => {
    const { message, level, origin, createAt } = object;
    const log = new LogEntity({
      message, level, origin, createAt
    });

    return log;
  }

}
