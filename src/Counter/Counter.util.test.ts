import {formatNumberToString} from './Counter.util'

describe('Unit::Counter.util', () => {
    describe('formatNumberToString', () => {
        it('should return a string', () => {
            const result = formatNumberToString(0)
            expect(result).toBe('0')
        })
    })
})