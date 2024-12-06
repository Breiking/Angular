export interface Peticiones {
    error:boolean,
    status:number,
    body: BodyItem[]
}

export interface BodyItem {
    url: string;
    status: number;
    bot: string;
    pageUrl: string;
  }