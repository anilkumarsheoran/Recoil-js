import React from 'react';
import { useRecoilValue, atom } from 'recoil';
import TodoItemCreator from './TodoCreator';
import TodoItem from './TodoItem';
import filteredTodoListState from './../selector/filterSelector';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './TodoListStats';

function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState);
  
    return (
      <>
        <TodoListStats /> 
        <TodoListFilters />
        <TodoItemCreator />
  
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </>
    );
  }

  export default TodoList;