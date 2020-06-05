const initialState = {
  loading: false,
  selectedJoke: null,
  jokeOfDay: null,
  allJokes: [],
}

export default function jokeReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_JOKE_OF_THE_DAY':
      return { ...state, loading: false, jokeOfDay: action.payload}
    case 'LOADING_JOKES':
      return { ...state, loading: true }
    case 'FETCH_JOKES':
      return { ...state, loading: false, allJokes: action.payload }
    case 'JOKE_SELECTED':
      return { ...state, loading: false, selectedJoke: action.payload }
    default: return state
  }
}
