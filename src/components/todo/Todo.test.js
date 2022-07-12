import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./Todo";

describe(`Todo Test Area` ,()=>{
    let addBtn,textinput

beforeEach(()=>{
    render(<Todo/>)
addBtn = screen.getByText(`Add`)
 textinput= screen.getByTitle(`Inputte`)
})

test(`check default items`,()=>{

    const items= screen.getAllByText(/item/i)
    expect(items.length).toEqual(2)
})

test(`check input and btn`,()=>{

expect(addBtn).toBeInTheDocument()
expect(textinput).toBeInTheDocument()

})
test(`is input work ?`,()=>{
const name = `Halil`
userEvent.type(textinput,name)
userEvent.click(addBtn)
expect(screen.getByText(name)).toBeInTheDocument



})

})