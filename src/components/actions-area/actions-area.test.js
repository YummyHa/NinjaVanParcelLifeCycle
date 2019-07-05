import React from 'react';
import { shallow } from 'enzyme';
import { findTestByAttr, checkProps } from '../../../Utils';
import ActionsArea from './index';

const setUp = (props = {}) => {
  const component = shallow(<ActionsArea {...props} />);
  return component;
}

describe('Component: ActionsArea', () => {

  describe('Checking PropTypes', () => {

    it('Should not throw a warning', () => {
      const expectedProps = {
        visible: true,
        statusCode: 1,
        onUpdateParcel: () => { },
        onCancelParcel: () => { },
      }

      const propsErr = checkProps(ActionsArea, expectedProps);
      expect(propsErr).toBeUndefined();
    });

  });

  describe('ActionsArea with props', () => {
    let component;
    const props = {
      visible: true,
      statusCode: 1,
      onUpdateParcel: () => { },
      onCancelParcel: () => { },
    }

    it('Should render without errors', () => {
      component = setUp(props);
      const wrapper = findTestByAttr(component, 'controlContainer');
      expect(wrapper.length).toBe(1);
    })

    it('Should CancelButton visible when parcel gets collected', () => {
      props.statusCode = 1;
      component = setUp(props);
      const wrapper = findTestByAttr(component, 'cancelButton');
      expect(wrapper.length).toBe(1);
    })

    it('Should CancelButton visible when parcel gets inbounded', () => {
      props.statusCode = 2;
      component = setUp(props);
      const wrapper = findTestByAttr(component, 'cancelButton');
      expect(wrapper.length).toBe(1);
    })

    it('Should CancelButton not visible', () => {
      props.statusCode = 0;
      component = setUp(props);
      const wrapper = findTestByAttr(component, 'cancelButton');
      expect(wrapper.length).toBe(0);
    })
  });

  describe('ActionsArea not visible', () => {
    it('Should render nothing', () => {
      const component = setUp({ visible: false });
      const wrapper = findTestByAttr(component, 'controlContainer');
      expect(wrapper.length).toBe(0);
    })
  });
});