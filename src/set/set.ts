export class Set<T extends string | number | symbol> {
  constructor(private items: Record<T, T> = {} as Record<T, T>) {}

  has(element: T) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  add(element: T) {
    if (!this.has(element)) {
      this.items[element] = element // {1}
      return true
    }
    return false
  }

  delete(element: T) {
    if (this.has(element)) {
      delete this.items[element] // {1}
      return true
    }
    return false
  }

  clear() {
    this.items = {} as Record<T, T> // {2}
  }

  size() {
    return Object.keys(this.items).length // {1}
  }

  sizeLegacy() {
    let count = 0
    for (const key in this.items) {
      // {2}
      if (this.items.hasOwnProperty(key)) {
        // {3}
        count++ // {4}
      }
    }
    return count
  }

  values(): T[] {
    return Object.values(this.items)
  }

  valuesLegacy() {
    const values = []
    for (const key in this.items) {
      // {1}
      if (this.items.hasOwnProperty(key)) {
        // {2}
        values.push(key)
      }
    }
    return values
  }

  union(otherSet: Set<T>) {
    const unionSet = new Set() // {1}
    this.values().forEach((value: T) => unionSet.add(value)) // {2}
    otherSet.values().forEach((value) => unionSet.add(value)) // {3}
    return unionSet
  }

  intersection(otherSet: Set<T>) {
    const intersectionSet = new Set() // {1}
    const values = this.values() // {2}
    const otherValues = otherSet.values() // {3}
    let biggerSet = values // {4}
    let smallerSet = otherValues // {5}
    if (otherValues.length - values.length > 0) {
      // {6}
      biggerSet = otherValues
      smallerSet = values
    }
    smallerSet.forEach((value) => {
      // {7}
      if (biggerSet.includes(value)) {
        intersectionSet.add(value)
      }
    })
    return intersectionSet
  }

  difference(otherSet: Set<T>) {
    const differenceSet = new Set() // {1}
    this.values().forEach((value) => {
      // {2}
      if (!otherSet.has(value)) {
        // {3}
        differenceSet.add(value) // {4}
      }
    })
    return differenceSet
  }

  isSubsetOf(otherSet: Set<T>) {
    if (this.size() > otherSet.size()) return false
    let isSubset = true // {2}
    this.values().every((value) => {
      // {3}
      if (!otherSet.has(value)) {
        // {4}
        isSubset = false // {5}
        return false
      }
      return true // {6}
    })
    return isSubset // {7}
  }
}
