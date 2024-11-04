import { IPost } from "../interfaces/IPost";


export default class Post implements IPost {
    id: string;

    title: string;

    description: string;

    date: Date;

    author: string;

    category: string;

    constructor(
        id: string,
        title: string,
        description: string,
        date: Date,
        author: string,
        category: string
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.author = author;
        this.category = category;
    }
}
