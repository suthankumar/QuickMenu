
import React from 'react';

function MealCard({ml,selectedCourse, selectedDine, order, setOrder}) {

    //On user select any meal of the course
    const onSelect=(id, unavalible)=>{
        if(!unavalible) {
            let list = order.list[selectedDine]?.meal;
          let index = list.findIndex(m=> m.course == selectedCourse)
          if (index != -1){list[index].selected = id
          }else{list.push({course:selectedCourse,selected: id})}
  
          setOrder({...order, list:order.list.map(
                  (x,i) => i == selectedDine 
                  ? {...x, list} : x) })
        }
    }

    return (
        <div id ={ml.name} onClick={()=>onSelect(ml.id ,(ml.stock <= 0 || ml.allow==false ) )} 
            className={`${order.list[selectedDine]?.meal.filter(f=> f.course == selectedCourse)[0]?.selected == ml.id ? 'bg-red-200 border-2 border-red-500':'bg-white'} w-60 py-4 px-8 
            ${ml.stock <= 0 || ml.allow==false ?"opacity-70":'hover:bg-red-200 cursor-pointer'}    shadow-lg rounded-lg m-2`}>
                <div>
                    <h2 className={`text-xl font-semibold`}>{ml.name}</h2>
                </div>
                <div className="flex justify-end mt-4">
                    <div href="#" className="text-xl font-medium text-red-600">£{ml.price}</div>
                </div>
                <div className={`${ml.stock <= 0 || ml.allow==false ?"text-red-600":'text-gray-400'}`}>{ `${ml.stock == 0 ? `Out of Stock` : (ml.allow==false ? 'Not allowed to choose':`${ml.stock} Avaliable`)}`}</div>
        </div>
    )
}

export default MealCard
