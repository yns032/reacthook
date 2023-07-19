import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "SET_TODO":
      return {
        ...state, //stati dönderiyor
        todo: action.value, //inputtaki hepsini yazmayi saglıyor
      };
    case "ADD_TODO":
      return {
        ...state,
        todo: "",
        todos: [...state.todos, action.todo],
      };
  }
}

function Hookreduce() {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    todo: "", //useDtate tanımlamsıdaki gibi
  });

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      todo: state.todo,
    });
  };

  const onChange = (e) => {
    //setTodo(e.target.value)
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  };

  return (
    <div>
      <h1>ToDo App</h1>
      <form onSubmit={submitHandle}>
        <input type="text" value={state.todo} onChange={onChange} />
        <button disabled={!state.todo} onChange={"submit"}>
          Ekle
        </button>
      </form>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Hookreduce;
