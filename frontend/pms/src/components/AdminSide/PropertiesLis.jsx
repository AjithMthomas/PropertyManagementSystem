import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { AiFillEdit } from 'react-icons/ai'
import { Button } from "@material-tailwind/react";
import { Toaster } from 'react-hot-toast';
import PropertyCreateForm from './CreateProperty';
import PropertyEdit from  './EditProperty'

function Properties() {
    const [Properties,setProperties] = useState([])
    const [showCreateForm,setShowCreateForm] = useState(false)
    const [showEditProperty,setshowEditProperty] = useState(false)
    const [propertyID,setPropertyID] =  useState('')


    async function getProperties(){
        try{
            const response = await axios.get('/property/properties')
            setProperties(response.data)
        }catch(error){
            console.log('could not fetch data',error)
        }
    }

    const EditProperty = (id)=>{
        setshowEditProperty(true)
        setPropertyID(id)

    }

    useEffect(()=>{
        getProperties()
    },[])
  
    return (
        <div className='flex  bg-acontent mt-3 w-full '>
            <Toaster position='top-center' reverseOrder='false' limit={1} ></Toaster>
            {showEditProperty&&
             <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
             <PropertyEdit id={propertyID}/>
            </div>
            }
            {showCreateForm &&
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                <PropertyCreateForm/>
            </div>
            }
          <div className='px-5 w-full h-auto  mx-5 mt-2  py-8 font-poppins flex flex-col place-content-start place-items-center bg-white shadow-xl rounded-xl'>
            <div className='w-full h-screen px-3 font-poppins'>
            <h1 className='font-serif  text-3xl text-start  underline ms-4'>Property List</h1>  
            <div className="w-full p-5 flex justify-end ">
           <Button variant="outlined " className='py-4  text-grayh border border-blue-300' onClick={()=>setShowCreateForm(true)}>Add Department</Button>
           
        <input
            type="text"
            placeholder='&#x1F50D; Search email or name'
            className="border  border-blue-300 border-solid focus:outline-none px-2 w-1/5 rounded-lg ml-3 "
        />
            </div>
            <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-4 font-large text-gray-900">Property</th>
                    <th scope="col" class="px-6 py-4 font-large text-gray-900">Property Name</th>
                    <th scope="col" class="px-6 py-4 font-large text-gray-900">Owner Name</th>
                    <th scope="col" class="px-6 py-4 font-large text-gray-900">Property Price</th>
                    <th scope="col" class="px-6 py-4 font-large text-gray-900">Contact Number</th>
                    <th scope="col" class="px-6 py-4 font-large text-gray-900">Edit</th>
           
                </tr>
                </thead>
                <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                    {Properties?.map((Property,index)=>
                                <tr class="hover:bg-gray-50" key={index}>
                                <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                <div class="relative h-32 w-44">
                                    <img class="h-full w-full  object-cover object-center" src={Property?.image_first}
                                    alt="avatar"/>
                               
                                </div>
                                {/* <div class="text-sm">
                                    <div class="font-medium text-gray-700">{Property?.property_name}</div>
                                    
                                </div> */}
                                </th>
                                <td class="px-6 py-4">
                                    <p>{Property?.property_name} RS</p>
                                </td>
                                <td class="px-6 py-4">
                                    <p>{Property?.owner_name} RS</p>
                                </td>
                                <td class="px-6 py-4">
                                    <p>{Property?.price} RS</p>
                                </td>
                                <td class="px-6 py-4">
                                    <p>{Property?.phone_number}</p>
                                </td>
                                <td class="px-6 py-4">
                              <AiFillEdit onClick={()=>EditProperty(Property.id)}/>
                               </td>
                              
                            </tr>
                           )}
                </tbody>
            </table>
            </div>
        </div>
        </div>
        </div>
      )
}

export default Properties