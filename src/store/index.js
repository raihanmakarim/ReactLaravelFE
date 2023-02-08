import { createStore } from "redux";

const reducerFn = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, counter: state.counter + 1 };
    case "Decrement":
      return { ...state, counter: state.counter - 1 };
  }
  return state;
};

const store = createStore(reducerFn);

export default store;
