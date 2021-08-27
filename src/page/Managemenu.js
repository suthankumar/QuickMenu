import React,{useContext, useState,useEffect}from 'react';
import MenuContext from '../context/MenuContext'; 
import { Link } from "react-router-dom";
import Header from '../Component/Header';
import UpdateMealCard from '../Component/UpdateMealCard';
import CourseTab from '../Component/CourseTab';


export default function Managemenu() {
    const [selectedCourse, setSelectedCourse] = useState("mains");
    const {menu, setMenu} = useContext(MenuContext)

    const UpdateStock=(id,key, val)=>{
        setMenu({...menu, [selectedCourse]: menu[selectedCourse]
            .map(y =>  y.id === id ? {...y, [key]:val}: y)})
    }

    const addMeal=(id,key, val)=>{
        setMenu({...menu, [selectedCourse]: [...menu[selectedCourse], {id:Date.now(), name:"new", price:77, stock:0} ]})
    }



    return (
        <div  className ="h-screen">
       <Header/>
        <div>
            <Link to="/" className = "mx-14 mt-5 flex hover:text-red-500 align">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                </svg>
                <div className= "text-gray-400 mx-2 flex self-center">Back</div>
            </Link>
            
            <div className="container mx-auto m-10 px-12 h-full">
            <div className="grid grid-cols gap-4 h-full">
                    <div className="col-span-2 bg-red-50 p-3 rounded-md ">    
                        <div className="flex space-x-4 ">
                            <h1  className="flex-auto text-2xl font-semibold p-3">
                                Menu
                            </h1>
                            <div className="flex">  
                            <button onClick={()=>addMeal()}  className="flex items-center justify-center px-2 rounded-md font-semibold text-white bg-red-600 hover:bg-white hover:text-red-600">
                                + Add New Meal
                            </button> 
                            </div>
                        </div>

                        <CourseTab menu={menu} selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse}/>
                        <div className="overflow-y-auto menubox">
                           <div className="flex flex-wrap p-6 max-w-7xl justify-start ">
                                {menu[selectedCourse].map((fd,i)=>{
                                    return <UpdateMealCard  UpdateStock={UpdateStock}key ={i} selectedCourse ={selectedCourse} ml = {fd}/>
                                }) }

                        </div> 
                        </div>
                        
                    </div>
                    
            </div>       
    </div>
    </div>
        
    </div>)
}
