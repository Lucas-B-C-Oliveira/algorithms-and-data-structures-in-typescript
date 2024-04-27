import { Queue } from './queue'

export class ArrayQueue<T> implements Queue<T> {
  constructor(private items: T[] = []) {}

  // Método para adicionar um elemento ao final da fila
  enqueue(element: T): void {
    this.items.push(element)
  }

  // Método para remover e retornar o elemento no início da fila
  dequeue(): T | undefined {
    return this.items.shift()
  }

  // Método para retornar o elemento no início da fila sem removê-lo
  peek(): T | undefined {
    return this.items.at(0)
  }

  // Método para verificar se a fila está vazia
  isEmpty(): boolean {
    return this.items.length === 0
  }

  // Método para limpar a fila
  clear(): void {
    this.items = []
  }

  // Método para retornar o tamanho da fila
  size(): number {
    return this.items.length
  }
}
