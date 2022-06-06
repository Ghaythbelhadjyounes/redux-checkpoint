import { ADD, DELETE, DONE, EDIT } from "../actionTypes/actionTypes";

const initialState = {
  tasks: [
    { id: Math.random(), text: "Task1", IsDone: false },
    { id: Math.random(), text: "Task2", IsDone: false },
  ],
};

export const TodoRed = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return { ...state, tasks: [...state.tasks, payload] };
    case DELETE:
      return { ...state, tasks: state.tasks.filter((el) => el.id !== payload) };
    case EDIT:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === payload.id ? { ...el, text: payload.newTask } : el
        ),
      };

    case DONE:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === payload ? { ...el, IsDone: !el.IsDone } : el
        ),
      };
    default:
      return state;
  }
};
