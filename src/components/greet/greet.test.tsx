import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

test('render the name as Greet', ()=>{
    render(<Greet />);
    const divElement = screen.getByText(/greet/i);
    expect(divElement).toBeInTheDocument();
})

test('render greet along with name', ()=>{
    render(<Greet name="Pavithra"/>);
    const divElement = screen.getByText(/greet pavithra/i);
    expect(divElement).toBeInTheDocument();
})