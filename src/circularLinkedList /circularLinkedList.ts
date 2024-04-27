import { LinkedListAny } from '@/linkedList/linkedListAny'
import { Node } from '@/linkedList/node'
import { defaultEquals } from '@/utils/helper'

export class CircularLinkedList<T> extends LinkedListAny<T> {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }

  insert(element: T, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      let current = this.head
      if (index === 0) {
        if (this.head == null) {
          this.head = node // {1}
          node.next = this.head // {2} NOVO
        } else {
          node.next = current // {3}
          current = this.getElementAt(this.size()) // {4}
          // atualiza o último elemento
          this.head = node // {5}
          current.next = this.head // {6} NOVO
        }
      } else {
        // sem alterações neste cenário
        const previous: any = this.getElementAt(index - 1)
        node.next = previous.next
        previous.next = node
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
        if (this.size() === 1) {
          this.head = undefined
        } else {
          const removed = this.head // {1}
          current = this.getElementAt(this.size()) // {2} NOVO
          this.head = this.head.next // {3}
          current.next = this.head // {4}
          current = removed // {5}
        }
      } else {
        // não há necessidade de atualizar o último elemento da lista circular
        const previous: any = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current.element // {6}
    }
    return undefined
  }
}
