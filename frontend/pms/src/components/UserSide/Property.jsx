import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  StarIcon,
  HeartIcon,
  WifiIcon,
  HomeIcon,
  TvIcon,
  FireIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Properties() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [properties, setProperties] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get('/property/properties/');
      console.log(response.data);
      setProperties(response.data);
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4">
      {properties?.map((property) => (
        <Card
          key={property.id}
          className={`w-full max-w-[26rem] shadow-lg rounded-lg ${
            isExpanded ? "scale-110 shadow-xl" : ""
          } transition-transform transform-gpu duration-300 ease-in-out`}
          onClick={handleCardClick}
        >
          <CardHeader floated={false} color="blue-gray">
            <img src={property?.image_first} alt="ui/ux review check" />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            <IconButton
              size="sm"
              color="red"
              variant="text"
              className="!absolute top-4 right-4 rounded-full"
            >
              <HeartIcon className="h-6 w-6 text-red-500" />
            </IconButton>
          </CardHeader>
          <CardBody>
            <div className="mb-3 flex items-center justify-between">
              <Typography variant="h5" color="blue-gray" className="font-medium">
                {property?.property_name}
              </Typography>
              <Typography
                color="blue-gray"
                className="flex items-center gap-1.5 font-normal"
              >
                <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-500" />
                5.0
              </Typography>
            </div>
            <Typography color="gray">{property?.description}</Typography>
            <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
              <Tooltip content="$129 per night">
                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                  <BanknotesIcon className="h-5 w-5" />
                </span>
              </Tooltip>
              <Tooltip content="Free wifi">
                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                  <WifiIcon className="h-5 w-5" />
                </span>
              </Tooltip>
              <Tooltip content="2 bedrooms">
                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                  <HomeIcon className="h-5 w-5" />
                </span>
              </Tooltip>
              <Tooltip content={`65" HDTV`}>
                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                  <TvIcon className="h-5 w-5" />
                </span>
              </Tooltip>
              <Tooltip content="Fire alert">
                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                  <FireIcon className="h-5 w-5" />
                </span>
              </Tooltip>
              <Tooltip content="And +20 more">
                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                  +20
                </span>
              </Tooltip>
            </div>
          </CardBody>
          <CardFooter className="pt-3">
            <Link to={`/singleProperties/${property.id}`}>
              <Button
                size="lg"
                fullWidth={true}
                className="bg-blue-500 text-white py-2 px-4 rounded-md font-bold hover:bg-yellow-600 hover:text-white focus:bg-yellow-600 focus:text-white"
              >
                View Property
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
