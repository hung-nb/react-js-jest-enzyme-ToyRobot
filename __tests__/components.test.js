import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { InputField, ReportField, LogField } from '../src/components/';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/App';
configure({ adapter: new Adapter() });

/************ App */
/************ VALID CASES */
test('State should be set correctly when command is inputted', () => {
    let state = {
        currentPosition: {
                  X: -1,
                  Y: -1,
                  F: ""
            },
        command: '',
        report: '',
        log: '',
    };
    const wrapper = shallow(<App {...state} />);
    const input = wrapper.find('#id_input');
    input.simulate('change', {target: {value: 'PLACE 0,0,NORTH'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'REPORT'}});
    input.simulate('keypress', {key: 'Enter'});
    expect(wrapper.state('currentPosition')).toEqual({
        X: 0,
        Y: 1,
        F: 'NORTH'
    });
});


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