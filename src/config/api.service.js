import axios from "axios";

const UNPROTECTED_PATHS = [
  "loginUser",
  "registerUser"
]

axios.defaults.baseURL = 'http://localhost:8080'

axios.interceptors.request.use(
  async config => {
    console.log(config)

    for (let path of UNPROTECTED_PATHS) {
      if (config.url.includes(path)) {
        return config
      }
    }

    let token = localStorage.getItem("ACCESS_TOKEN");
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  async error => {
    throw error;
  },
);

// Redirect to login page in case of 401 response
// axios.interceptors.response.use(
//   async config => {
//     return config;
//   },
//   async error => {
//     if (error.request === undefined) throw error;

//     let url = error.request.responseURL;
//     if (error.request.status === 401 && url.includes("auth") && !url.includes("refresh")) {
//       throw error;
//     }

//     if (error.request.status === 401) {
//       console.log("Session expire, redirect to login");

//       await store.dispatch("LOGOUT");
//       router.push({ path: "/login/" });

//       store.dispatch("SHOW_SNACKBAR", {
//         message: "Session หมดอายุ กรุณาเข้าสู่ระบบใหม่",
//         color: "error",
//       });
//     }

//     throw error;
//   },
// );

export default axios