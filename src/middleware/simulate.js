import TestUtils from 'react-addons-test-utils';

export default function simulate(data){
  let element = data.element ? this.helpers.elements[data.element] : this;
  element = Array.isArray(element) ? element[0] : element;
  TestUtils.Simulate[data.method].call(this,
    element,
    data.options || null
  );
}
