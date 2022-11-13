import { render, screen } from "@testing-library/react"
import { CounterTwo } from "./CounterTwo"
import user from "@testing-library/user-event"

describe('Render counter two component', ()=>{
    it('should render heading', ()=>{
        render(<CounterTwo count={10}/>)
        const headingElement = screen.getByRole('heading');
        expect(headingElement).toBeInTheDocument();
    });
    it('should render buttons by onvoking hadler methods', async ()=>{
        user.setup()
        const mockIncrement = jest.fn();
        const mockDecrement = jest.fn();
        render(<CounterTwo count={0}
        handleIncrement={mockIncrement}
        handleDecrement={mockDecrement}
        />)
        const buttonIncrement = screen.getByRole('button', {
            name: 'Increment'
        },)
        const buttonDecrement = screen.getByRole('button',{
            name:'Decrement'
        },)
        await user.click(buttonIncrement);
        await user.click(buttonDecrement);
        expect(mockIncrement).toBeCalledTimes(1);
        expect(mockDecrement).toBeCalledTimes(1);
    });
});