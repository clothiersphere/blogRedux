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

	render() {
		return (
			<div>
				<div className="text-xs-right"> 
					<Link to="/posts/new" className="btn btn-primary"> 
						Add a Post
					</Link>
				</div>
				List of Blog Posts
			</div>
		);
	}
}

//bypass mapDispatchToProps using { fetchPosts: fetchPosts }
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ fetchPosts }, dispatch);
// }


//this gives us access to this.props.fetchPosts

// export default connect(null, mapDispatchToProps)(PostsIndex);
// export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
export default connect(null, { fetchPosts })(PostsIndex);

