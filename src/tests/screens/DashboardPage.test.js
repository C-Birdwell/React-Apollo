import React from 'react'
import { mount } from 'enzyme'
import DashboardPage from '../../screens/DashboardPage'
import { MockedProvider } from 'react-apollo/test-utils'

test('should render Header correctly', () => {
  const wrapper = mount(<DashboardPage />)
  expect(wrapper).toMatchSnapshot()
})
