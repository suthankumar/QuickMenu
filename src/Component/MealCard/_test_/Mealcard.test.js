import React from "react";
import { shallow } from "enzyme";
import data from "../../../../menu-data.json"

import MealCard from "../index";

describe("Meal Card component Test", () => {
  it("Selected(current) Meal should be highlighted with dark red color to represent that mela is selected ", () => {
    const clickfn = jest.fn();
    let order = {totalCost:18,list:[{meal:[{course:"mains",selected:5}]}]}
    
        const component = shallow(
        <MealCard  setOrder={clickfn} selectedDine={0} 
        selectedCourse ={"mains"} order={order} ml = {data.mains[0]}/>
    );
    component.find('div#Steak').hasClass("bg-red-200")
  
  });

  it("onSelect function should be called when clicked any tab ", () => {
     
  let order = {totalCost:18,list:[{meal:[{course:"mains",selected:5}]}]}
    const component = shallow(
        <MealCard  setOrder={clickfn} selectedDine={0} 
        selectedCourse ={"mains"} order={order} ml = {data.mains[0]}/>
    );
    //const instance = component.instance()
    const mock = jest.spyOn(MealCard, 'onSelect');
    mock.mockImplementation(() => {});
    
    component.find('#Steak').simulate('click');
    expect(mock).toHaveBeenCalled();
    mock.mockRestore();
  });
});