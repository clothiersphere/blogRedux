import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index.js';
import { Link } from 'react-router';

//componentWillMount - react will call this automatically whenever this will be called the first time.

class PostsIndex extends Component { 
	componentWillMount() {
		this.props.fetchPosts();
	}

	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<li className="list-group-item" key={post.id}>
					<Link to={"posts/" + post.id}>
						<span className="pull-xs-right">{post.categories}</span>
						<strong>{post.title}</strong>
					</Link>
				</li>
			)
		})
	}

	render() {
		return (
			<div>
				<div className="text-xs-right"> 
					<Link to="/posts/new" className="btn btn-primary"> 
						Add a Post
					</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts.all };
}
//bypass mapDispatchToProps using { fetchPosts: fetchPosts }
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ fetchPosts }, dispatch);
// }


//this gives us access to this.props.fetchPosts

// export default connect(null, mapDispatchToProps)(PostsIndex);
// export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);

// export default connect(null, { fetchPosts })(PostsIndex);
//hooking up mapStateToProps 
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);

