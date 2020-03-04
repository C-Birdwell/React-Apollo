import { FLAG_NEW_USER, LOADING } from '../typeDefs'

export const _flagNewUser = payload => ({
  type: FLAG_NEW_USER,
  payload,
})

export const _flagLoading = payload => ({
  type: LOADING,
  payload,
})
