const initialState = {
  userInfo: {},
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        userInfo: action.userInfo,
      };
    default:
      return state;
  }
}