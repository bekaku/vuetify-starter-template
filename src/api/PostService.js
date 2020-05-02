import Service from './Service';

class PostService extends Service{
    constructor(){
        super();
    }
    async getPosts(){
        return this.callApiGet(`/posts`);
    }
}
export default PostService