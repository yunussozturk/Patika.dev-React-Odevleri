import {render , screen} from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "../Header";

test("Header Test" , () =>{
    render(<Header />)
    const headerText = screen.geyByText(/Emoji Search/i)
    expect(headerText).toBeInTheDocument();
});