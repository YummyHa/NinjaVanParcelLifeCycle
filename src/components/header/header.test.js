import React from 'react';
import { shallow } from 'enzyme';
import { findTestByAttr, checkProps } from '../../../Utils';
import Header from './index';

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
}

describe('Component: Header', () => {

  describe('Checking PropTypes', () => {

    it('Should not throw a warning', () => {
      const expectedProps = {
        parcel: {
          id: '1',
          status: 'A Status',
          statusCode: 0
        },
        startOver: () => {}
      }

      const propsErr = checkProps(Header, expectedProps);
      expect(propsErr).toBeUndefined();
    });

  });

  describe('Header Renders', () => {
    let component;
    const props = {
      parcel: {
        id: '1',
        status: 'Testing Status',
      },
      startOver: () => {}
    }

    it('Should render without errors', () => {
      component = setUp(props);
      const wrapper = findTestByAttr(component, 'appBar');
      expect(wrapper.length).toBe(1);
    })

    it('Should render startOver button', () => {
      component = setUp(props);
      const wrapper = findTestByAttr(component, 'startOverBtn');
      expect(wrapper.length).toBe(1);
    })

    it('Should not render startOver button', () => {
      props.parcel = null;
      component = setUp(props);
      const wrapper = findTestByAttr(component, 'startOverBtn');
      expect(wrapper.length).toBe(0);
    })
  });
});