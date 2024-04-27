export const defaultEquals = (a: any, b: any) => a === b

export enum COMPARE {
  LESS_THAN = -1,
  BIGGER_THAN = 1,
}

export function defaultCompareSortedLinkedList(a: any, b: any) {
  if (a === b) return 0
  return a < b ? COMPARE.LESS_THAN : COMPARE.BIGGER_THAN
}

const union = (set1: Set<any>, set2: Set<any>) => {
  const unionAb = new Set()
  set1.forEach((value) => unionAb.add(value))
  set2.forEach((value) => unionAb.add(value))
  return unionAb
}

const intersection = (set1: Set<any>, set2: Set<any>) => {
  const intersectionSet = new Set()
  set1.forEach((value) => {
    if (set2.has(value)) {
      intersectionSet.add(value)
    }
  })
  return intersectionSet
}

const difference = (set1: Set<any>, set2: Set<any>) => {
  const differenceSet = new Set()
  set1.forEach((value) => {
    if (!set2.has(value)) {
      // {1}
      differenceSet.add(value)
    }
  })
  return differenceSet
}

export function defaultToString(item: any): string {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString() // {1}
}
