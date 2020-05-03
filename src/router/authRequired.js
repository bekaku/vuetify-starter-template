import { getCurrentUser } from "../plugins/util";
// import {LocalStorage} from "../plugins/config";

// import AuthService from "../api/AuthService";
// const authService = new AuthService();

export default async (to, from, next) => {
  const userLoged = await getCurrentUser();
  if (userLoged) {
    next();
  } else {
    next("/auth/signin");
  }

  //validate to your api server
  // if (userLoged) {
  //     try {
  //         const data = await authService.checkUserAuthenApi();
  //         if (data.status) {
  //             next()
  //         } else {
  //             localStorage.removeItem(LocalStorage.USER)
  //             next('/authen/login')
  //         }
  //     } catch (error) {
  //         vLog(error.message);
  //     }
  // } else {
  //     next('/authen/login')
  // }
};
