import { LinkedListAny } from '@/linkedList/linkedListAny'
import {
  COMPARE,
  defaultCompareSortedLinkedList,
  defaultEquals,
} from '@/utils/helper'

export class SortedLinkedList<T> extends LinkedListAny<T> {
  constructor(
    equalsFn = defaultEquals,
    private compareFn = defaultCompareSortedLinkedList,
  ) {
    super(equalsFn)
  }

  insert(element: T, _: number) {
    if (this.isEmpty()) return super.insert(element, 0)

    const pos = this.getIndexNextSortedElement(element) // {3}
    return super.insert(element, pos) // {4}
  }

  getIndexNextSortedElement(element: T) {
    let current = this.head
    let i = 0
    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element) // {5}
      if (comp === COMPARE.LESS_THAN) return i
      current = current.next
    }
    return i // {7}
  }
}
