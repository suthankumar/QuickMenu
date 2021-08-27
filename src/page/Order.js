import React,{useContext, useState,useEffect}from 'react';
import MenuContext from '../context/MenuContext'; 
import MealCard from '../Component/MealCard';
import { Link } from "react-router-dom";
import Header from '../Component/Header';
import CartList from '../Component/CartList';
import CourseTab from '../Component/CourseTab';

export default function Order() {
    const ctx = useContext(MenuContext)
    const [menu, setMenu] = useState(JSON.parse(JSON.stringify(ctx.menu)));
    const [selectedCourse, setSelectedCourse] = useState("mains");
    const [selectedDine, setSelectedDine] = useState(0);
    const [order, setOrder] = useState({totalCost:0, paid:false, list:[{
                meal: [{
                    course:"mains",
                    selected: 5
                }
            ]
            }
        ]});

    //Everytime order list changed,  this "useeffect" will run to calculate total and udpate stock level
    useEffect(()=>{
        let sum = 0;
        let stockTaken = order.list.reduce(function (hash) {
             return function (r, s) {
              s.meal.map(h=>{
                  if (!hash[h.course]) {
                    hash[h.course] = {course:h.course, id:{} };
                    r.push(hash[h.course]);
                }   
                //hash[h.course].id.push(h.selected);
                hash[h.course].id[h.selected] = (hash[h.course].id[h.selected] || 0) + 1
                sum += menu[h.course].filter(g=> g.id ==h.selected)[0]?.price
              })
                return r;
            };
          }(Object.create(null)), []);
        
       
        let tempList = menu;
        stockTaken.forEach(e => {let updatedMeal = [];
            for (const [key, value] of Object.entries(e.id)) {
                // console.log(`${key} - ${value} used`)
                menu[e.course].map((o,i)=>{
                    let orgStock = ctx.menu[e.course][i].stock,
                    meal = tempList[e.course][i];
                        o.id == key ? (meal.stock = orgStock - value, updatedMeal.push(o.id)) : 
                        !updatedMeal.includes(o.id) ? (meal.stock = orgStock):null;
                })
              }
        });

        let curtDiner = order.list[selectedDine].meal,
        salmonFltIndex = menu["mains"].findIndex(h=>h.name == "Salmon fillet"),
        prawnIndex = menu["starters"].findIndex(h=>h.name == "Prawn cocktail"),
        prawn = tempList["starters"][prawnIndex],
        salmonFlt = tempList["mains"][salmonFltIndex];
        if (prawnIndex != -1 && salmonFltIndex !=-1){
            if(curtDiner?.filter(m=>m.course=="mains")[0]?.selected == menu["mains"][salmonFltIndex]?.id){//7
            prawn.allow = false;salmonFlt.allow = true
            }else if (curtDiner?.filter(m=>m.course=="starters")[0]?.selected == menu["starters"][prawnIndex]?.id){//4
                prawn.allow = true;salmonFlt.allow = false
            }
            else{
                prawn.allow = true;salmonFlt.allow = true 
        }
        }
        //Set all the update to the state
        setOrder({...order, totalCost: sum})
        setMenu({...tempList})
    },[order.list])

    //Validate the current diner, make sure the user must selected meal from main course and other one or more courses 
    const ValidateDinerMeal=()=>{
        if(order.list[selectedDine]?.meal.some(g=> g.course =="mains") && order.list[selectedDine].meal.length >=2){
            return true
        }
        else{
            alert("Please select aleast 2 course for current diner- one course should be main ")
            return false
        }
    }

    const UpdateOrderList=(id, del)=>{
        let list = [...order.list];
        //To delete the selected diner
        if(id != null && del){ console.log(`${selectedDine} = = ${id}`)
            list = list.filter((g,i)=> i !=id)
            setOrder({...order, list: list})
            setSelectedDine(list.length-1)
        }
        //To Edit the selected diner
        else if(id != null && !del){ 
            if(ValidateDinerMeal()) {setSelectedDine(id)}
        }
        //set that new diner to add meal
        else{
            if(ValidateDinerMeal()) { 
                list.push({meal: []})
                setOrder({...order, list: list})
                setSelectedDine(list.length-1)
            }
        }
    }

    const pay=()=>{
        if(ValidateDinerMeal()) {
            ctx.setMenu({...menu}); 
            setOrder({...order, paid: true}) }
    }

    return (
        <div  className ="h-screen">
       <Header/> 
       {order.paid && <div className="mx-auto m-10 px-12  flex h-full justify-center">
                        <div className="flex flex-col ">
                            <h1 className="flex text-2xl text-red-600 font-semibold p-3">
                                Thank you for your order!
                            </h1>
                             <Link to="/" className = "mx-14 mt-5 flex text-red-400 hover:text-red-500 align">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                                </svg>
                                <div className= "text-gray-400 mx-2 text-s flex self-center">Back to Homepage</div>
                            </Link>
                        </div>
                        </div>}

        {!order.paid && 
        <div>
            <Link to="/" className = "mx-14 mt-5 flex hover:text-red-500 align">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                </svg>
                <div className= "text-gray-400 mx-2 flex self-center">Cancel</div>
            </Link>
            
            <div className="container mx-auto m-10 px-12">
            <div className="grid grid-cols-3 gap-4 ">
                    <div className="col-span-2 bg-red-50 p-3 rounded-md ">    
                        <div className="flex space-x-4 ">
                            <h1 className="flex-auto text-2xl font-semibold p-3">
                                Menu
                            </h1>
                        </div>
                        <CourseTab menu={menu} selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse}/>
                        <div className="my-2 menubox overflow-y-scroll ">
                            <div className="flex flex-wrap p-6 max-w-7xl justify-start">
                                    {menu[selectedCourse].map((fd,i)=>{
                                        return <MealCard  key ={i} setOrder={setOrder} selectedDine={selectedDine} 
                                        selectedCourse ={selectedCourse} order={order} ml = {fd}/>
                                    }) }

                            </div>
                        </div>
                    </div>
                    <div className="bg-red-700 p-3 rounded-md relative">
                           <div className="flex space-x-4 ">
                            <div className="flex-1 ">
                            <h1 className="flex-auto text-xl text-white font-semibold p-3">
                                 Your Order
                            </h1> </div>
                            <div className="flex">  
                            <button onClick={()=>UpdateOrderList()}  className="flex items-center justify-center px-2 rounded-md font-semibold text-white bg-red-600 hover:bg-white hover:text-red-600">
                                + Add New diner
                            </button> 
                            </div>
                        </div>
                    
                    <div className="px-3 menubox">
                        <div className="flex  justify-center h-full">
                                <div className=" shadow-xl w-full my-2 overflow-y-auto h-5/6">
                                        {order.list.map((o, i)=>{
                                        return <CartList o ={o} selectedDine={selectedDine} order={order} UpdateOrderList={UpdateOrderList} menu={menu} idx={i} key = {i}/>})}
                                </div>
                                
                                </div>
                    </div><div className="absolute bottom-10 right-0 p-4 justify-center flex w-full bg-opacity-90 ">
                                        <button onClick={()=>pay()}  className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                                            hover:bg-red-700 hover:text-red-100 
                                            bg-red-600 
                                            text-white 
                                            border duration-200 ease-in-out 
                                            border-teal-600 ">Order and Pay £{order.totalCost}</button>
                                    </div>
                </div>
            </div>       
    </div>
    </div>}
        
    </div>)
}
