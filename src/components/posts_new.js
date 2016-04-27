import React, { Component, PropTypes } from 'react';
//near identical to { connect }
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';
 
class PostsNew extends Component {
	
	//need access to router property - go through all parents to find router and then assign it to this.context.router  - 
	static contextTypes = {
		router: PropTypes.object
	};

	onSubmit(props) {
		this.props.createPost(props)
			.then(() => { 
				//blogpost has been created, navigate user to index
				//we navigate by calling this.context.router.push with the new path to navigate
				this.context.router.push('/');
			});
	}

	render () {
		// const handleSubmit = this.props.handleSubmit;
		// const title = this.props.fields.title;

		// {...title} means that all of the properties on the title object show up in the input
		//<input type="text" className="form-control" onChange={title.onChange} onUpdate={title.onUpdate}/>
		const { fields: { title, categories, content }, handleSubmit } = this.props;

	 	return (	
		 	<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
		 		<h3>Create A New Post</h3>

		 		<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
		 			<label>Title</label>	
		 			<input type="text" className="form-control" {...title} />
		 			<div className="text-help">
		 				{title.touched ? title.error : ''}
		 			</div>
		 		</div>
		 		
		 		<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
		 			<label>Categories</label>	
		 			<input type="text" className="form-control" {...categories} />
		 			<div className="text-help">
		 				{categories.touched ? categories.error : ''}
		 			</div>
		 		</div>
		 		
		 		<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
		 			<label>Content</label>	
		 			<textarea className="form-control" {...content} />
		 			<div className="text-help">
		 				{content.touched ? content.error : ''}
		 			</div>
		 		</div>
		 		
		 		<button type="submit" className="btn btn-primary">Submit</button>
		 		<Link to="/posts/new" className="btn btn-danger">Cancel</Link>
	 		</form>
	 	)
	}
}

function validate(values) {
	const errors = {};
	
	if (!values.title) {
		errors.title = 'Enter a username';
	}
	if (!values.categories) {
		errors.categories = 'Enter categories';
	}
	if (!values.content) {
		errors.content = 'Enter some content';
	}

	return errors;
}

//handles state and injects helpers into this.props component
//reduxForm can be used to inject our action creators into our component and create a container

//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({ 
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content'],
	validate
}, null, { createPost })(PostsNew);

//user types something in ...record it on application state
//state === { 
//	form: {
			// PostsNewForm: {
				// title: '.....'
				// categories: '.....'
				// content: '.....'
			// }
// }
//}