export default function authReducer(state, action) {
  switch (action.type) {
    case "UPDATE": {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    default:
      break;
  }
}
