import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

describe('Greet component', ()=>{
    it('render greet component', ()=>{
        render(<Greet />)
        const textElement = screen.getByText(/Hello/);
        expect(textElement).toBeInTheDocument()
    })
    it('greet renders with name',()=>{
        render(<Greet name='Welcome to react testing'/>)
        const textElement = screen.getByText('Hello Welcome to react testing')
        expect(textElement).toBeInTheDocument()
    })
})
