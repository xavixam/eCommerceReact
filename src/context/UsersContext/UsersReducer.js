const users = (state, action) => {
  switch (action.type) {
    case "CREATE_TASK":
      return {
        ...state,
        register: [action.payload, ...state.register],
      };
    default:
      return state;
  }
};
export default users;
