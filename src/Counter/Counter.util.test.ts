import {formatNumberToString} from './Counter.util'

describe('Unit::Counter.util', () => {
    describe('formatNumberToString', () => {
        it('should return 0 as a string', () => {
            const result = formatNumberToString(0)
            expect(result).toBe('0')
        })

        it('should return 1 as a string', () => {
            const result = formatNumberToString(1)
            expect(result).toBe('1')
        })

        it('should return -1 as a string', () => {
            const result = formatNumberToString(-1)
            expect(result).toBe('-1')
        })
    })
})