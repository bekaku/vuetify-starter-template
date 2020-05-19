import Service from './Service';

class UsersService extends Service{
    constructor(){
        super();
    }
    async getUsers(page){
        return this.callApiGet(`/users?page=${page}`);
    }

    async getUserById(id){
        return this.callApiGet(`/users/${id}`);
    }
}
export default UsersService