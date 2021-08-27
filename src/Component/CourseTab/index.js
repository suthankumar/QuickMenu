
import React from 'react';

function CourseTab({ menu,setSelectedCourse, selectedCourse }) {
    //lisenter when selected differnt tab menu at the top
    const onChangeTab=(course)=>{
        if (selectedCourse != course){
            setSelectedCourse(course)
        } 
    }

    return (
        <div className="flex flex-row px-3">
                        {Object.keys(menu).map((val, i)=>{
                                return  <button id = {val} key = {i}className={`${val === selectedCourse ? "bg-red-500":"bg-red-200"} px-3 mr-2 rounded-full hover:bg-red-500  text-white flex items-center 
                                justify-center text-xl`} onClick={()=>onChangeTab(val)} >{val} </button>
                        }) }
                        </div>
    )
}

export default CourseTab
