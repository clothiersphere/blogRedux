import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

//IndexRoute if route only matches parent - show 
export default (
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex} />
		<Route path="posts/new" component={PostsNew} />
		<Route path="posts/:id" component={PostsShow} />
	</Route>
);

//this.props.params.id - done by react router :id = .id :post_id = .post_id
