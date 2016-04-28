import { FETCH_POSTS, FETCH_POST } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
	//...take current state - and set all to action.payload.data
	switch(action.type) {
	case FETCH_POST:
		return { ...state, post: action.payload.data}
	case FETCH_POSTS: 
		return { ...state, all: action.payload.data };
	default: 
		return state;
	}
}