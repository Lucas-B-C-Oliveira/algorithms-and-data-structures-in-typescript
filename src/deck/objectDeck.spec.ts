import { palindromeChecker } from '@/utils/exercises'
import { Deck } from './deck'
import { ObjectDeck } from './objectDeck'

let sut: Deck<string>

describe('Test deck data structure', () => {
  beforeEach(() => {
    sut = new ObjectDeck()
  })

  it('it should be abe to add a element in front of deck', () => {
    const element1 = 'element1'
    const element2 = 'element2'
    const element3 = 'element3'

    sut.addFront(element1)
    sut.addBack(element2)
    sut.addFront(element3)

    expect(sut.size()).toBe(3)
    expect(sut.peekFront()).toBe(element3)
    expect(sut.isEmpty()).toBe(false)
  })

  it('it should be abe to add a element in back of deck', () => {
    const element1 = 'element1'
    const element2 = 'element2'
    const element3 = 'element3'
    const element4 = 'element4'

    sut.addFront(element1)
    sut.addBack(element2)
    sut.addFront(element3)
    sut.addBack(element4)

    expect(sut.size()).toBe(4)
    expect(sut.peekFront()).toBe(element3)
    expect(sut.peekBack()).toBe(element4)
    expect(sut.isEmpty()).toBe(false)
  })

  it('it should be abe to remove a element in front of deck', () => {
    const element1 = 'element1'
    const element2 = 'element2'
    const element3 = 'element3'

    sut.addFront(element1)
    sut.addBack(element2)
    sut.addFront(element3)
    const elementRemoved = sut.removeFront()

    expect(sut.size()).toBe(2)
    expect(sut.peekFront()).toBe(element1)
    expect(elementRemoved).toBe(element3)
    expect(sut.isEmpty()).toBe(false)
  })

  it('it should be abe to remove a element in back of deck', () => {
    const element1 = 'element1'
    const element2 = 'element2'
    const element3 = 'element3'
    const element4 = 'element4'

    sut.addFront(element1)
    sut.addBack(element2)
    sut.addFront(element3)
    sut.addBack(element4)
    const elementRemoved = sut.removeBack()

    expect(sut.size()).toBe(3)
    expect(sut.peekBack()).toBe(element2)
    expect(elementRemoved).toBe(element4)
    expect(sut.isEmpty()).toBe(false)
  })

  it('it should be abe to peek front of deck', () => {
    const element1 = 'element1'
    const element2 = 'element2'
    const element3 = 'element3'
    const element4 = 'element4'

    sut.addFront(element1)
    sut.addBack(element2)
    sut.addFront(element3)
    sut.addBack(element4)

    expect(sut.size()).toBe(4)
    expect(sut.peekFront()).toBe(element3)
    expect(sut.isEmpty()).toBe(false)
  })

  it('it should be abe to peek back of deck', () => {
    const element1 = 'element1'
    const element2 = 'element2'
    const element3 = 'element3'
    const element4 = 'element4'

    sut.addFront(element1)
    sut.addBack(element2)
    sut.addFront(element3)
    sut.addBack(element4)

    expect(sut.size()).toBe(4)
    expect(sut.peekBack()).toBe(element4)
    expect(sut.isEmpty()).toBe(false)
  })

  it('it should be able to check if queue is empty', () => {
    expect(sut.size()).toBe(0)
    expect(sut.isEmpty()).toBe(true)

    const element1 = 'element1'
    const element2 = 'element2'
    const element3 = 'element3'
    const element4 = 'element4'

    sut.addFront(element1)
    sut.addBack(element2)
    sut.addFront(element3)
    sut.addBack(element4)

    expect(sut.size()).toBe(4)
    expect(sut.isEmpty()).toBe(false)
  })

  it('it should be able to get size of queue', () => {
    const element1 = 'element1'
    const element2 = 'element2'
    const element3 = 'element3'
    const element4 = 'element4'

    sut.addFront(element1)
    sut.addBack(element2)
    sut.addFront(element3)
    sut.addBack(element4)

    const size = sut.size()

    expect(size).toBe(4)
    expect(size).toBeTypeOf('number')
  })

  it('it should be able to clear the queue', () => {
    const element1 = 'element1'
    const element2 = 'element2'
    const element3 = 'element3'
    const element4 = 'element4'

    sut.addFront(element1)
    sut.addBack(element2)
    sut.addFront(element3)
    sut.addBack(element4)

    expect(sut.size()).toBe(4)
    expect(sut.isEmpty()).toBe(false)

    sut.clear()

    expect(sut.size()).toBe(0)
    expect(sut.isEmpty()).toBe(true)
  })

  it('it should be able to check if a string is a palindromer', () => {
    palindromeChecker('a')

    expect(palindromeChecker('a')).toBe(true)
    expect(palindromeChecker('a')).toBe(true)
    expect(palindromeChecker('kayak')).toBe(true)
    expect(palindromeChecker('level')).toBe(true)
    expect(palindromeChecker('Was it a car or a cat I saw')).toBe(true)
    expect(palindromeChecker('Step on no pets')).toBe(true)
    expect(palindromeChecker('lucas')).toBe(false)
  })
})
