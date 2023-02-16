export class TaskItem {
  constructor(public title: string) {
  }

  public isDone = false;
  toggleIsDone() {
    this.isDone = !this.isDone;
  }
}
