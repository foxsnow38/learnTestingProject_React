import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";


describe(`CounterTestArea` ,()=>{

    test("increaseBtn", ()=>{

        render(<Counter/>)
        const count =screen.getByText(`0`)
        const increaseBtn = screen.getByText(`+`)
        userEvent.click(increaseBtn)
        expect(count).toHaveTextContent(`1`)
    })
    
    test("decreaseBtn", ()=>{
    
        render(<Counter/>)
        const count =screen.getByText(`0`)
        const decreaseBtn = screen.getByText(`-`)
        userEvent.click(decreaseBtn)
        expect(count).toHaveTextContent(`-1`)
    })


})