import React from "react";
import renderer from "react-test-renderer";
import Tab from '../tab/tab.jsx';
import Tabs from '../tabs/tabs.jsx';

const TAB_NAMES = [`TabName1`, `TabName2`, `TabName3`];

it(`Tabs should render correctly`, () => {
  const wrapper = renderer
    .create(
        <Tabs>
          <Tab name={TAB_NAMES[0]}>TabName1</Tab>
          <Tab name={TAB_NAMES[1]}>TabName2</Tab>
          <Tab name={TAB_NAMES[2]}>TabName3</Tab>
        </Tabs>
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});
