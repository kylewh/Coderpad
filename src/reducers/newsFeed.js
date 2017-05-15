import Immutable from 'immutable' 

const initialState = Immutable.fromJS({})

const newsFeed = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default newsFeed
