

const initialState = {
  loading: false,
  allGroups: [],
  currentGroup: null,
}

export default function groupReducer(state = initialState, action) {
  switch(action.type) {
    case 'LOADING_GROUPS':
      return { ...state, loading: true}
    case 'CREATE_GROUP':
      return { ...state, group: action.payload };
    case 'FETCH_GROUPS':
      return { ...state, loading: false, allGroups: action.payload}
      case 'DELETE_GROUP':
      return {...state, currentGroup: null, loading: false }
    case 'RETRIEVING_SELECTED_GROUP':
      return { ...state, loading: true }
    case 'SET_GROUP':
      return { ...state, currentGroup: state.allGroups.find(group => group.id === action.payload.id) }
    case 'ADD_TO_COLLECTIONS':
      return { ...state, currentGroup: {...state.currentGroup, collections: action.payload }}
    case 'REMOVE_FROM_COLLECTIONS':
      return { ...state, currentGroup: {...state.currentGroup, collections: action.payload }}
    default: return state
  }
}
