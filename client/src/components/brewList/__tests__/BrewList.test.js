import React from "react";
import BrewList from "../BrewList";
import { shallow, mount } from "enzyme";

describe("<BrewList />", () => {
  let wrapper;

  wrapper = shallow(<BrewList />);

  describe("render", () => {
    describe("main", () => {
      let mainWrapper = wrapper.find("main");

      it("should render a main component", () => {
        expect(mainWrapper).toHaveLength(1);
      });
    });
  });
});
