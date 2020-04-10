const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: action.err.message,
      };
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: null,
      };
    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return state;
    case 'SIGNUP_SUCCESS':
      console.log('signup success');
      return {
        ...state,
        authError: null,
      };
    case 'SIGNUP_ERROR':
      console.log('signup failed');
      return {
        ...state,
        authError: action.err.message,
      };
    case 'VERIFY_SUCCESS':
      console.log('verify email success');
      return {
        ...state,
        authError: null,
      };
    case 'VERIFY_ERROR':
      console.log('verification failed');
      return {
        ...state,
        authError: action.err.message,
      };
    case 'RECOVERY_SUCCESS':
      console.log('password recovery success');
      return {
        ...state,
        authError: null,
      };
    case 'RECOVERY_ERROR':
      console.log('password recovery failed');
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
