import React from "react";
import { shallow } from "enzyme";
import data from "../../../../menu-data.json"

import CourseTab from "../index";

describe("CourseTab component Test", () => {
  it("Selected(current) Tab should be highlighted with dark red color ", () => {
    const restart = jest.fn();
    const component = shallow(
      <CourseTab setSelectedCourse={restart} selectedCourse={"mains"} menu={data} />
    );
    component.find('#mains').hasClass("bg-red-200")
  
  });

  it("onChangTab function should be called when clicked any tab ", () => {
    const restart = jest.fn();
  //   const component = shallow(
  //     <CourseTab setSelectedCourse={restart} selectedCourse={"mains"} menu={data} />
  //   );
  // expect(component).toMatchSnapshot();
  //   //wrapper.find("button").simulate("click");
  //   // expect(restart).toHaveBeenCalled();
     

    const component = shallow(
      <CourseTab setSelectedCourse={restart} selectedCourse={"mains"} menu={data} />
    );
    //const instance = component.instance()
    const mock = jest.spyOn(CourseTab, 'onChangeTab');
    mock.mockImplementation(() => {});
    
    component.find('#mains').simulate('click');
    expect(mock).toHaveBeenCalled();
    mock.mockRestore();
  });
});
