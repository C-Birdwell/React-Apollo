import { FLAG_NEW_USER, LOADING } from '../typeDefs'

const INITIAL_STATE = {
  flagNewUser: false,
  loading: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FLAG_NEW_USER:
      return { ...state, flagNewUser: action.payload }

    case LOADING:
      return { ...state, loading: action.payload }

    default:
      return { ...state }
  }
}
