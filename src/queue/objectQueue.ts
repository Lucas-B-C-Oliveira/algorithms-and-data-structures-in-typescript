import { Queue } from './queue'

export class ObjectQueue<T> implements Queue<T> {
  constructor(
    private count = 0,
    private lowestCount = 0,
    private items: any = {},
  ) {}

  // Método para adicionar um elemento ao final da fila
  enqueue(element: T): void {
    this.items[this.count] = element
    this.count++
  }

  // Método para remover e retornar o elemento no início da fila
  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  // Método para retornar o elemento no início da fila sem removê-lo
  peek(): T | undefined {
    if (this.isEmpty()) return undefined
    return this.items[this.lowestCount]
  }

  // Método para verificar se a fila está vazia
  isEmpty(): boolean {
    return this.count - this.lowestCount === 0
  }

  // Método para limpar a fila
  clear(): void {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  // Método para retornar o tamanho da fila
  size(): number {
    return this.count - this.lowestCount
  }

  toString() {
    if (this.isEmpty()) return ''
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}
