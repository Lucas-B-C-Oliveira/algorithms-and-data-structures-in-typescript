export interface LinkedList<T> {
  push(element: T): void
  insert(element: T, index: number): boolean
  getElementAt(index: number): T | undefined
  remove(element: T): T | undefined
  indexOf(element: T): number
  removeAt(index: number): T | undefined
  isEmpty(): boolean
  size(): number
  toString(): string
}
