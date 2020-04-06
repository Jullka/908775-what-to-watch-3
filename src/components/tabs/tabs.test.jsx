import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from '../tabs/tabs.jsx';
import withActiveItem from '../hocs/with-active-item/with-active-item.jsx';
import {filmDetails} from '../../mocks/test-mocks.js';


const TabsWrapped = withActiveItem(Tabs);

it(`Tabs should render correctly`, () => {
  const tree = renderer
    .create(
        <TabsWrapped
          film={filmDetails}
        />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
