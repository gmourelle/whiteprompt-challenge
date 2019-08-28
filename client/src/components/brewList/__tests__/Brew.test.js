import React from "react";
import Brew from "../Brew";
import { shallow } from "enzyme";

const brew = {
  id: 1,
  name: "Lungo",
  description: "Cafe Lungo",
  image:
    "https://d36bl1cjgcfngd.cloudfront.net/wp-content/uploads/sites/2/2018/06/18115512/espresso-sml.jpg"
};
describe("<Brew />", () => {
  let wrapper;

  describe("render", () => {
    wrapper = shallow(<Brew brew={brew} />);

    describe("Link", () => {
      let linkWrapper = wrapper.find("Link");

      it("should render a Link component with a prop to", () => {
        expect(linkWrapper).toHaveLength(1);
        expect(linkWrapper.prop("to")).toEqual(`/brews/${brew.id}`);
      });
      it("should render an img tag", () => {
        const imgWrapper = linkWrapper.find("img");
        expect(imgWrapper.exists()).toBe(true);
        expect(imgWrapper).toHaveLength(1);
        expect(imgWrapper.prop("src")).toEqual(brew.image);
      });

      it("should render a span tag whith brew.name", () => {
        const spanWrapper = linkWrapper.find("span");
        expect(spanWrapper.exists()).toBe(true);
        expect(spanWrapper).toHaveLength(1);
        expect(spanWrapper.text()).toEqual(brew.name);
      });
    });
  });
});
