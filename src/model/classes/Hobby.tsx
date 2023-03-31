export class Hobby{
    id: string;
    categoryIds: string[];
    title: string;
    imageUrl: string;
    characteristics: string[];

    constructor(
        id: string,
        categoryIds: string[],
        title: string,
        imageUrl: string,
        characteristics: string[]
    ){
      this.id = id
      this.categoryIds = categoryIds
      this.title = title
      this.imageUrl = imageUrl
      this.characteristics = characteristics

}
}