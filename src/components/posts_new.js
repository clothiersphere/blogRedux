import React, { Component } from 'react';

//near identical to { connect }
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
	render () {
		// const handleSubmit = this.props.handleSubmit;
		// const title = this.props.fields.title;

		// {...title} means that all of the properties on the title object show up in the input
		//<input type="text" className="form-control" onChange={title.onChange} onUpdate={title.onUpdate}/>

		const { fields: { title, categories, content }, handleSubmit } = this.props;

	 	return (	
		 	<form onSubmit={handleSubmit}>
		 		<h3>Create A New Post</h3>
		 		<div className="form-group">
		 			<label>Title</label>	
		 			<input type="text" className="form-control" {...title} />
		 		</div>
		 		
		 		<div className="form-group">
		 			<label>Categories</label>	
		 			<input type="text" className="form-control" {...categories} />
		 		</div>
		 		
		 		<div className="form-group">
		 			<label>Content</label>	
		 			<textarea className="form-control" {...content} />
		 		</div>
		 		
		 		<button type="submit" className="btn btn-primary">Submit</button>
	 		</form>
	 	)
	}
}

//handles state and injects helpers into this.props component
export default reduxForm({ 
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content']
})(PostsNew);

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