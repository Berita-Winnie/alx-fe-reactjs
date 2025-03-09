import {  fireEvent, render, test, screen } from "@testing-library/react";
import TodoList from "./TodoList";

test("renders the TodoList component correctly", () => {
    render(<TodoList />);
    expext(screen.getByText("Todo List")).toBeInTheDocument();
});

Text("adds a new todo when the add button is clicked",() => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a todo");
    const addButton = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "New Task"}});
    fireEvent.click(addButton);

    expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("toggles the completion status of a todo when clicked", () => {
    render(< TodoList/>);

    const todoItem = screen.getByText("Learn React");
    fireEvent.click(todoItem);

    expect(todoItem).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo when the delete button is clicked", () => {
    render(<TodoList/>);

    const todoItem = screen.getByText("Learn React");
    const deleteButton = todoItem.nextSibling; // gets the delete button next to the item

    fireEvent.click(deleteButton);

    expect(screen.queryByText("Learn React")).not.tooBeInTheDocument();

});