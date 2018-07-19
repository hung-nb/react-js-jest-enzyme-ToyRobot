import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { InputField, ReportField, LogField } from '../src/components/';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/App';
configure({ adapter: new Adapter() });

/************ App */
test('State should be set correctly when command is inputted, case 1', () => {
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
    expect(wrapper.state('report')).toEqual('Output: 0,1,NORTH');
});

test('State should be set correctly when command is inputted, case 2', () => {
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
    input.simulate('change', {target: {value: 'LEFT'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'REPORT'}});
    input.simulate('keypress', {key: 'Enter'});
    expect(wrapper.state('report')).toEqual('Output: 0,0,WEST');
});

test('State should be set correctly when command is inputted, case 3', () => {
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
    input.simulate('change', {target: {value: 'PLACE 1,2,EAST'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'LEFT'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'REPORT'}});
    input.simulate('keypress', {key: 'Enter'});
    expect(wrapper.state('report')).toEqual('Output: 3,3,NORTH');
});

test('State should be set correctly when command is inputted, case 4', () => {
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
    input.simulate('change', {target: {value: 'PLACE 1,2,EAST'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'LEFT'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'REPORT'}});
    input.simulate('keypress', {key: 'Enter'});
    expect(wrapper.state('report')).toEqual('Output: 3,3,NORTH');
});

test('State should be set correctly when command is inputted, case 5', () => {
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
    input.simulate('change', {target: {value: 'PLACE 5,5,NORTH'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'LEFT'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'REPORT'}});
    input.simulate('keypress', {key: 'Enter'});
    expect(wrapper.state('report')).toEqual('Output: 4,5,WEST');
});

test('State should be set correctly when command is inputted, case 6', () => {
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
    input.simulate('change', {target: {value: 'PLACE 0,0,SOUTH'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'LEFT'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'REPORT'}});
    input.simulate('keypress', {key: 'Enter'});
    expect(wrapper.state('report')).toEqual('Output: 1,0,EAST');
});

test('State should be set correctly when command is inputted, case 7', () => {
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
    input.simulate('change', {target: {value: 'PLACE 5,5,EAST'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'RIGHT'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'REPORT'}});
    input.simulate('keypress', {key: 'Enter'});
    expect(wrapper.state('report')).toEqual('Output: 5,4,SOUTH');
});

test('State should be set correctly when command is inputted, case 8', () => {
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
    input.simulate('change', {target: {value: 'PLACE 0,5,WEST'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'RIGHT'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'REPORT'}});
    input.simulate('keypress', {key: 'Enter'});
    expect(wrapper.state('report')).toEqual('Output: 0,5,NORTH');
});

test('State should be set correctly when command is inputted, case 9', () => {
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
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'RIGHT'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'REPORT'}});
    input.simulate('keypress', {key: 'Enter'});
    expect(wrapper.state('report')).toEqual('');
});

test('State should be set correctly when command is inputted, case 10', () => {
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
    input.simulate('change', {target: {value: 'place 0,1,NORTH'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'RIGHT'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'REPORT'}});
    input.simulate('keypress', {key: 'Enter'});
    expect(wrapper.state('report')).toEqual('');
});

test('State should be set correctly when command is inputted, case 10', () => {
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
    input.simulate('change', {target: {value: 'PLACE 0,1,NORTH'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVe'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE '}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'RIGHT'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'REPORT'}});
    input.simulate('keypress', {key: 'Enter'});
    expect(wrapper.state('report')).toEqual('Output: 1,1,EAST');
});

test('State should be set correctly when command is inputted, case 10', () => {
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
    input.simulate('change', {target: {value: 'PLACE 0,1,NORTH'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'RIGHT'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'MOVE'}});
    input.simulate('keypress', {key: 'Enter'});
    input.simulate('change', {target: {value: 'REPORT'}});
    input.simulate('keypress', {key: 'Enter'});
    expect(wrapper.state('report')).toEqual('Output: 1,2,EAST');
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