import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Comments from './Comments.jsx';
import HelpfulBtn from './HelpfulBtn.jsx';

describe('Comments Component', () => {
  it('should render without an err', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    expect(shallow(<Comments />).exists()).toBe(true);
  });
});

// HelpfulBtn.test.js
describe('HelpfulBtn Component', () => {
  it('should render', () => {
    expect(shallow(<HelpfulBtn />).exists()).toBe(true);
  });
});

// User.test.js
describe('User Component', () => {
  it('should render', () => {
    // eslint-disable-next-line react/jsx-no-undef
    expect(shallow(<User />).exists()).toBe(true);
  });
});

test('Fake test', () => {
  expect(true).toBeTruthy();
});
