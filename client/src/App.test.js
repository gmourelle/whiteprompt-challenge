import React from "react";
import App from "./App";
import { BrewList, BrewDetails } from "./components";
import { shallow } from "enzyme";

describe("<App />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe("render", () => {
    describe("NavBar", () => {
      it("should render NavBar component", () => {
        const navBarWrapper = wrapper.find("NavBar");
        expect(navBarWrapper.exists()).toBe(true);
        expect(navBarWrapper).toHaveLength(1);
      });
    });
    describe("Router", () => {
      it("should render Switch component", () => {
        const switchWrapper = wrapper.find("Switch");
        expect(switchWrapper.exists()).toBe(true);
        expect(switchWrapper).toHaveLength(1);
      });

      it("should render Route component", () => {
        const routeWrapper = wrapper.find("Route");
        expect(routeWrapper.exists()).toBe(true);
        expect(routeWrapper).toHaveLength(2);
      });

      it("should contain Route for brews", () => {
        const routeWrapper = wrapper.find("Route");
        expect(routeWrapper.exists()).toBe(true);
        expect(routeWrapper.at(0).prop("path")).toEqual("/");
        expect(routeWrapper.at(0).prop("component")).toEqual(BrewList);
      });

      it("should contain Route for brews/:id", () => {
        const routeWrapper = wrapper.find("Route");
        expect(routeWrapper.exists()).toBe(true);
        expect(routeWrapper.at(1).prop("path")).toEqual("/brews/:id");
        expect(routeWrapper.at(1).prop("component")).toEqual(BrewDetails);
      });
    });
  });
});
