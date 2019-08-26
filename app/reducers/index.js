import axios from 'axios'

// action types
const GET_ALL_CANDIES = 'GET_ALL_CANDIES'

// action creators
const getAllCandiesAction = (candies) => ({
  type: GET_ALL_CANDIES,
  candies
})

// thunk creator
export const getAllCandiesThunk = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/candies')
    const candies = res.data
    dispatch(getAllCandiesAction(candies))
  } catch (error) {
    console.log('Oh no! You received this error: ', error)
  }
}

const rootReducer = (state = { candies: [] }, action) => {
  switch (action.type) {
    case GET_ALL_CANDIES: {
      return {
        ...state,
        candies: action.candies
      }
    }
    default: {
      return state
    }
  }
}

export default rootReducer
