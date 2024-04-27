import { ArrayQueue } from './arrayQueue'

let sut: ArrayQueue<string>

describe('Test queue data structure', () => {
  beforeEach(() => {
    sut = new ArrayQueue<string>()
  })

  it('it should be abe add a element', () => {
    const element = 'firstElement'
    sut.enqueue(element)

    expect(sut.size()).toBe(1)
    expect(sut.peek()).toBe(element)
    expect(sut.isEmpty()).toBe(false)
  })

  it('it should be able to remove the first element added', () => {
    const elements = ['element1', 'element2', 'element3', 'element4']

    elements.forEach((element) => {
      sut.enqueue(element)
    })

    const elementRemoved = sut.dequeue()

    expect(sut.size()).toBe(3)
    expect(sut.peek()).toBe('element2')
    expect(sut.isEmpty()).toBe(false)
    expect(elementRemoved).toBe('element1')
  })

  it('it should be able to peek the last element added', () => {
    const elements = ['element1', 'element2', 'element3', 'element4']

    elements.forEach((element) => {
      sut.enqueue(element)
    })

    const elementPeeked = sut.peek()

    expect(sut.size()).toBe(4)
    expect(sut.isEmpty()).toBe(false)
    expect(elementPeeked).toBe('element1')
  })

  it('it should be able to check if queue is empty', () => {
    expect(sut.size()).toBe(0)
    expect(sut.isEmpty()).toBe(true)

    const elements = ['element1', 'element2', 'element3', 'element4']

    elements.forEach((element) => {
      sut.enqueue(element)
    })

    expect(sut.size()).toBe(4)
    expect(sut.isEmpty()).toBe(false)
  })

  it('it should be able to get size of queue', () => {
    const elements = ['element1', 'element2', 'element3', 'element4']

    elements.forEach((element) => {
      sut.enqueue(element)
    })

    const size = sut.size()

    expect(size).toBe(elements.length)
    expect(size).toBeTypeOf('number')
  })

  it('it should be able to clear the queue', () => {
    const elements = ['element1', 'element2', 'element3', 'element4']

    elements.forEach((element) => {
      sut.enqueue(element)
    })

    expect(sut.size()).toBe(4)
    expect(sut.isEmpty()).toBe(false)

    sut.clear()

    expect(sut.size()).toBe(0)
    expect(sut.isEmpty()).toBe(true)
  })
})
