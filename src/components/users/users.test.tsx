import { render, screen } from "@testing-library/react";
import { Users } from "./users";

describe('Render user', ()=>{
    it('render heading element', ()=>{
        render(<Users />);
        const headingElement = screen.getByRole('heading');
        expect(headingElement).toBeInTheDocument();
    });
    it('renders a list of users', async ()=>{
        render(<Users />);
        const getUsers = await screen.findAllByRole('listitem');
        expect(getUsers).toHaveLength(3);
    })
});