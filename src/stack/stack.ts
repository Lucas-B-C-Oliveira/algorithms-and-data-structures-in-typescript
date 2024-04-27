export interface Stack<T> {
  push(elements: T | T[]): void
  pop(): T | undefined
  peek(): T | undefined
  isEmpty(): boolean
  clear(): void
  size(): number
}
