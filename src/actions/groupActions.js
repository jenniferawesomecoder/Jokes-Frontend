import fetch from 'isomorphic-fetch'


export const createGroup = (formValues) => {
  console.log('C');
  let data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ group: formValues })
  }

  return dispatch => {
    fetch(`https://jokesproject.herokuapp.com/api/groups`, data)
      .then(response => response.json())
      .then(group => {
        console.log('D');
        dispatch({
              type: 'CREATE_GROUP',
              payload: group
            })})
  }

}
  export const fetchGroups = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_GROUPS' })
      return fetch('https://jokesproject.herokuapp.com/api/groups')
      .then(response => {
        return response.json()
      }).then(groups => {
        console.log('hit', groups);
        return dispatch({ type: 'FETCH_GROUPS', payload: groups })
      })
    }
  }

  export const setGroup = id => {
  console.log(id)
  let data = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    fetch(`https://jokesproject.herokuapp.com/api/groups/${id}`, data)
    .then(response => {
      return response.json()
    }).then (group => {
      return dispatch({
        type: 'SET_GROUP',
        payload: group
      })
    })
  }
}

export const deleteGroup = group => {
  return dispatch => {
    fetch('https://jokesproject.herokuapp.com/api/groups/' + group.id, {
            method: "DELETE",
            headers: {
            'Content-Type': 'application/json'
        }
      })
      .then(response => dispatch({ type: 'DELETE_GROUP', payload: group }));
    }
};

export const addJokeToGroupCollections = (selectedJoke, group) => {
  let id = group.id
  let data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ joke: selectedJoke })
  }

  return dispatch => {
    fetch(`https://jokesproject.herokuapp.com/api/groups/${id}/add_to_collections`, data)
      .then(response => response.json())
      .then(jokes => dispatch({
        type: 'ADD_TO_COLLECTIONS',
        payload: jokes
      }))
  }
}


export const removeJokeFromGroupCollections = (selectedJoke, group) => {
  let id = group.id
  let data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ joke: selectedJoke })
  }

  return dispatch => {
    fetch(`https://jokesproject.herokuapp.com/api/groups/${id}/remove_from_collections`, data)
      .then(response => response.json())
      .then(jokes => dispatch({
        type: 'REMOVE_FROM_COLLECTIONS',
        payload: jokes
      }))
  }
}
