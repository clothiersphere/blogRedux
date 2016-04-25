import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

//IndexRoute if route only matches parent - show 
export default (
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex} />
		<Route path="posts/new" component={PostsNew} />
	</Route>

);
