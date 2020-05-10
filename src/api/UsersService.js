import Service from './Service';

class UsersService extends Service{
    constructor(){
        super();
    }
    async getUsers(){
        return this.callApiGet(`/users?page=1`);
    }

    async getUserById(id){
        return this.callApiGet(`/users/${id}`);
    }
}
export default UsersService