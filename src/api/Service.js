import { DefaultAxios, MultipartAxios, AxiosMethod } from "../plugins/config";
import { getCurrentUser, vConsole, isJson } from "../plugins/util";
export default class Service {
  constructor() { }
  async getUserTokenKey() {
    const currentUser = await getCurrentUser();
    return new Promise(resove => {
      // resove(currentUser ? `Bearer ${currentUser.userData.api_key}` : '');
      resove(currentUser ? `Bearer your_jwt_token` : "");
    });
  }

  async getDefaultAxios() {
    DefaultAxios.defaults.headers.Authorization = await this.getUserTokenKey();
    return new Promise(resove => {
      resove(DefaultAxios);
    });
  }
  async getMultipartAxios() {
    MultipartAxios.defaults.headers.Authorization = await this.getUserTokenKey();
    return new Promise(resove => {
      resove(MultipartAxios);
    });
  }

  async callApiGet(url) {
    return this.callApi(AxiosMethod.GET, url, null);
  }
  async callApiPost(url, postData) {
    return this.callApi(AxiosMethod.POST, url, postData);
  }
  async callApiPut(url, postData) {
    return this.callApi(AxiosMethod.PUT, url, postData);
  }
  async callApiDelete(url) {
    return this.callApi(AxiosMethod.DELETE, url, null);
  }

  async callApi(method, url, postData) {
    const axioApi = await this.getDefaultAxios();
    // vLog(axioApi.defaults.baseURL + url)
    // vLog('jwt : '+axioApi.defaults.headers.Authorization);
    const state = {
      response: null,
      error: null
    };
    try {
      switch (method) {
        case AxiosMethod.POST:
          state.response = await axioApi
            .post(url, postData)
            .then(result => result.data);
          break;
        case AxiosMethod.PUT:
          state.response = await axioApi
            .put(url, postData)
            .then(result => result.data);
          break;
        case AxiosMethod.DELETE:
          state.response = await axioApi
            .delete(url)
            .then(result => result.data);
          break;
        default:
          state.response = await axioApi.get(url).then(result => result.data);
          break;
      }
    } catch (errors) {
      state.error = errors;
    } finally {
      //validate is json format
      this.validateJson(url, state.response);
    }

    return new Promise(resove => {
      resove(state);
    });
  }
  // async callApi(method, url, postData) {
  //     const axioApi = await this.getDefaultAxios();
  //     // vLog(axioApi.defaults.baseURL + url)
  //     // vLog('jwt : '+axioApi.defaults.headers.Authorization);
  //     let data = null;
  //     switch (method) {
  //         case AxiosMethod.POST:
  //             data = await axioApi.post(url, postData).then(result => result.data);
  //             break;
  //         case AxiosMethod.PUT:
  //             data = await axioApi.put(url, postData).then(result => result.data);
  //             break;
  //         case AxiosMethod.DELETE:
  //             data = await axioApi.delete(url).then(result => result.data);
  //             break;
  //         default:
  //             data = await axioApi.get(url).then(result => result.data);
  //             break;
  //     }

  //     //validate is json format
  //     this.validateJson(url, data)
  //     return new Promise(resove => {
  //         resove(data);
  //     })
  // }
  async callApiMultipart(url, postData) {
    const axioApi = await this.getMultipartAxios();
    const data = await axioApi.post(url, postData).then(result => result.data);
    this.validateJson(url, data);
    return new Promise(resove => {
      resove(data);
    });
  }

  validateJson(url, data) {
    if (!isJson(data)) {
      vConsole(data, "error", `Service.js-> ${url}`);
    }
  }
}
