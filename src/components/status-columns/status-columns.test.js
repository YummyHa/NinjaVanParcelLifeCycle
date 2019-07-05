import React from 'react';
import { shallow } from 'enzyme';
import { findTestByAttr, checkProps } from '../../../Utils';
import StatusColumns from './index';

const setUp = (props = {}) => {
  const component = shallow(<StatusColumns {...props} />);
  return component;
}

describe('Component: StatusColumns', () => {

  describe('Checking PropTypes', () => {

    it('Should not throw a warning', () => {
      const expectedProps = {
        parcel: {
          id: '1',
          status: 'A Status',
          statusCode: 0
        },
        onParcelClick: () => {},
      }

      const propsErr = checkProps(StatusColumns, expectedProps);
      expect(propsErr).toBeUndefined();
    });

  });

  describe('StatusColumns Renders', () => {
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
      const wrapper = findTestByAttr(component, 'gridContainer');
      expect(wrapper.length).toBe(1);
    })

    it('Should render 5 Grid items', () => {
      const wrapper = findTestByAttr(component, 'gridPaper');
      expect(wrapper.length).toBe(5);
    })
  });
});