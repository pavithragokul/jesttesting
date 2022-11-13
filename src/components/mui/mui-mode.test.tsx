import { render, screen } from "../../test-utils";
import { MuiMode } from "./mui-mode";

describe('MuiMode', ()=>{
    test('render in dark mode', ()=>{
        render(<MuiMode />)
        const element = screen.getByRole('heading');
        expect(element).toHaveTextContent('dark mode');
    });
});