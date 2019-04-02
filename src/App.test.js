import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from "enzyme";

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders input", () => {
    // arrange

    // action
    const wrapper = shallow(<App />);

    // assert
    expect(wrapper.find("input")).toHaveLength(1);
  })

  it("adds new todo on click", () => {
    // arrange
    const instance = shallow(<App />).instance();
    const oldTodosCount = instance.state.todos.length;

    // action
    instance.handleClick();

    // assert
    expect(instance.state.todos).toHaveLength(oldTodosCount + 1);
  });
})
