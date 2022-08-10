import {createContext} from 'react'

export const state = {
  payment: null,
  projects: null,
  categories: null,
  requests: null
}

export const State = createContext(state)
