import React from "react";
import { shallow } from "enzyme";
import data from "../../../../menu-data.json"

import CartList from "../index";

describe("Cartlist Test", () => {
  it('Edit function should be called', () => {
    const clickFn = jest.fn();
    var diner = {meal:[{course:"mains",selected:5}]},
    order = {totalCost:18,list:[{meal:[{course:"mains",selected:5}]}]}
    const component = shallow(<CartList dine ={diner} selectedDine={0} 
        order={order} UpdateOrderList={clickFn} menu={data} idx={0} />);
    component.find('div#diner0') .simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
});
