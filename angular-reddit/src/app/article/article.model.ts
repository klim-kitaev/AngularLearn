export class Article{
    title:string;
    link:string;
    votes:number;

    voteUp():void{
        this.votes+=1;
      }
   
      voteDown():void{
        this.votes-=1;
      }
   
      domain():string{
          try {
                // e.g. http://foo.com/path/to/bar
                const domainAndPath: string = this.link.split('//')[1];
                // e.g. foo.com/path/to/bar
                return domainAndPath.split('/')[0];
          } catch (error) {
              return null;
          }
      }

    constructor(title:string,link:string, votes?:number) {
        this.title=title;
        this.link=link;
        this.votes=votes || 0;
    }
}