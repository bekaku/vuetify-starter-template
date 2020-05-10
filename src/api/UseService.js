import { DefaultAxios, MultipartAxios, AxiosMethod } from "../plugins/config";
import { reactive, toRefs } from "@vue/composition-api";
import useSiteSetting from "@/composition/UseSiteSetting";

export default function(contextRoot) {
  const state = reactive({
    response: null,
    error: null,
    loading: false
  });
  const { currentUser } = useSiteSetting(contextRoot);

  const getDefaultAxios = () => {
    DefaultAxios.defaults.headers.Authorization = currentUser
      ? `Bearer your_jwt_token`
      : "";
    return new Promise(resove => {
      resove(DefaultAxios);
    });
  };
  const getMultipartAxios = () => {
    MultipartAxios.defaults.headers.Authorization = currentUser
      ? `Bearer your_jwt_token`
      : "";
    return new Promise(resove => {
      resove(MultipartAxios);
    });
  };
  const callApiGet = async url => {
    callApi(AxiosMethod.GET, url, null);
  };
  const callApiPost = async (url, postData) => {
    callApi(AxiosMethod.POST, url, postData);
  };
  const callApiPut = async (url, postData) => {
    callApi(AxiosMethod.PUT, url, postData);
  };
  const callApiDelete = async url => {
    callApi(AxiosMethod.DELETE, url, null);
  };

  const callApi = async (method, url, postData) => {
    state.loading = true;
    const axioApi = await getDefaultAxios();
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
      state.loading = false;
    }
  };
  const callApiMultipart = async (url, postData) => {
    state.loading = true;
    const axioApi = await getMultipartAxios();
    try {
      state.response = await axioApi
        .put(url, postData)
        .then(result => result.data);
    } catch (errors) {
      state.error = errors;
    } finally {
      state.loading = false;
    }
  };

  return {
    ...toRefs(state),
    callApiGet,
    callApiPost,
    callApiPut,
    callApiDelete,
    callApiMultipart
  };
}
