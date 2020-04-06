import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveItem from '../with-active-item/with-active-item.jsx';

const Movie = {
  id: `1`,
  title: `Orlando`,
  img: `img/orlando.jpg`,
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should change ActiveItem`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.state().activeItem).toEqual(``);

  wrapper.props().onItemEnter(Movie);
  expect(wrapper.state().activeItem).toEqual(Movie);

  wrapper.props().onItemLeave(Movie);
  expect(wrapper.state().activeItem).toEqual(null);
});
