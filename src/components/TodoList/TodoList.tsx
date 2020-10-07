import React from "react";
import styled from "styled-components";
import { todoList, addItem } from "./todoListSlice";
import { useSelector, useDispatch } from "react-redux";

const StyledList = styled.ul`
  background-color: #fff;
`;

const AddButton = styled.button`
  background-color: red;
  padding: 5px;
  min-width: 12px;
`;

const StyledItem = styled.li`
  min-height: 10px;
  background-color: aliceblue;
  border: solid 1px green;
  margin-bottom: 2px;
`;

export const TodoList: React.FunctionComponent<any> = (): any => {
  const todoListArray = useSelector(todoList);
  const dispatch = useDispatch();

  return (
    <StyledList>
      {todoListArray.map((todo, index) => (
        <StyledItem key={index}> {todo.task}</StyledItem>
      ))}
      <AddButton
        onClick={() => dispatch(addItem({ task: "new task", checked: false }))}
      >
        Add Item
      </AddButton>
    </StyledList>
  );
};
