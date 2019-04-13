import { mount } from '@vue/test-utils'
import App from '@/components/App.vue'
describe('App', () => {
  const wrapper = mount(App)
  it('open tooltip on click', () => {
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.isActive).toBe(true)
  })
})