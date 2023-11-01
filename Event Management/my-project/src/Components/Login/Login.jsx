import React, { useContext, useState } from 'react';
import { AiFillGithub } from "react-icons/ai";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../AuthContext/AuthContext';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {

  const {logIn, setUser,signInWithGoogle} = useContext(AuthProvider)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const navigate = useNavigate()
  const location = useLocation()


  const handleGoogle = () => {
    signInWithGoogle()
    .then((result) => {
      console.log(result.user)
      navigate(location.state ? location.state : "/")
    })
    .catch(error => console.log(error.message))
  }

  const handleLogIn = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")

        logIn(email, password)
        .then((result) => {
          console.log(result.user)
          // setUser(result.user)
          // setSuccess("Login Successful")
          toast.success("Login Successful", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            navigate(location.state ? location.state : "/")
          },2000)
          
        })
        .catch(error => setError("password or email do not match"))
  }
    return (
        <div className='pt-20 bg-white text-gray-800 dark:bg-slate-900'>
            <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full  dark:bg-slate-900 rounded-lg border dark:border dark:border-gray-700  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-2xl dark:text-gray-400 md:text-3xl font-bold leading-tight tracking-tight   ">
                Login to your account
              </h1>
              <form onSubmit={handleLogIn}  className="space-y-4 md:space-y-6" >
                <div>
                  <label
                    for="email"
                    className="block dark:text-gray-400 mb-2 text-sm font-medium  "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  text-gray-700 dark:text-gray-400 dark:bg-slate-800 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block dark:text-gray-400 mb-2 text-sm font-medium  "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-gray-700 dark:text-gray-400 dark:bg-slate-800 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                {error && <div className=' text-red-600'>{error}</div>}
                {success && <div className=' text-green-700'>{success}</div>}
                <ToastContainer />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 dark:text-gray-400 h-4 border 
                        ring-offset-gray-300 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label for="remember" className="text-gray-700 dark:text-gray-400 ">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm dark:text-gray-400 font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base bg-indigo-700 hover:bg-indigo-600 px-5 py-2.5 text-center dark:bg-primary-600  dark:focus:ring-primary-800"
                >
                  Log in
                </button>
                <div className="mt-1 space-y-3 lg:py-1">
                  <button
                    onClick={handleGoogle}
                    type="button"
                    className=" inline-flex w-full items-center justify-center rounded-md border  text-gray-700 dark:text-gray-400 dark:bg-slate-800 dark:border-gray-700 border-gray-400 bg-white px-3.5 py-2.5 font-semibold transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                  >
                    <span className="mr-2 inline-block">
                      <svg
                        className="h-6 w-6 text-rose-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                      </svg>
                    </span>
                    Login with Google
                  </button>
                  
                </div>
                <p className="text-sm font-light text-gray-600 ">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/register"
                    className="font-medium dark:text-gray-400 text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Login;