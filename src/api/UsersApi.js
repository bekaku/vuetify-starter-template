import { toRefs, reactive } from "@vue/composition-api";
import service from "./UseService";
export default function(root) {
  let state = reactive({ response: null, error: null, loading: false });
  const { response, error, loading, callApiGet } = service(root);

  const getUsers = async (page=1) => {
    callApiGet(`/users?page=${page}`);
    state.response = response;
    state.error = error;
    state.loading = loading;
  };
  const getUserSingle = async (id) => {
    callApiGet(`/users/${id}`);
    state.response = response;
    state.error = error;
    state.loading = loading;
  };


  return { ...toRefs(state), getUsers, getUserSingle };
}
