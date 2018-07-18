import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { InputField, ReportField, LogField } from '../src/components/';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

/*********** InputField */
test('InputField should render correctly', () => {
    const value = 'PLACE 1,2,SOUTH';
    const result = shallow(
        <InputField value={value} />);
    expect(shallowToJson(result)).toMatchSnapshot();
});

/*********** ReportField */
test('ReportField should render correctly', () => {
    const value = 'Output: 1,2,SOUTH';
    const result = shallow(
        <ReportField value={value} />);
    expect(shallowToJson(result)).toMatchSnapshot();
});

/*********** LogField */
test('LogField should render correctly', () => {
    const value = 'PLACE 1,2,SOUTH';
    const result = shallow(
        <LogField value={value} />);
    expect(shallowToJson(result)).toMatchSnapshot();
});