export class Request {

  public id: string;
  public studentId: string;
  public studentName: string;
  public timeOfCreation: any;
  public type: string;
  public status: string;
  public handleBy: any;

  constructor(
    id: string,
    studentId: string,
    studentName: string,
    timeOfCreation: any,
    type: string,
    status: string,
    handleBy: any
  ) {
    this.id = id;
    this.studentId = studentId;
    this.studentName = studentName;
    this.timeOfCreation = timeOfCreation;
    this.type = type;
    this.status = status;
    this.handleBy = handleBy;
  }
}
