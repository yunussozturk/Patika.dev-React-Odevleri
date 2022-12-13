import {render , screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("Copy Emoji", () =>{
    render(<App/>);
    const click = screen.getAllByTestId("row");
    expect(click[0]).toHaveAttribute('data-clipboard-text');
})