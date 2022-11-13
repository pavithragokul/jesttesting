import { render, screen } from "@testing-library/react";
import { ApplicationForm } from "./application";

describe('Application',()=>{
    test('render component',()=>{
        render(<ApplicationForm />);

        const headingLevel1 = screen.getByRole('heading',{
            level: 1,
        })
        expect(headingLevel1).toBeInTheDocument();
        const headingLevel2 = screen.getByRole('heading',{
            level: 2,
        })
        expect(headingLevel2).toBeInTheDocument();

        const textInput = screen.getByRole('textbox',{
            name:'Name',
        });
        expect(textInput).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox',{
            name: 'Bio',
        });
        expect(bioElement).toBeInTheDocument();

        const selectElement = screen.getByRole('combobox');
        expect(selectElement).toBeInTheDocument();

        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();

        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();

        const inputElementLabel = screen.getByLabelText('Name');
        expect(inputElementLabel).toBeInTheDocument();

        //suppose with same name then use selector option
        const inputElementLabel1 = screen.getByLabelText('Name',{
            selector: 'input',
        }
        );
        expect(inputElementLabel1).toBeInTheDocument();

        //for getbyPlaceholderText query
        const inputElementViaPlaceHolder = screen.getByPlaceholderText('fullName');
        expect(inputElementViaPlaceHolder).toBeInTheDocument();

        //for getByText query
        const paragraphElement = screen.getByText('All fields are mandatory', {exact:false});
        expect(paragraphElement).toBeInTheDocument();

        //for getBydisplayValue querry
        const inputElement3 = screen.getByDisplayValue('Pavithra');
        expect(inputElement3).toBeInTheDocument();

        //for getByAltText querry
        const altElement = screen.getByAltText('a person with a laptop');
        expect(altElement).toBeInTheDocument();

        //for getByTitle query
        const titleElement = screen.getByTitle('Close');
        expect(titleElement).toBeInTheDocument();

        //for getByTestId query
        const headingElement=  screen.getByTestId('heading-level1');
        expect(headingElement).toBeInTheDocument();

        //for regex match with getByText
        const headingElement1 = screen.getByText(/^Road to goal$/i)
        expect(headingElement1).toBeInTheDocument();

        //for custom function
        const customTest = screen.getByText((content)=>content.startsWith('Road'))
        expect(customTest).toBeInTheDocument();
    })
})