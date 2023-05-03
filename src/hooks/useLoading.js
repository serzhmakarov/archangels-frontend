import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
// import LoadingGif from '../assets/images/loading.gif';

const withLoading = Component => (props) => {
	if (!props.isLoaded) {
		return (
			<div className="loader-spinner">
				<Spinner animation="border" className="spinner" />
			</div>
		);
	}

	return <Component {...props} />
}

export default withLoading; 

