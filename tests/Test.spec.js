import React from 'react';
import Test from '../src/containers/pages/Test';

describe('<Test/>', function() {
    it('should render title', function() {
        const wrapper = shallow(<Test />);
        expect(wrapper.find('.content').text()).to.equal('This is component for test.');
    });
});