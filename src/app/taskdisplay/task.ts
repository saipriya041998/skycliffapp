export class Task {
  public constructor(
    public Id:string,
    public Title:string,
    public Status:string
  ){}
}
export class TaskResolved{
 constructor(private data:any[],private errormessage:string){}
}
