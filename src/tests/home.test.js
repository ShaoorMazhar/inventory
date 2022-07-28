// import BrowserRouter from "react-router-dom";

import Home from "../components/home";
import { shallow } from "enzyme";
describe("Shallow Home Page", () => {
  let wrapper = shallow(<Home />);
  const childComponent = wrapper.find("img").exists();

  expect(childComponent).toBe(true);
});
