import { DoublyLinkedList } from '@/doublyLinkedList/doublyLinkedList'
import { DoublyNode } from '@/doublyLinkedList/doublyNode'

export class StackLinkedList {
  constructor(private items = new DoublyLinkedList<DoublyNode<any>>()) {}

  push(element: any) {
    this.items.push(element) // {2}
  }

  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items.removeAt(this.size() - 1) // {3}
  }

  peek() {
    if (this.isEmpty()) return undefined
    return this.items.getElementAt(this.size() - 1)?.value
  }

  isEmpty() {
    return this.items.isEmpty()
  }

  size() {
    return this.items.size()
  }

  clear() {
    this.items.clear()
  }

  toString() {
    return this.items.toString()
  }
}
