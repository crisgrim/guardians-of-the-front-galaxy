import { shallowMount } from '@vue/test-utils'
import Form from '../../src/components/Form'
import axios from 'axios'

describe('Form.spec.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(Form)
    jest.resetModules()
    jest.clearAllMocks()
  })

  it('Calls axios.get', async () => {
    const result = await cmp.vm.onSubmit('an')

    expect(result).toEqual({ data: [3] })
    expect(cmp.vm.results).toEqual([3])
    expect(axios.get).toBeCalledWith(
      'https://jsonplaceholder.typicode.com/posts?q=an'
    )
  })

  describe('Properties', () => {
    it('returns the string in normal order if reversed property is not true', () => {
      cmp.setData({ inputValue: 'Yoo' })

      expect(cmp.vm.reversedInput).toBe('ooY')
      expect(axios.get).not.toBeCalled()
    })
  })

  describe('Watchers - inputValue', () => {
    let spy

    beforeAll(() => {
      spy = jest.spyOn(console, 'log')
    })

    afterEach(() => {
      spy.mockClear()
    })

    it('is not called if value is empty (trimmed)', () => {
      cmp.setData({ inputValue: '   ' })
      expect(spy).not.toBeCalled()
    })

    it('is not called if values are the same', () => {
      cmp = shallowMount(Form, {
        data: () => ({ inputValue: 'foo' })
      })
      cmp.setData({ inputValue: 'foo' })
      expect(spy).not.toBeCalled()
    })

    it('is called with the new value in other cases', () => {
      cmp.setData({ inputValue: 'foo' })
      expect(spy).toBeCalled()
    })
  })
})
