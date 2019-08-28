import React from "react";
import BrewDetails from "../BrewDetails";
import { shallow } from "enzyme";

const props = {
  match: { params: { id: 1 } },
  history: { push: jest.fn() }
};

const response = {
  id: 1,
  name: "Ristretto",
  description:
    "Ristretto is traditionally a short shot of espresso coffee made with the normal amount of ground coffee but extracted with about half the amount of water in the same amount of time by using a finer grind.",
  image:
    "https://d36bl1cjgcfngd.cloudfront.net/wp-content/uploads/sites/2/2018/06/18115512/espresso-sml.jpg"
};

describe("<BrewDetails />", () => {
  let wrapper;

  wrapper = shallow(<BrewDetails {...props} />);

  describe("render", () => {
    describe("section", () => {
      let fragmentWrapper = wrapper.find("Fragment");

      it("should render a Fragment component", () => {
        expect(fragmentWrapper).toHaveLength(1);
      });

      it("should render a section tag ", () => {
        const sectionWrapper = fragmentWrapper.find("section");
        expect(sectionWrapper).toHaveLength(1);
      });

      fit("should render an img tag", () => {
        const imgWrapper = fragmentWrapper.find("img");
        expect(imgWrapper).toHaveLength(1);
      });

      it("should render a div with description-container class", () => {
        const divWrapper = fragmentWrapper.find("div.description-container");
        expect(divWrapper).toHaveLength(1);
      });

      it("should render a p with description class", () => {
        const pWrapper = fragmentWrapper.find("p.description");
        expect(pWrapper).toHaveLength(1);
      });

      it('should render a button with text "Back to Brews"', () => {
        const btnWrapper = fragmentWrapper.find("button");
        expect(btnWrapper).toHaveLength(1);
        expect(btnWrapper.text()).toEqual("Back to Brews");
      });
    });
  });
});
