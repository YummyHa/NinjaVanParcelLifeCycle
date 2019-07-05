import React from 'react';
import { shallow } from 'enzyme';
import { findTestByAttr, checkProps } from '../../../Utils';
import Body from './index';

const setUp = (props = {}) => {
  const component = shallow(<Body {...props} />);
  return component;
}

describe('Component: Body', () => {

  describe('Checking PropTypes', () => {

    it('Should not throw a warning', () => {
      const expectedProps = {
        updateParcel: () => {},
        parcel: {
          id: '1',
          status: 'A Status',
          statusCode: 0
        }
      }

      const propsErr = checkProps(Body, expectedProps);
      expect(propsErr).toBeUndefined();
    });

  });

  describe('Body Renders', () => {
    let component;
    const props = {
      updateParcel: () => {},
      parcel: {
        id: '1',
        status: 'Testing Status',
      }
    }

    beforeEach(() => {
      component = setUp(props);
    });

    it('Should render without errors', () => {
      const wrapper = findTestByAttr(component, 'bodyContainer');
      expect(wrapper.length).toBe(1);
    })

    it('Should render Buttons Area', () => {
      const wrapper = findTestByAttr(component, 'buttonContainer');
      expect(wrapper.length).toBe(1);
    })

    it('Should render Status Columns Area', () => {
      const wrapper = findTestByAttr(component, 'statusColumnsContainer');
      expect(wrapper.length).toBe(1);
    })
  });
});