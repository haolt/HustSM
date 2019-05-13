export class Announcement {

  public id: string;
  public content: string;
  public tags: string[];
  public authorID: string;
  public likesQuantity: number;

  constructor(id: string, content: string, tags: string[], authorID: string, likesQuantity: number) {
    this.id = id;
    this.content = content;
    this.tags = tags;
    this.authorID = authorID;
    this.likesQuantity = likesQuantity;
  }
}
