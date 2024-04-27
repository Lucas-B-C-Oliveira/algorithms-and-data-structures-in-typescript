export interface Deck<T> {
  addFront(element: T): void
  addBack(element: T): void
  removeFront(): T | undefined
  removeBack(): T | undefined
  peekBack(): T | undefined
  peekFront(): T | undefined
  isEmpty(): boolean
  size(): number
  clear(): void
}
