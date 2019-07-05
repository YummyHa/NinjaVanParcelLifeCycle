import React from 'react';
import { shallow } from 'enzyme';
import { findTestByAttr, checkProps } from '../../../Utils';
import Parcel from './index';

const setUp = (props = {}) => {
  const component = shallow(<Parcel {...props} />);
  return component;
}

describe('Component: Parcel', () => {

  describe('Checking PropTypes', () => {

    it('Should not throw a warning', () => {
      const expectedProps = {
        color: '#FFF',
        onClick: () => {},
        parcel: {
          id: '1',
          status: 'A Status',
          statusCode: 1
        }
      }

      const propsErr = checkProps(Parcel, expectedProps);
      expect(propsErr).toBeUndefined();
    });

  });

  describe('Parcel visible', () => {
    let component;
    const props = {
      visible: true,
      parcel: {
        id: '1',
        status: 'Testing Status',
      }
    }

    beforeEach(() => {
      component = setUp(props);
    });

    it('Should render without errors', () => {
      const wrapper = findTestByAttr(component, 'parcelContainer');
      expect(wrapper.length).toBe(1);
    })

    it('Should render id', () => {
      const wrapper = findTestByAttr(component, 'parcelId');
      expect(wrapper.length).toBe(1);
    })

    it('Should render status', () => {
      const wrapper = findTestByAttr(component, 'parcelStatus');
      expect(wrapper.length).toBe(1);
    })
  });

  describe('Parcel not visible', () => {
    it('Should render nothing', () => {
      const component = setUp({ visible: false });
      const wrapper = findTestByAttr(component, 'parcelContainer');
      expect(wrapper.length).toBe(0);
    })
  });
});
