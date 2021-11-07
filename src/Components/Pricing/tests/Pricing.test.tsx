import React from 'react';
import Pricing from '../Pricing'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
const pricingComponent = shallow(<Pricing Price="test" PackageTitle="test" ></Pricing>)
expect(pricingComponent).not.toBe(undefined)
expect(pricingComponent.prop('Price')).toBe(undefined)
});
