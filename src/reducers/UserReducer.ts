export const initialState = {
  user: {},
};

export const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'setUser':
      return { ...state, user: action.user };
      break;
    default:
      return state;
  }
}