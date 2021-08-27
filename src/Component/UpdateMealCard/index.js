
import React from 'react';

function UpdateMealCard({ml, UpdateStock}) {

//Update the name or price
  const updateName = (e) => {
    let value = e.target.value;
    const name = e.target.name;
    if(name=="price"){value = parseInt(value)}
    if (value == '') {alert("Can't be Empty");}
    UpdateStock(parseInt(e.target.id), [name], value)
  };

    return (
        <div 
            className={`bg-white w-60 py-4 px-8  cursor-pointer shadow-lg rounded-lg m-2`}>
                <div>
                    <input  className={`text-xl px-2 font-semibold w-full hover:bg-red-200`} type="text" name="name" id={ml.id} value={ml.name} onChange={updateName}/>
                </div>
                <div className="flex justify-end mt-4">
                    <div href="#" className="flex text-xl font-medium text-red-600">£
                    <input  className={`text-xl font-medium hover:bg-red-200 text-red-600 w-full`} type="number" name="price" id={ml.id} value={ml.price} onChange={updateName}/>
                    </div>
                </div>

                <div className="flex my-2 justify-between">
                    <div className={`text-red-600`}>{ml.stock} Stock</div>
                <div className="flex flex-row ">
                    <div onClick={()=>UpdateStock(ml.id, "stock", ml.stock-1)} className="rounded-sm px-2 mx-1 bg-red-300 hover:bg-red-200 font-extrabold  text-white">-</div>
                    <div onClick={()=>UpdateStock(ml.id, "stock", ml.stock+1)} className="rounded-sm px-2 mx-1 bg-red-500 hover:bg-red-400 font-extrabold text-white">+</div>
                </div>
                </div>
        </div>
    )
}

export default UpdateMealCard
