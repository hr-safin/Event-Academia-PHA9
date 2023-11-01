import axios from "axios";
import React, { useContext, useEffect } from "react";
import { AuthProvider } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const UseAxiosSecure = () => {
  const { logOut } = useContext(AuthProvider);
  const navigate = useNavigate()

//   useEffect(() => {
//     axiosSecure.interceptors.response.use(
//       (res) => {
//         return res;
//       },
//       (error) => {
//         console.log("Error tracked in interceptors", error.response);
//         // if (error.response.status === 401 || error.response.status === 403) {
//         //   console.log("logout the user");
//         //   logOut()
//         //     .then(() => {
//         //     //   window.location.reload();
            
//         //         navigate('/login')
              
//         //     })
//         //     .catch();
//         // }
//       }
//     );
//   }, []);
  return axiosSecure;
};

export default UseAxiosSecure;
