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
});
