import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Counter } from './Counter'


describe('Unit::Counter', () => {
    beforeEach(() => render(<Counter />))
    it("should increment counter", async () => {
        
        const addElement = screen.getByText('+')
        const counterElement = screen.getByTestId('counter')
        
        await userEvent.click(addElement)
        expect(counterElement.textContent).toBe('1')
    })

    it("should decrement counter", async () => {
        
        const addElement = screen.getByText('-')
        const counterElement = screen.getByTestId('counter')
        
        await userEvent.click(addElement)
        expect(counterElement.textContent).toBe('0')
    })

    it("should reset counter", async () => {
        
        const addElement = screen.getByText('reset')
        const counterElement = screen.getByTestId('counter')
        
        await userEvent.click(addElement)
        expect(counterElement.textContent).toBe('0')
    })
})