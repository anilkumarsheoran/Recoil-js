import React from 'react';
import { useRecoilValue, atom } from 'recoil';
import TodoItemCreator from './TodoCreator';
import TodoItem from './TodoItem';

function TodoList() {const todoListState = atom({
    key: 'todoListState',
    default: [],
  });
    const todoList = useRecoilValue(todoListState);
  
    return (
      <>
        {/* <TodoListStats /> */}
        {/* <TodoListFilters /> */}
        <TodoItemCreator />
  
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </>
    );
  }

  export default TodoList;