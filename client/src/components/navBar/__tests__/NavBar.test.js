import React from "react";
import NavBar from "../NavBar";
import { shallow } from "enzyme";

describe("<NavBar />", () => {
  let wrapper;

  describe("render", () => {
    wrapper = shallow(<NavBar />);

    describe("header", () => {
      let headerWrapper = wrapper.find("header");

      it("should render a header tag", () => {
        expect(headerWrapper.exists()).toBe(true);
        expect(headerWrapper).toHaveLength(1);
      });

      it("should render an img tag", () => {
        const imgWrapper = headerWrapper.find("img");
        expect(imgWrapper.exists()).toBe(true);
        expect(imgWrapper).toHaveLength(1);
      });

      it("should render a h1 tag", () => {
        const h1Wrapper = headerWrapper.find("h1");
        expect(h1Wrapper.exists()).toBe(true);
        expect(h1Wrapper).toHaveLength(1);
      });
    });
  });
});
