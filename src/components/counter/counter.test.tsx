import { render, screen } from "@testing-library/react";
import user from '@testing-library/user-event';
import { Counter } from "./counter";

describe('Counter component',()=>{
    it('Render the heading element', ()=>{
        render(<Counter />)
        const element = screen.getByRole('heading');
        expect(element).toBeInTheDocument();

        const buttonElement = screen.getByRole('button',{
            name: 'Click me',
        });
        expect(buttonElement).toBeInTheDocument();
    });

    it('render the count element having value 0', ()=>{
        render(<Counter />)
        const element = screen.getByRole('heading');
        expect(element).toHaveTextContent('count - 0');
    });

    it('renders count of 1 after clicking', async ()=>{
        user.setup();
        render(<Counter />)
        const element = screen.getByRole('button', {
        name:'Click me' }
        );
        await user.dblClick(element);
        const headingelement = screen.getByRole('heading');
        expect(headingelement).toHaveTextContent('count - 2');
    });

    it('render the count value as 10 after user enters it as 10',async ()=>{
        user.setup();
        render(<Counter />);
        const element = screen.getByRole('spinbutton');
        await user.type(element,'10');
        expect(element).toHaveValue(10);
        const setButton = screen.getByRole('button',{
            name:'set',
        });
        await user.click(setButton);
        const headElement = screen.getByRole('heading');
        expect(headElement).toHaveTextContent('count - 10');
    });

    // it('test the keyboard interacations for focusing in correct order', async ()=>{
    //     user.setup();
    //     render(<Counter />);
    //     const element = screen.getByRole('spinbutton');
    //     const setButton = screen.getByRole('button',{
    //         name:'set',
    //     });
    //     const clickButton = screen.getByRole('button', {
    //         name:'Click me' 
    //     });
    //     await user.tab();
    //     expect(element).toHaveFocus();
    //     await user.tab();
    //     expect(setButton).toHaveFocus();
    //     await user.tab();
    //     expect(clickButton).toHaveFocus();
    // });

});