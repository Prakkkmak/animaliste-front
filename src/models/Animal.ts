export default class Animal {
  public id: string = "";

  public name: string = "";

  public specie: string = "";

  public sex: boolean = true;

  public registerDate: Date = new Date();

  public race: string | undefined;

  public chip: string | undefined;

  public tattoo: string | undefined;

  public description: string | undefined;

  public likes: string | undefined;

  public dislikes: string | undefined;

  public vaccines: string | undefined;

  public nutrition: string | undefined;

  public origin: string | undefined;

  [key: string]: any;
}
