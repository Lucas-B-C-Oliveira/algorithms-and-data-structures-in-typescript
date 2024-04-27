import { Stack } from './stack'

export class ArrayStack<T> implements Stack<T> {
  constructor(private items: T[] = []) {}

  push(element: T | T[]): void {
    if (element instanceof Array) this.items.push(...element)
    else this.items.push(element)
  }

  pop(): T | undefined {
    return this.items.pop()
  }

  peek(): T | undefined {
    return this.items.at(-1)
  }

  isEmpty(): boolean {
    return this.items.length === 0
  }

  size(): number {
    return this.items.length
  }

  clear(): void {
    this.items = []
  }
}
