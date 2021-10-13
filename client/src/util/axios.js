import axios from "axios";
const axiosApiInstance = axios.create();
axiosApiInstance.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axiosApiInstance.defaults.headers.post["Content-Type"] = "application/json";


//every time a request is made, this function is called
axiosApiInstance.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${window.localStorage.getItem(
            "token"
        )}`;
        console.log(
            "a request has been made and we added following token: ",
            window.localStorage.getItem("token")
        );
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
axiosApiInstance.interceptors.response.use(
    (config) => {
        return config;
    },
    (error) => {
        console.log("the error is: ", error.response);
        if (error.response.status === 401) {
            console.log("we hit 401, token must not be valid.");
            // window.location = "/logout";
        }
        return Promise.reject(error);
    }
);
// # DB_USER=friendja
// # DB_PASS=friend123
// # DB_HOST=cluster0.eiqqj.mongodb.net
// # DB_NAME=FriendJa
export default axiosApiInstance;