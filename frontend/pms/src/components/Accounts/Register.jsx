import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, Toaster } from 'react-hot-toast';
import PageLoader from './PageLoader';
import * as Yup from 'yup';
import { BASE_URL } from '../config';

const validationSchema = Yup.object({
  username: Yup.string().min(6).required('Username is required.'),
  email: Yup.string().email('Invalid email').required('Email is required.'),
  phone_number: Yup.string().min(10).required('Phone number is required.'),
  password: Yup.string()
    .required('Password is required.')
    .min(8)
    .matches(/^(?=.*[a-zA-Z])/, 'Password must contain at least one letter.')
    .matches(/^(?=.*[0-9])/, 'Password must contain at least one number.')
    .matches(/^(?=.*[!@#$%^&*])/, 'Password must contain at least one special character.'),
  confirm_pass: Yup.string()
    .required('Confirm your password.')
    .oneOf([Yup.ref('password')], 'Passwords must match.'),
});

function SignUp() {
  const [isLoading, setIsLoading] = useState(true);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    // Simulate an asynchronous task
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/account/register/`, data);
      console.log(response);
      if (response.status) {
        toast.success('Registration successful! Check your email to activate your account', { duration: 3000 });
        reset(); 
      } else {
        toast.error('Something went wrong');
      }
    } catch (error) {
      toast.error('An error occurred while registering');
      console.error(error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="relative flex flex-row min-h-screen bg-no-repeat bg-cover justify-end overflow-hidden bg-[url('images/login.jpg')]">
          <Toaster position="top-center" reverseOrder={false} />
          <h1 className="ps-6 pt-4 text-xl font-bold">MEDIcare</h1>
          <div className="w-1/2 p-6 m-auto rounded-md shadow-md lg:max-w-xl border border-purple-100">
            <h1 className="text-3xl font-semibold text-center text-purple-700">Register</h1>
            <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                <label htmlFor="username" className="block text-sm font-semibold text-gray-800">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  {...register('username')}
                  className="w-3/4 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <div className="w-3/4 ms-16">
                  {errors.username && <div className="text-red-500 text-start">{errors.username.message}</div>}
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  {...register('email')}
                  className="w-3/4 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <div className="w-3/4 ms-16">
                  {errors.email && <div className="text-red-500 text-start">{errors.email.message}</div>}
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="phone_number" className="block text-sm font-semibold text-gray-800">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone_number"
                  {...register('phone_number')}
                  className="w-3/4 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <div className="w-3/4 ms-16">
                  {errors.phone_number && <div className="text-red-500 text-start">{errors.phone_number.message}</div>}
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  {...register('password')}
                  className="w-3/4 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <div className="w-3/4 ms-16">
                  {errors.password && <div className="text-red-500 text-start">{errors.password.message}</div>}
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="confirm_pass" className="block text-sm font-semibold text-gray-800">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirm_pass"
                  {...register('confirm_pass')}
                  className="w-3/4 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <div className="w-3/4 ms-16">
                  {errors.confirm_pass && <div className="text-red-500 text-start">{errors.confirm_pass.message}</div>}
                </div>
              </div>
              <div className="mt-6">
                <button className="w-80 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                  Register
                </button>
              </div>
            </form>
            <p className="mt-8 text-xs font-light text-center text-gray-700">
              Have an account?{" "}
              <Link to="/login">
                <button className="font-medium text-purple-600 hover:underline">Login</button>
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;
