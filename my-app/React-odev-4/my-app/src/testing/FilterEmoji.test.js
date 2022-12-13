import {render , screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("Filter Emoji", () =>{
    render(<App />);
    const inputText = screen.getByText("100")
    expect(inputText).toBeInTheDocument()
});