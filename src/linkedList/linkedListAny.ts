import { defaultEquals } from '@/utils/helper'
import { LinkedList } from './linkedList'
import { Node } from './node'

export class LinkedListAny<T> implements LinkedList<T> {
  constructor(
    private equalsFn = defaultEquals,
    protected count = 0,
    protected head: any = undefined,
  ) {}

  push(element: T): void {
    const node = new Node(element)
    let current
    if (this.head == null) this.head = node
    else {
      current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  insert(element: T, index: number): boolean {
    const isValidIndex = index >= 0 && index <= this.count
    if (isValidIndex) {
      const node = new Node(element)
      if (index === 0) {
        node.next = this.head
        this.head = node
      } else {
        const previous: any = this.getElementAt(index - 1)
        const current = previous.next
        node.next = current
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }

  getElementAt(index: number): T | undefined {
    const isValidIndex = index >= 0 && index <= this.count
    if (isValidIndex) {
      let node = this.head
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }

  remove(element: T): T | undefined {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  indexOf(element: T): number {
    let current = this.head
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  removeAt(index: number): T | undefined {
    const isValidIndex = index >= 0 && index < this.count
    if (isValidIndex) {
      let current = this.head

      if (index === 0) this.head = current.next
      else {
        const previous: any = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }

      this.count--
      return current.element
    }
    return undefined
  }

  isEmpty(): boolean {
    return this.size() === 0
  }

  size(): number {
    return this.count
  }

  toString(): string {
    if (this.head == null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`
      current = current.next
    }
    return objString
  }

  getHead() {
    return this.head
  }
}
