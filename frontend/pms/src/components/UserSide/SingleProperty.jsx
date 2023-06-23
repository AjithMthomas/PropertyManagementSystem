import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,Rating,
  } from "@material-tailwind/react";
  import React,{useState} from "react";
  import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
  import { AiFillCloseCircle } from 'react-icons/ai';
   
  export default function SingleProperty() {

    const [rated, setRated] = useState(4);
    
    const [showVideo,SetShowVideo] = useState(false)
    return (
      <div className="flex flex-col ">
        
        {showVideo&&
        <>
        <span onClick={()=>SetShowVideo(false)} className="ml-auto text-2xl"> <AiFillCloseCircle/> </span>
          <div className="m-5 ">
          <iframe className="w-full rounded-lg h-screen h-80" src="https://www.youtube.com/embed/ZEJWAiJBRtw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            </>
          }
      <div className=" flex flex-row w-full  place-content-center justify-items-center  ">

      <Card className=" flex flex-row w-3/4  h-2/4 mt-4">
           
        <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
            alt="image" 
            className="w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="blue" className="uppercase mb-4">startups</Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Lyft launching cross-platform service this week
          </Typography>
          <Typography color="gray" className="font-normal mb-8">
            Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story
          </Typography>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              Learn More 
              <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            </Button>
          </a>
          <div className="flex place-content-center justify-items-center mt-4">
          <Rating value={4} onChange={(value) => setRated(value)}  className="text-yellow-500"/>
          <Typography color="blue-gray" className="font-medium">
            {rated}.0 Rated
          </Typography>
          </div>
          <button className="bg-blue-500 text-black  py-2 px-4  rounded-md border-white mt-4 w-1/4" onClick={()=>SetShowVideo(true)}><span>Preview</span></button>
          <button className="bg-yellow-500 text-black py-2 px-4 rounded-md border-black mt-4 ms-3" >Book Property</button>
        </CardBody>
        </Card>
      </div>
      <div className="w-full flex place-content-center justify-items-center ">
      <div className="flex justify-center mt-8 w-3/4">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/1e/e3/50/jw-marriott-hotel-mumbai.jpg?w=1200&h=-1&s=1"
          alt="Image 1"
          className="w-1/4 h-auto mx-2"
        />
        <img
          src="https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/5f5a6e0d12749.jpg/1920x1080/fit/80/86e685af18659ee9ecca35c465603812.jpg"
          alt="Image 2"
          className="w-1/4 h-auto mx-2"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkSGrP-mzZQ8U3ACFyp833Z9ERgOF8oq7PlLD4jyX26WoMg1U-2XVTSp-CYFBsGbWXGxw&usqp=CAU"
          alt="Image 3"
          className="w-1/4 h-auto mx-2"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl9QT5-xocR7GUDg6ggtgSYCVNAY_BVJTUkrSK0Oe1rBV1Grk8tWjUnNUaiqp49OvL8q8&usqp=CAU"
          alt="Image 4"
          className="w-1/4 h-auto mx-2"
        />
      </div>
      </div>
      
      </div>
    );
  }