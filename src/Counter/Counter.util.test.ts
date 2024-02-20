import {formatNumberToString} from './Counter.util'

describe('Unit::Counter.util', () => {
    it('formatNumberToString', () => {

        const number = 123;
        const expectResult = '123'
        const result = formatNumberToString(number)

        expect(result).toBe(expectResult)

    })
})