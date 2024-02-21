import {formatNumberToString} from './Counter.util'

describe('Unit::Counter.util', () => {
    describe('formatNumberToString', () => {
        it('should return a string', () => {
            const result1 = formatNumberToString(0)
            const result2 = formatNumberToString(1)
            const result3 = formatNumberToString(-1)

            expect(result1).toBe('0')
            expect(result2).toBe('1')
            expect(result3).toBe('-1')
        })
    })
})