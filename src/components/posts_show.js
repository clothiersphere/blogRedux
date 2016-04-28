import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

//the id is coming from the url - pull the id from url - pass it to fetchPost 
// fetchPost makes back end request - resolves w/ data reducer picks it up

class PostsShow extends Component { 
	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}

	render() {
		const { post } = this.props;
		// const post = this.props.post;

		if (!this.props.post) {
			return <div>loading..</div>
		}

		return (
			<div>
				<h3>{post.title}</h3>
				<h3>Categories: {post.categories}</h3>
				<p>{post.content}</p>
			</div>
		)
	}
}

// export default PostsShow;

function mapStateToProps(state) {
	return { post: state.posts.post };
}

// export default connect(null, { fetchPost })(PostsShow);
export default connect(mapStateToProps, { fetchPost })(PostsShow);