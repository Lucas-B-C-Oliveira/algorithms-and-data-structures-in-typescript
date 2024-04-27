import { Set } from './set'

let sut: Set<number | string>

describe('Test queue data structure', () => {
  beforeEach(() => {
    sut = new Set<number | string>()
  })

  it('it should be abe to add a element', () => {
    const element1 = 'element1'
    const element2 = 'element2'
    const element3 = 3
    sut.add(element1)
    sut.add(element2)
    sut.add(element3)

    expect(sut.values()).toEqual([3, 'element1', 'element2'])
    expect(sut.has(element1)).toBe(true)
    expect(sut.has(element2)).toBe(true)
    expect(sut.has(element3)).toBe(true)
    expect(sut.size()).toBe(3)
  })

  it('it should be abe to delete a element', () => {
    const element1 = 'element1'
    const element2 = 'element2'

    sut.add(element1)
    sut.add(element2)

    expect(sut.size()).toBe(2)

    sut.delete(element1)

    expect(sut.has(element1)).toBe(false)
    expect(sut.has(element2)).toBe(true)
    expect(sut.size()).toBe(1)

    expect(sut.values()).toEqual([element2])
  })

  it('it should be abe to make a union of two sets', () => {
    const element1 = 'element1'
    const element2 = 'element2'
    const element3 = 'element3'
    const element4 = 'element4'

    sut.add(element1)
    sut.add(element2)

    const setB = new Set<number | string>()

    setB.add(element3)
    setB.add(element4)

    const unionSutWithB = sut.union(setB)

    expect(unionSutWithB.values()).toEqual([
      'element1',
      'element2',
      'element3',
      'element4',
    ])
  })

  it('it should be abe to make a intersection of two sets', () => {
    const element1 = 'element1'
    const element2 = 'element2'
    const element3 = 'element3'
    const element4 = 'element4'
    const element5 = 'element5'
    const element6 = 'element6'

    sut.add(element1)
    sut.add(element2)
    sut.add(element3)
    sut.add(element5)

    const setB = new Set<number | string>()

    setB.add(element3)
    setB.add(element4)
    setB.add(element5)
    setB.add(element6)

    const intersectionSutWithB = sut.intersection(setB)

    expect(intersectionSutWithB.values()).toEqual(['element3', 'element5'])
  })

  it('it should be abe to make a difference of two sets', () => {
    const element1 = 'element1'
    const element2 = 'element2'
    const element3 = 'element3'
    const element4 = 'element4'
    const element5 = 'element5'
    const element6 = 'element6'

    sut.add(element1)
    sut.add(element2)
    sut.add(element3)
    sut.add(element5)

    const setB = new Set<number | string>()

    setB.add(element3)
    setB.add(element4)
    setB.add(element5)
    setB.add(element6)

    const differenceSutWithB = sut.difference(setB)
    console.log(differenceSutWithB.values())

    expect(differenceSutWithB.values()).toEqual(['element1', 'element2'])
  })

  it('it should be abe to check if a set is sub set of other set', () => {
    sut.add(1)
    sut.add(2)

    const setB = new Set<number | string>()

    setB.add(1)
    setB.add(2)
    setB.add(3)

    const setC = new Set<number | string>()

    setC.add(2)
    setC.add(3)
    setC.add(4)

    expect(sut.isSubsetOf(setB)).toBe(true)
    expect(sut.isSubsetOf(setC)).toBe(false)
  })
})
