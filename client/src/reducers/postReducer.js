import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState =  {
  items: [], // list of posts
  item: {} // single post being added 
}

export default function(state = initialState, action) {
  switch(action.type) {
    default: 
      return state; 
  }
}