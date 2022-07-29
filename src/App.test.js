// import { render } from "@testing-library/react";
import App from "./App";
import React from "react";
// import Home from "./components/home";
import { shallow } from "enzyme";
// import ErrorPage from "./components/errorPage";
// import { MemoryRouter } from "react-router-dom";

test("app is working correctly", () => {
  const component = shallow(<App />);
  const childComponent = component.find("DenseAppBar").exists();

  expect(childComponent).toBe(true);
});

// test("button is clicked",()=>{
//   const component=
// })
// test("invalid path should redirect to 404", () => {
//   const wrapper = mount(
//     <MemoryRouter initialEntries={["/random"]}>
//       <App />
//     </MemoryRouter>
//   );
//   expect(wrapper.find(Home)).toHaveLength(0);
//   expect(wrapper.find(ErrorPage)).toHaveLength(1);
// });
