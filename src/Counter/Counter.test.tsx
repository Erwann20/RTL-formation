import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Counter } from './Counter'


describe('Unit::Counter', () => {
    beforeEach(() => render(<Counter />))
    it("should increment counter", async () => {
        
        const addElement = screen.getByText('+')
        
        await userEvent.click(addElement)
        expect(screen.getByTestId('counter').textContent).toBe('1')
    })
})