import { Queue } from '@/queue/queue'
import { Stack } from '../stack/stack'
import { ObjectQueue } from '@/queue/objectQueue'
import { Deck } from '@/deck/deck'
import { ObjectDeck } from '@/deck/objectDeck'

export function decimalToBinary(decNumber: number, stack: Stack<number>) {
  let number = decNumber
  let rem
  let binaryString = ''
  while (number > 0) {
    rem = Math.floor(number % 2)
    stack.push(rem)
    number = Math.floor(number / 2)
  }
  while (!stack.isEmpty()) {
    binaryString += `${stack.pop()}`
  }
  return binaryString
}

export function hotPotato(elementsList: string[], rounds: number) {
  const queue: Queue<string> = new ObjectQueue<string>()
  const elimitatedList = []
  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i])
  }
  while (queue.size() > 1) {
    for (let i = 0; i < rounds; i++) {
      queue.enqueue(queue.dequeue() as string)
    }
    elimitatedList.push(queue.dequeue())
  }
  return {
    eliminated: elimitatedList,
    winner: queue.dequeue(),
  }
}

function makeHotPatato(names: string[], rounds: number) {
  const result = hotPotato(names, rounds)

  result.eliminated.forEach((name) => {
    console.log(`${name} was eliminated from the Hot Potato game.`)
  })
  console.log(`The winner is: ${result.winner}`)
}

export function palindromeChecker(aString: string) {
  const isEmptyString = !aString && aString.length === 0

  if (!aString || isEmptyString) return false

  const deque: Deck<string> = new ObjectDeck()
  const lowerString = aString.toLocaleLowerCase().split(' ').join('')
  let isEqual = true
  let firstChar, lastChar
  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i))
  }
  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront()
    lastChar = deque.removeBack()
    if (firstChar !== lastChar) {
      isEqual = false
    }
  }
  return isEqual
}
