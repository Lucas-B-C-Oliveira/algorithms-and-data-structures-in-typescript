import { defaultToString } from '@/utils/helper'

export class Dictionary<KEY extends string, VALUE extends string> {
  constructor(
    private toStrFn = defaultToString,
    private table: Record<string, VALUE> = {} as Record<string, VALUE>,
  ) {}

  hasKey(key: string) {
    return this.table[this.toStrFn(key)] != null
  }
}
