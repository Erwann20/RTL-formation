import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Counter } from './Counter'

describe('Unit::Counter', () => {
    beforeEach(() => render(<Counter />))

    it('should render counter initial value as 0', () => {
        const counter = screen.getByTestId('counter')
        expect(counter.textContent).toBe('0')
    })

    it("should increment counter when + button clicked", async () => {
        const incrementButton = screen.getByText('+')
        const counter = screen.getByTestId('counter')
        await userEvent.click(incrementButton)
        expect(counter.textContent).toBe('1')
    })

    it("should decrement counter when - button clicked", async () => {
        const decrementButton = screen.getByText('-')
        const counter = screen.getByTestId('counter')
        await userEvent.click(decrementButton)
        expect(counter.textContent).toBe('0')
    })

    it("should set counter to 0 when reset button clicked", async () => {      
        const resetButton = screen.getByText('reset')
        const counter = screen.getByTestId('counter')
        await userEvent.click(resetButton)
        expect(counter.textContent).toBe('0')
    })

    it("should not decrement the counter below zero", async () => {
        const decrementButton = screen.getByText('-')
        const counter = screen.getByTestId('counter')
        await userEvent.click(decrementButton)
        expect(counter.textContent).toBe('0')
    })
})