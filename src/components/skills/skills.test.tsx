import { logRoles, render, screen } from "@testing-library/react"
import { Skills } from "./skills"

describe('Skills',()=>{
    test('renders correctly',()=>{
        render(<Skills skills={['Html','Css']}/>);
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    });
    test('render list of skills', ()=>{
        render(<Skills skills={['Html','css','js']}/>);
        const listElement = screen.getAllByRole('listitem');
        expect(listElement).toHaveLength(3);
    });
    test('render logIn button', ()=>{
        render(<Skills skills={['Html','css','js']}/>);
        const buttonElement = screen.getByRole('button', {
            name: 'logIn'
        });
        expect(buttonElement).toBeInTheDocument();
    });
    test('not render start learning button', ()=>{
        render(<Skills skills={['Html','css','js']}/>);
        const buttonElement = screen.queryByRole('button',{
            name: 'start Learning'
        });
        expect(buttonElement).not.toBeInTheDocument();
    });
    test('render start learning button', async ()=>{
        const view = render(<Skills skills={['Html','css','js']}/>);
        //logRoles(view.container)
        const buttonElement = await screen.findByRole('button',{
            name: 'start Learning'
        },{
            timeout: 5000
        });
        expect(buttonElement).toBeInTheDocument();
    });
})