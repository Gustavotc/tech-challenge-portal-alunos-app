import {
    ICreatePost,
    IPost,
    IPostBody,
    IPostJson,
} from "../../domain/interfaces/IPost";
import Post from "../../domain/models/Post";

export default class PostAdapter {
    toDomain(json: IPostJson): IPost {
        return new Post(
            json.id,
            json.title,
            json.description,
            new Date(json.createAt),
            json.user.name,
            json.category
        );
    }

    toJson(post: ICreatePost): IPostBody {
        return {
            title: post.title,
            category: post.category,
            description: post.description,
            user_id: post.userId,
        };
    }
}
