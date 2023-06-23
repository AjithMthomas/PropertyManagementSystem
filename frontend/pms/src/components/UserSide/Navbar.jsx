import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { getLocal } from '../Contexts/auth'


 
export default function NavbarComponent() {
  const [openNav, setOpenNav] = useState(false);


  const localResponse = getLocal('authToken');

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);
 
  const navList = (
    <ul className="bg-nav mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6  text-black  text-bold " >
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
       <Link to='/properties'> <a href="#" className="flex items-center  hover:text-blue-500 ">
          Properties
        </a></Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center  hover:text-blue-500">
          Blogs
        </a>
      </Typography>
      <Link to=''><Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center  hover:text-blue-500">
          Communities
        </a>
      </Typography></Link>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center hover:bg-blue-500 ">
          Docs
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <>
    <Navbar className="sticky bg-nav  lg:px-8 lg:py-4  top-0 z-50  bg-white">
      <Toaster position='top-center' reverseOrder='false' limit={1} ></Toaster>
        <div className="bg-nav container  flex items-center justify-between text-blue-gray-900 text-black">
      <Link to='/'> <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-bold text-xl"
        >
          PropertyPro
        </Typography></Link> 
        <div className="hidden lg:block">{navList}</div>
        <Link to="/login"><Button variant="gradient" size="sm" className="hidden lg:inline-block  hover:bg-blue-500">
          {localResponse?(<span className=" text-black ">Dashboard</span>):
          (<span className=" text-black ">Login</span>)}
        </Button></Link>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto ">
          {navList}
          <Link to="/login"><Button variant="gradient" size="sm" fullWidth className="mb-2  ">
            <span className=" text-black ">Login</span>
          </Button></Link>
        </div>
      </MobileNav>
    </Navbar>
    </>
  );
}