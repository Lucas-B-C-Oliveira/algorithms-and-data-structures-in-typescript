import { LinkedListAny } from '@/linkedList/linkedListAny'
import { defaultEquals } from '@/utils/helper'
import { DoublyNode } from './doublyNode'

export class DoublyLinkedList<T> extends LinkedListAny<T> {
  constructor(
    equalsFn = defaultEquals,
    public tail: any = undefined,
  ) {
    super(equalsFn)
  }

  insert(element: T, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element)
      let current = this.head
      if (index === 0) {
        if (this.head == null) {
          this.head = node
          this.tail = node
        } else {
          node.next = this.head
          current.prev = node
          this.head = node
        }
      } else if (index === this.count) {
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        const previous: any = this.getElementAt(index - 1)
        current = previous.next
        node.next = current
        previous.next = node
        current.prev = node
        node.prev = previous
      }
      this.count++
      return true
    }
    return false
  }

  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
        if (this.count === 1) {
          this.tail = undefined
        } else {
          this.head.prev = undefined
        }
      } else if (index === this.count - 1) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = undefined
      } else {
        current = this.getElementAt(index)
        const previous = current.prev

        previous.next = current.next
        current.next.prev = previous
      }
      this.count--
      return current.element
    }
    return undefined
  }

  clear() {
    while (this.size() > 0) {
      this.removeAt(0)
    }
  }
}
