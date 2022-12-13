import {render , screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("Emoji Result" , () =>{
    render(<App />);
    const items = screen.getAllByTestId("row")
    expect(items.length).toEqual(20);
});
