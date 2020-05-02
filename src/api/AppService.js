import Service from './Service';

class AppService extends Service{
    constructor(){
        super();
    }
    async getTestData(){
        return this.callApiGet(`/edrYoutubeMapper`);
    }
}
export default AppService