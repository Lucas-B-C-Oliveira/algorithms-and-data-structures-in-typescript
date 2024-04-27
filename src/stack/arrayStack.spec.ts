import { ArrayStack } from './arrayStack'
import { Stack } from './stack'

let sut: Stack<string>

describe('Test Stack data structure', () => {
  beforeEach(() => {
    sut = new ArrayStack<string>()
  })

  it('it should be abe add a element', () => {
    const element = 'firstElement'
    sut.push(element)

    expect(sut.size()).toBe(1)
    expect(sut.peek()).toBe(element)
    expect(sut.isEmpty()).toBe(false)
  })

  it('it should be able to remove the last element added', () => {
    const elements = ['element1', 'element2', 'element3', 'element4']

    elements.forEach((element) => {
      sut.push(element)
    })

    const elementRemoved = sut.pop()

    expect(sut.size()).toBe(3)
    expect(sut.peek()).toBe('element3')
    expect(sut.isEmpty()).toBe(false)
    expect(elementRemoved).toBe('element4')
  })

  it('it should be able to peek the last element added', () => {
    const elements = ['element1', 'element2', 'element3', 'element4']

    elements.forEach((element) => {
      sut.push(element)
    })

    const elementPeeked = sut.peek()

    expect(sut.size()).toBe(4)
    expect(sut.isEmpty()).toBe(false)
    expect(elementPeeked).toBe('element4')
  })

  it('it should be able to check if stack is empty', () => {
    expect(sut.size()).toBe(0)
    expect(sut.isEmpty()).toBe(true)

    const elements = ['element1', 'element2', 'element3', 'element4']

    elements.forEach((element) => {
      sut.push(element)
    })

    expect(sut.size()).toBe(4)
    expect(sut.isEmpty()).toBe(false)
  })

  it('it should be able to get size of stack', () => {
    const elements = ['element1', 'element2', 'element3', 'element4']

    elements.forEach((element) => {
      sut.push(element)
    })

    const size = sut.size()

    expect(size).toBe(elements.length)
    expect(size).toBeTypeOf('number')
  })

  it('it should be able to clear the stack', () => {
    const elements = ['element1', 'element2', 'element3', 'element4']

    elements.forEach((element) => {
      sut.push(element)
    })

    expect(sut.size()).toBe(4)
    expect(sut.isEmpty()).toBe(false)

    sut.clear()

    expect(sut.size()).toBe(0)
    expect(sut.isEmpty()).toBe(true)
  })
})
