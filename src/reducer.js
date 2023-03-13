export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // REMOVE AFTER DEVELOPING
  // token: 'BQD_TyXeKMe_4Q0rWob-E1T7i8gatPrrn591dnzPdX2MTyn_DCyCBOzv2L4BC-zYqRo5SVB_rE38qkRB6KdXXFORBi9UoGqMPsi6wSoS4Z1Rw8DJNPwDywYdN-Jwphal1RWD8Tp0x6gqkJ0zHZVZKf4dJlGlXONPxHUElrp0QI7p1hrouyE_GrOUU8ZxVuACyiO2Nmc2JCg2lGpeUx9-mA',
};

const reducer = (state, action) => {
console.log(action);

  switch(action.type) {
    case 'SET USER' :
      return {
        ...state,
        user: action.user
      };

      case 'SET_TOKEN':
        return {
          ...state,
          token: action.token
        };

        case 'SET_PLAYLISTS':
          return {
            ...state,
            playlists: action.playlists,
          };
    default:
      return state;
  }
}

export default reducer;