import { createStore } from "redux";

const initialState = {
  todos: [],
  isOpen: false
};

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

// action creator
export function addTodo(todo) {
  return { type: ADD_TODO, todo };
}

export function removeTodo(index) {
  return { type: REMOVE_TODO, index };
}

// action
// { type: "ADD_TODO", todo: 'mercar' }

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      // agregamos el todo, copiando los viejos, y dejando el resto del state sin afectar
      return { ...state, todos: [...state.todos, action.todo] };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.index)
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
