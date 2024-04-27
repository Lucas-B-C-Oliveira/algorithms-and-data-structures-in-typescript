import { Deck } from './deck'

export class ObjectDeck implements Deck<string> {
  constructor(
    private count = 0,
    private lowestCount = 0,
    private items: any = {},
  ) {}

  addFront(element: string): void {
    if (this.isEmpty()) this.addBack(element)
    else if (this.lowestCount > 0) {
      this.lowestCount--
      this.items[this.lowestCount] = element
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.lowestCount = 0
      this.items[0] = element
    }
  }

  addBack(element: string): void {
    this.items[this.count] = element
    this.count++
  }

  removeFront() {
    if (this.isEmpty()) return undefined
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  removeBack() {
    if (this.isEmpty()) return undefined
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  peekBack() {
    if (this.isEmpty()) return undefined
    return this.items[this.count - 1]
  }

  peekFront() {
    if (this.isEmpty()) return undefined
    return this.items[this.lowestCount]
  }

  isEmpty(): boolean {
    return this.count - this.lowestCount === 0
  }

  size(): number {
    return this.count - this.lowestCount
  }

  clear(): void {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }
}
