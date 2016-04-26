import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts.js'

//import redux-form - grab reducer roperty and create a variable named formReducer
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
