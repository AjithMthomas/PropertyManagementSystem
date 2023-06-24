import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import login,{ getLocal } from '../Contexts/auth'
import { toast,Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const LoginPage = () => {

    const history = useNavigate();

    useEffect(() => {
      
        const checkLoggedInUser = async () => {

          const localResponse = getLocal('authToken');
    
          if (localResponse) {
            const decoded = jwt_decode(localResponse);
          
            if (decoded.is_admin) {
              history('/AdminDashboard');
          
            } else {
              const location = localStorage.getItem('location');
    
              if (location) {
                history(location, { replace: true });
                localStorage.removeItem('location');
                
              } else {
                history('/', { replace: true });
              }
            }
          } else {
            toast.loading('Please Login into your accout',{duration: 2000});
          }
        };
    
        checkLoggedInUser();
      }, [history]);
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const loginResponse = await login(e);
        console.log(loginResponse, 'login response');
    
        if (loginResponse) {  
          history('/');
          toast.success('Logged in succesfully')
          
        }else{
          toast.error('something went wrong')
        }
         };
    

    return (
        <div className="relative flex flex-row  min-h-screen bg-no-repeat bg-cover place-content-center  justify-items-center overflow-hidden bg-[url('images/login.jpg')] " >
        <Toaster position='top-center' reverseOrder='false' limit={1} ></Toaster>
        
         <div className="w-1/2 p-6 m-auto rounded-md shadow-md lg:max-w-xl  border border-purple-300 ">
                <h1 className="text-3xl font-semibold text-center text-purple-700 ">
                   Sign in
                </h1>
                
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email" name='username'
                            className=" w-5/6 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"  name="password"
                            className="w-5/6  px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <Link to="/forgotPassword"><button className=" text-xs text-purple-600 hover:underline" >Forget Password?</button></Link>
                    <div className="mt-6">
                        <button className="w-5/6 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" type='submit'>
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link to="/Register"><button className=" font-medium text-white-600 hover:underline" >Register</button></Link>
                    
                </p>
            </div>
     </div>
    );
}

export default LoginPage