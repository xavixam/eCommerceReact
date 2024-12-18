const users = (state, action) => {
  switch (action.type) {
    case "CREATE_TASK":
      return {
        ...state,
        register: [action.payload, ...state.register],
      };
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
      case "GET_USER_INFO":
        return {
          ...state,
          user: action.payload,
        };  
        case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null
      };
    default:
      return state;
  }
};
export default users;
