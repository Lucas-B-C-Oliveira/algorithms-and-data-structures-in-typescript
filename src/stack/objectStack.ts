import { Stack } from './stack'

export class ObjectStack<T> implements Stack<T> {
  constructor(
    private count = 0,
    private items: any = {},
  ) {}

  push(element: T): void {
    this.items[this.count] = element
    this.count++
  }

  pop(): T | undefined {
    if (this.isEmpty()) return undefined
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  peek(): T | undefined {
    if (this.isEmpty()) return undefined
    return this.items[this.count - 1]
  }

  isEmpty(): boolean {
    return this.count === 0
  }

  clear(): void {
    this.items = {}
    this.count = 0
  }

  size(): number {
    return this.count
  }

  toString() {
    if (this.isEmpty()) return undefined
    let objString = `${this.items[0]}`

    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}
