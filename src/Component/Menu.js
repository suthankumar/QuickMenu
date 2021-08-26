import React,{useContext, useState,useEffect}from 'react';
import MenuContext from '../context/MenuContext'; 


export default function Menu() {
    const ctx = useContext(MenuContext)
    const [menu, setMenu] = useState(JSON.parse(JSON.stringify(ctx.menu)));
    const [selectedCourse, setSelectedCourse] = useState("mains");
    const [selectedDine, setSelectedDine] = useState(1);
    const [order, setOrder] = useState([{
        meal: [{
            course:"mains",
            selected: 5
        },
        {
            course:"starters",
            selected: 1
        },
    ]
    },{
        meal: [{
            course:"mains",
            selected: 6
        },
        {
            course:"starters",
            selected: 1
        },
    ]
    }]);
console.log(order)

    const onChangeTab=(course)=>{
        if (selectedCourse != course){
            setSelectedCourse(course)
        } 
    }

    useEffect(()=>{
        let stockTaken = order.reduce(function (hash) {
            return function (r, s) {
              s.meal.map(h=>{
                  if (!hash[h.course]) {
                    hash[h.course] = {course:h.course, id:{} };
                    r.push(hash[h.course]);
                }   
                //hash[h.course].id.push(h.selected);
              hash[h.course].id[h.selected] = (hash[h.course].id[h.selected] || 0) + 1
              })
                return r;
            };
          }(Object.create(null)), []);


        //   let total = order.map(f=> f.meal.map(h=>menu[h.course].filter(g=> g.id ==h.selected)[0]?.price))
        //   total = [].concat.apply([], total).reduce((prev, next) => prev + next);


        let tempList = menu;
        stockTaken.forEach(e => {let updatedMeal = [];
            for (const [key, value] of Object.entries(e.id)) {
                // console.log(`${key} - ${value} used`)
                menu[e.course].map((o,i)=>{
                    let orgStock = ctx.menu[e.course][i].stock,
                    meal = tempList[e.course][i];
                        //  if(o.id == key){
                        //     console.log(`${o.id} - ${key} match  ${orgStock -value}` )
                        //     tempList[e.course][i].stock =  orgStock - value;
                        //     updatedMeal.push(o.id)
                        // }
                        // else if (!updatedMeal.includes(o.id)){
                        //     console.log(`${o.id} - ${key} --not match ${orgStock}`  )
                        //     tempList[e.course][i].stock= orgStock
                        // }
                    //console.log(updatedMeal)
                        o.id == key ? (meal.stock = orgStock - value, updatedMeal.push(o.id)) : 
                        !updatedMeal.includes(o.id) ? (meal.stock = orgStock):null;
                })
              }
        });
        setMenu({...tempList})
    },[order])

    //On user select any meal of the course
    const onSelect=(id, unavalible)=>{
      if(!unavalible) {
          let list = order[selectedDine]?.meal;
        let index = list.findIndex(m=> m.course == selectedCourse)
        if (index != -1){list[index].selected = id
        }else{list.push({course:selectedCourse,selected: id})}

        setOrder(list => list.map(
                (x,i) => i == selectedDine 
                ? {...x, list} : x))
      }
        
        // setOrder(list => list.map(
        //     (x,i) => i == selectedDine 
        //     ? {...x, meal : x.meal.map(y =>  y.course === selectedCourse 
        //     ? {...y, selected:id} : y)} : x))
    }

    const UpdateOrderList=(id)=>{
        let list = [...order];
        if(id != null){
            list = order.filter((g,i)=> i !=id)
        }
        else{
            list.push({ meal: [] })
        }
        setOrder([...list])
        setSelectedDine(list.length-1)//set that new diner to add meal
    }


    return (
        <div class="container mx-auto m-10 px-12">
            <div class="grid grid-cols-3 gap-4 ">
                    <div class="col-span-2 bg-red-50 p-3 rounded-md ">    
                        <div class="flex space-x-4 ">
                            <div class="flex-1 ">
                            <h1 class="flex-auto text-2xl font-semibold p-3">
                                Menu
                            </h1></div>
                            <div class="flex">  
                                
                            </div>
                        </div>

                        <div class="flex flex-row px-3">
                        {Object.keys(menu).map((val, i)=>{
                                return  <button key = {i}class={`${val === selectedCourse ? "bg-red-500":"bg-red-200"} px-3 mr-2 rounded-full hover:bg-red-500  text-white flex items-center 
                                justify-center text-xl`} onClick={()=>onChangeTab(val)} >{val} </button>
                        }) }
                        </div>


                        <div class="flex flex-wrap p-6 max-w-7xl justify-start  ">
                        
                        {menu[selectedCourse].map((f,i)=>{
                              return <div key = {i}  onClick={()=>onSelect(f.id ,f.stock == 0 )} 
                              class={`${order[selectedDine]?.meal.filter(f=> f.course == selectedCourse)[0]?.selected == f.id ? 'bg-red-200 border-2 border-red-500':'bg-white'} w-60 py-4 px-8 ${f.stock == 0?"opacity-70":'hover:bg-red-200 cursor-pointer'}    shadow-lg rounded-lg m-2`}>
                                    <div>
                                        <h2 class=" text-xl font-semibold">{f.name}</h2>
                                    </div>
                                    <div class="flex justify-end mt-4">
                                        <div href="#" class="text-xl font-medium text-red-600">£{f.price}</div>
                                    </div>
                                    <div class="text-gray-400">{f.stock} Avaliable</div>
                                </div>
                           }) }

                        </div>
                    </div>
                    <div class="bg-red-700 p-3 rounded-md ">
                        
                           
                           <div class="flex space-x-4 ">
                            <div class="flex-1 ">
                            <h1 class="flex-auto text-xl text-white font-semibold p-3">
                                 Your Order
                            </h1> </div>
                            <div class="flex">  
                            <button onClick={()=>UpdateOrderList()}  class="flex items-center justify-center px-2 rounded-md font-semibold text-white bg-red-600 hover:bg-white hover:text-red-600">
                                + Add New diner
                            </button> 
                            </div>
                        </div>
                    
                    <div class="px-3">
                            <div class="flex justify-center">
                           <div class="shadow-xl w-full ">
                           {order.map((o, i)=>{
                            return <div key ={i} class={`${selectedDine == i ? "border-l-8  border-red-500 shadow-2xl" : ''}  my-2 bg-white hover:bg-gray-100`}>
                                                <div class={`${selectedDine == i ? "bg-red-100" : ''}  p-2 flex `}>
                                                    <div class="flex-auto text-sm w-32">
                                                        <div class="font-bold text-red-600">Diner {i+1}</div>
                                                    </div>
                                                    <div class="flex w-18 font-medium items-end">
                                                        <div onClick={()=>setSelectedDine(i)} class="w-4 mx-2 hover:bg-green-200 rounded-full cursor-pointer text-green-700">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                        </div>
                                                        <div onClick={()=>UpdateOrderList(i)} class="w-4 h-4 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-trash-2 ">
                                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                                            </svg> 
                                                        </div></div>
                                                </div>
                                                {o.meal.map((o, i)=>{return <div key ={i} class="ml-6 p-2 flex cursor-pointer border-b border-gray-100" >
                                                    <div class="flex-auto text-sm w-32">
                                                        <div class="font-bold">{menu[o.course].filter(g=> g.id ==o.selected)[0].name}</div>
                                                        <div class="text-gray-400">{o.course}</div>
                                                    </div>
                                                    <div class="flex flex-col w-18 font-medium items-end">
                                                        £{menu[o.course].filter(g=> g.id ==o.selected)[0].price}</div>
                                                </div>})}
                                            </div>})}
                                            <div class="p-4 justify-center flex">
                                                <button class="text-base  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                                                    hover:bg-teal-700 hover:text-teal-100 
                                                    bg-teal-100 
                                                    text-teal-700 
                                                    border duration-200 ease-in-out 
                                                    border-teal-600 ">Checkout $36.66</button>
                                            </div>
                                        </div>
                                    </div>
        </div>
    </div>
                    </div>
           
</div>
        
    )
}
